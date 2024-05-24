import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './css/Home.css'
import Footer from '../components/Footer'
import F2 from '../assets/f2.png'
import F3 from '../assets/f3.png'
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/loginu', values)
            console.log(res?.data?.userId)
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
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="form absolute top-[50%] flex flex-col justify-center items-center px-[4rem] gap-[2rem] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[35rem] rounded-[2rem] bg-[#222222] py-[5rem]">
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
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className='w-full h-[2.5rem] rounded-lg bg-[#ffcb05] duration-300 ease hover:opacity-[.6] hover:scale-[.98]'>
                        Login
                    </button>
                </div>

            </Modal>
            <div className="flex flex-col">
                <Navbar isSignIn={handleOpen} />
                <div className="w-full h-screen p-[1rem] flex flex-col gap-[1rem]">
                    <h1 className='text-[2rem] font-[600]'>Menu</h1>
                    <div className="w-full h-full flex justify-start gap-[1rem]">
                        {
                            details?.map((item) => (
                                <div key={item?._id}
                                    className="overflow-hidden w-[17rem] h-[22rem] rounded-xl duration-300 ease hover:scale-[.98] flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                                    <div className="overflow-hidden w-full h-[60%] bg-black">
                                        <img
                                            src={`http://localhost:3001/uploads/${item?.productInformation?.productPhoto}`}
                                            alt="Product image"
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <div className="overflow-auto w-full h-[40%] flex flex-col px-[1rem] gap-[.5rem] py-[.5rem]">
                                        <h1 className='w-full h-[30%] text-black text-[1.7rem] font-[600] text-ellipsis'>
                                            {item?.productInformation?.productName}
                                        </h1>

                                        <p className='w-full h-[60%] text-black text-justify text-[.7rem] text-ellipsis overflow-hidden'>
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
        </>
    )
}
