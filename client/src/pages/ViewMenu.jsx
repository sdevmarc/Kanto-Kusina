import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './css/Home.css'
import Footer from '../components/Footer'
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


export default function ViewMenu() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const [details, setDetails] = useState([])
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        fetchToken()
        fetchMenu()
    }, [])

    const fetchToken = () => {
        const token = localStorage.getItem('userId')
        if (token) return navigate('/dashboard')
    }

    const fetchMenu = async () => {
        const res = await axios.get('http://localhost:3001/api/getallproducts')
        setDetails(res?.data?.data)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const res = await axios.post('http://localhost:3001/api/login', values)
            if (res?.data?.success) {
                const userId = res?.data?.userId
                localStorage.setItem('userId', JSON.stringify({ userId }));
                return navigate('/dashboard')
            } else {
                alert(res?.data?.message)
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleOnChange = async (e) => {
        const { name, value } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <div className="flex flex-col">
                <Navbar isSignIn={handleOpen} />
                <div className="w-full px-[2rem] sm:px-[5rem] md:px-[10rem] py-[1rem] flex flex-col gap-[1rem]">
                    <h1 className='text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-[600]'>Menu</h1>
                    <div className="w-full h-full flex justify-evenly gap-[1rem] flex-wrap">
                        {
                            details?.map((item) => (
                                <div key={item?._id}
                                    className="overflow-hidden w-[15rem] sm:w-[15rem] md:w-[17rem] h-[17rem] sm:h-[17rem] md:h-[22rem] rounded-xl duration-300 ease hover:scale-[.98] flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                                    <div className="overflow-hidden w-full h-[60%] bg-black">
                                        {
                                            item?.productInformation?.productPhoto ? (
                                                <img
                                                    src={`http://localhost:3001/uploads/${item?.productInformation?.productPhoto}`}
                                                    alt="Product image"
                                                    className='object-cover w-full h-full'
                                                />
                                            ) : (
                                                <img
                                                    src={`https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg`}
                                                    alt="Product image"
                                                    className='object-cover w-full h-full'
                                                />
                                            )
                                        }

                                    </div>
                                    <div className="overflow-auto w-full h-[40%] flex flex-col px-[1rem] gap-[.5rem] py-[.5rem]">
                                        <h1 className=' overflow-hidden w-full h-[30%] text-black text-[.8rem] sm:text-[1rem] md:text-[1.7rem] font-[600] text-ellipsis'>
                                            {item?.productInformation?.productName}
                                        </h1>

                                        <p className='overflow-auto w-full h-[60%] text-black text-justify text-[.7rem] text-ellipsis'>
                                            {item?.productInformation?.productDetails}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <form
                    onSubmit={handleLogin}
                    className="form absolute top-[50%] flex flex-col justify-center items-center px-[1.5rem] sm:px-[2.5rem] md:px-[4rem] gap-[2rem] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20rem] sm:w-[25rem] md:w-[30rem] h-[25rem] sm:h-[30rem] md:h-[35rem] rounded-[2rem] bg-[#222222] py-[2rem] sm:py-[3rem] md:py-[5rem]"
                >
                    <div className="absolute top-[-1rem] right-[-1rem]">
                        <IconButton
                            onClick={handleClose}
                            variant="text"
                            sx={{ padding: '.4rem', backgroundColor: '#e5e5e5' }}
                        >
                            <CloseIcon sx={{ color: '#000000', fontSize: '1.1rem' }} />
                        </IconButton>
                    </div>
                    <h1 className='text-white font-[600] text-[1.3rem]'>Welcome back!</h1>
                    <div className="w-full flex flex-col gap-[.5rem]">
                        <h1 className='text-white font-[400] text-[1.1rem]'>
                            Username
                        </h1>
                        <input
                            name='username'
                            value={values?.username}
                            onChange={handleOnChange}
                            type="text"
                            placeholder='Enter your username'
                            className='rounded-lg py-[.7rem] px-[1rem] text-[.8rem] outline-none text-black'
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[.5rem]">
                        <h1 className='text-white font-[400] text-[1.1rem]'>
                            Password
                        </h1>
                        <input
                            name='password'
                            value={values?.password}
                            onChange={handleOnChange}
                            type="text"
                            placeholder='Enter your password'
                            className='rounded-lg py-[.7rem] px-[1rem] text-[.8rem] outline-none text-black'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full h-[2.5rem] rounded-lg bg-[#ffcb05] duration-300 ease hover:opacity-[.6] hover:scale-[.98] text-black font-bold'>
                        Login
                    </button>
                </form>
            </Modal>
        </>
    )
}
