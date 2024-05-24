import React from 'react';
import './css/Navbar.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../public/KKLogo.jpg'
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar({ isSignIn }) {
    return (
        <>
            <div className="w-full h-[3dvh] bg-[#000] flex justify-center items-center">
                <h1 className='text-[#ffcb05] font-[800] text-[.7rem] tracking-[.3rem]'>
                    MAMA'S LEGACY TO FEED
                </h1>
            </div>
            <div className={`sticky top-0 w-full h-[7dvh] bg-white flex justify-between items-center px-[18rem] z-[2] transition-all duration-300'}`}>
                <div className="overflow-hidden h-full flex justify-start items-center gap-[1rem]">
                    <div className="overflow-hidden w-[2rem] h-[h-full] bg-black">
                        <img src={Logo} alt="Logo" className='object-cover w-full h-full' />
                    </div>
                    <NavLink
                        to={`/`}
                        className='font-[500] text-black text-[.9rem]'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/viewmenu`}
                        className='font-[500] text-black text-[.9rem]'
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to={`/`}
                        className='font-[500] text-black text-[.9rem]'
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to={`/`}
                        className='font-[500] text-black text-[.9rem]'
                    >
                        Order Online
                    </NavLink>
                </div>
                <div className="h-full flex justify-end items-center gap-[.7rem]">
                    <IconButton variant="text" sx={{ padding: '.7rem', backgroundColor: '#e5e5e5' }}>
                        <ShoppingCartIcon sx={{ color: '#000000', fontSize: '1.1rem' }} />
                    </IconButton>
                    <IconButton variant="text" sx={{ padding: '.7rem', backgroundColor: '#e5e5e5' }}>
                        <SearchIcon sx={{ color: '#000000', fontSize: '1.1rem' }} />
                    </IconButton>
                    <button
                    onClick={isSignIn}
                        className='px-[2rem] py-[.3rem] bg-[#ffcb05] text-[#000] text-[.9rem] font-[500] duration-300 ease hover:bg-black hover:text-[#ffcb05] hover:scale-[.98]'
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </>
    )
}
