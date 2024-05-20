import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css'
import Logo from '../assets/KKLogo.jpg'

export default function Navbar() {
    return (
        <>
            <div className="absolute w-full h-[9rem] flex justify-between items-center px-[3rem] py-[1rem]">
                <div className="flex justify-between items-center gap-[6rem] pl-[2rem] pr-[4rem] py-[1rem] bg-[#111111] rounded-tr-[1rem] rounded-bl-[1rem] rounded-tl-[.3rem] rounded-br-[.3rem]">
                    <div className="flex justify-start items-center gap-[.7rem] cursor-pointer">
                        <div className="overflow-hidden w-[2rem] h-full bg-black">
                            <img
                                src={Logo}
                                alt="Kanto Kusina Logo"
                                className='object-cover w-full'
                            />
                        </div>
                        <h1
                            className='font-[600] text-[#ffffff]'
                        >
                            Kanto Kusina
                        </h1>
                    </div>

                    <div className="flex justify-center items-center gap-[1.5rem]">
                        <NavLink
                            to={'/'}
                            className={`text-[.9rem] text-[#ffffff]`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/'}
                            className={`text-[.9rem] text-[#ffffff]`}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to={'/'}
                            className={`text-[.9rem] text-[#ffffff]`}
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to={'/'}
                            className={`text-[.9rem] text-[#ffffff]`}
                        >
                            Order now
                        </NavLink>
                    </div>
                </div>
                <div>
                    <button
                        className='px-[3rem] py-[.8rem] bg-[#111111] text-[#ffffff] rounded-br-[1rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-tl-[.5rem] text-[.9rem] font-[600] duration-300 hover:scale-[.98] hover:opacity-[.9] ease'
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    )
}
