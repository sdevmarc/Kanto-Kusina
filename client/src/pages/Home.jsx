import React from 'react'
import Navbar from '../components/Navbar'
import FeaturedFood from '../assets/FeaturedFood.jpg'
import './css/Home.css'

export default function Home() {
    return (
        <>
            <div className="hero relative flex flex-col">
                <Navbar />
                <div className="overflow-hidden w-full h-[90dvh] flex bg-[#ffcb05] pl-[2rem]">
                    <div className="w-[50%] h-full flex flex-col justify-center items-center">
                        <h1
                            className='text-[6rem] font-bold text-white'
                        >
                            MALIGAYANG
                        </h1>
                        <h1
                            className='text-[6rem] font-bold text-white'
                        >
                            PAGBABALIK!
                        </h1>
                    </div>
                    <div className="overflow-hidden w-[50%] h-full">
                        <img
                            src={FeaturedFood}
                            alt=""
                            className='object-cover w-full' />
                    </div>
                </div>

            </div>
            <div className="services relative w-full h-[60dvh] bg-[#111111] py-[2rem] px-[3rem]">
                <div className="w-full h-full flex flex-col justify-center items-center gap-[2rem]">
                    <h1
                        className='font-[600] text-[4rem] text-[#ffffff]'
                    >
                        SERVICES
                    </h1>
                    <div className="w-full flex justify-evenly items-center">
                        <h1
                            className=' text-[3rem] text-[#ffffff]'
                        >
                            Dine-In
                        </h1>
                        <h1
                            className='text-[3rem] text-[#ffffff]'
                        >
                            Takeout
                        </h1>
                        <h1
                            className='text-[3rem] text-[#ffffff]'
                        >
                            Curbside-Pickup
                        </h1>
                    </div>

                </div>
            </div>
            <div className="w-full h-[80dvh] bg-[#ffcb05] py-[2rem] px-[3rem]">

            </div>
        </>
    )
}
