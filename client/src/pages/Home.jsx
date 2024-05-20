import React from 'react'
import Navbar from '../components/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'
import { Link } from 'react-router-dom'
import './css/Home.css'

export default function Home() {
    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="featured relative overflow-hidden w-full h-[90dvh] flex flex-col justify-center items-center gap-10">
                    <h1 className='text-black text-[4rem] font-extrabold bg-[#ffcb05] p-[2rem] rotate-[-5deg] z-10'>
                        MALIGAYANG PAGBABALIK!
                    </h1>
                    <h1
                        className='text-white text-[5rem] font-bold z-10'
                    >
                        YES, WE'RE OPEN!
                    </h1>
                </div>
                <div
                    id='menu'
                    className="w-full h-[80dvh] bg-[#ffcb05] flex flex-col justify-center items-center">
                    <h1

                    >
                        MENU
                    </h1>
                    <Link to={`/menu`}>
                        See more
                    </Link>
                </div>
                <div
                    id='services'
                    className="w-full h-[40dvh] bg-[#000] flex justify-center items-center">
                    <h1

                        className='text-white'
                    >
                        SERVICES
                    </h1>
                </div>
                <div
                    id='location'
                    className="w-full h-[80dvh] bg-[#ffcb05] flex justify-center items-center">
                    <h1

                    >
                        LOCATION
                    </h1>
                </div>
                <footer className="w-full h-[40dvh] bg-[#000] py-[2rem] px-[3rem] flex flex-col justify-center items-center gap-[1rem]">
                    <h1 className='font-[500] text-[1rem] text-[#ffffff] tracking-[1rem]'>
                        CONNECT WITH US
                    </h1>
                    <div className="flex gap-[2rem]">
                        <a
                            href="https://www.facebook.com/kantokusina"
                            className="text-[#ffffff] text-[2rem]"
                            target='_blank'
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="mailto:jactubaran07@gmail.com"
                            className="text-[#ffffff] text-[2rem]"
                        >
                            <EmailIcon />
                        </a>

                    </div>
                    <div className="text-[#ffffff] text-[.8rem] text-center">
                        <p>&copy; 2024 Kanto Kusina. All rights reserved.</p>
                        <p>Bonifacio Street, Barangay Dist IV, Bayombong, Philippines | +639069645470</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
