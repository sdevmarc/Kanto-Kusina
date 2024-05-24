import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './css/Home.css'
import Footer from '../components/Footer'
import F2 from '../assets/f2.png'
import F3 from '../assets/f3.png'
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        fetchToken()
    }, [])

    const fetchToken = () => {
        const token = localStorage.getItem('userId')
        if (token) return navigate('/dashboard')
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

    const handleMenu = () => {
        navigate('/viewmenu')
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
                <div className="hero relative w-full h-[60dvh] px-[20rem] flex justify-start items-center">
                    <div className="z-[1] flex flex-col gap-[3rem]">
                        <div className="flex flex-col">
                            <h1 className='font-[600] text-[#ffcb05] text-[5rem]'>KANTO</h1>
                            <h1 className='font-[600] text-[#ffcb05] text-[5rem]'>KUSINA</h1>
                            <h1 className='font-[400] text-white text-[1rem]'>
                                Sa bawat subo, lasap ang puso, luto ng chef na puno ng puso!
                            </h1>
                        </div>
                        <button
                            onClick={handleMenu}
                            className='w-[10rem] h-[3rem] text-[.8rem] duration-300 ease hover:scale-[.98] hover:bg-[#000] hover:text-[#ffcb05] bg-[#ffcb05] text-black font-[600]'
                        >
                            See Menu
                        </button>
                    </div>
                </div>
                <div className="w-full h-[60dvh] bg-[#ffffff] px-[20rem] flex flex-col justify-center items-center gap-[3rem]">
                    <p className='w-[80%] text-[1.3rem] text-center font-[500]'>
                        Welcome to Kanto Kusina Restaurant, where we are committed to providing you with an unforgettable dining experience. From our cozy atmosphere to our mouth-watering dishes, we are dedicated to making your visit a memorable one.
                    </p>
                    <p className='w-[80%] text-[1.3rem] text-center font-[500]'>
                        At Kanto Kusina Restaurant, we are passionate about bringing you the best of local cuisine. Our chefs have years of experience in creating delicious dishes that showcase the flavors in the town of Bayombong.
                    </p>
                </div>
                <div className="w-full py-[5rem] bg-white">
                    <div className="w-full py-[2rem] flex justify-between items-center px-[20rem]">
                        <div className="w-[50%] flex flex-col gap-[.7rem]">
                            <h1 className='font-[600] text-[2rem]'>Are you looking for a unique dining experience?</h1>
                            <p className='text-black'>Reserve your table today at tikman ang lutong pang malakasan dito sa Kanto Kusina. Our team is here to assist with any questions or special requests. Enjoy the convenience of our services: order online, pickup, and curbside pickup. Experience unforgettable flavors, whether dining in or taking out!</p>
                        </div>
                        <div className="overflow-hidden w-[40%] h-[25rem]">
                            <img src={F2} alt="F2" className='object-contain w-full h-full' />
                        </div>
                    </div>
                    <div className="w-full py-[2rem] flex justify-between items-center px-[20rem]">
                        <div className="overflow-hidden w-[40%] h-[25rem]">
                            <img src={F3} alt="F2" className='object-contain w-full h-full' />
                        </div>
                        <div className="w-[50%] flex flex-col gap-[.7rem]">
                            <h1 className='font-[600] text-[2rem]'>
                                Gusto mo bang kakaibang kainan?
                            </h1>
                            <p className='text-black'>Mag-reserba na ngayon at tikman ang sarap ng pinoy!</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-[5rem]">
                    <h1 className='font-bold text-[3rem] text-black'>We are Located At</h1>
                    <div className="w-[100%] h-[70dvh] flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3825.754636860728!2d121.15600177514493!3d16.487957184253908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339044104a33ec8b%3A0xf1afdaa222efc22f!2sDistrict%20IV%2C%20Bayombong%2C%20Nueva%20Vizcaya!5e0!3m2!1sen!2sph!4v1716314418593!5m2!1sen!2sph" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
