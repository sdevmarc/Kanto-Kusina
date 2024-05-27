import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/KKLogo.jpg'

export default function Navbar({ isSignIn }) {
    return (
        <>
            <div className="w-full h-5 bg-black flex justify-center items-center">
                <h1 className='text-yellow-500 font-extrabold text-xs tracking-widest'>
                    MAMA'S LEGACY TO FEED
                </h1>
            </div>
            <div className="sticky top-0 w-full h-16 bg-white flex justify-between items-center px-8 sm:px-12 md:px-24 lg:px-48 z-10 transition-all duration-300">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-black overflow-hidden">
                        <img src={Logo} alt="Logo" className='object-cover w-full h-full' />
                    </div>
                    <NavLink
                        to={`/`}
                        className='font-medium text-black text-[.6rem] sm:text-[.8rem] md:text-[.9rem]'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/viewmenu`}
                        className='font-medium text-black text-[.6rem] sm:text-[.8rem] md:text-[.9rem]'
                    >
                        Menu
                    </NavLink>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={isSignIn}
                        className='px-4 py-1 bg-yellow-500 text-black text-[.6rem] sm:text-[.8rem] md:text-[.9rem] font-medium transition duration-300 hover:bg-black hover:text-yellow-500 hover:scale-95'
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </>
    )
}
