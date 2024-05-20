import React, { useEffect, useState } from 'react';
import './css/Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOrderOnline = () => {
        navigate('/orderonline')
    }

    return (
        <>
            <div className="w-full h-[3rem] bg-[#000] flex justify-center items-center">
                <h1 className='text-[#ffcb05] font-[800] text-[.9rem] tracking-[.3rem]'>
                    Mama's Legacy to Feed
                </h1>
            </div>
            <div className={`sticky top-0 w-full flex justify-between items-center px-[3rem] py-[1rem] bg-[#ffcb05] z-20 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
                <div className='h-full flex justify-start items-center cursor-pointer'>
                    <h1 className='font-extrabold text-black text-[3rem] tracking-[.18rem]'>
                        KANTO KUSINA
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-[1rem]">
                    <a href='#' className='text-[.9rem] text-black font-extrabold duration-300 ease hover:bg-black hover:text-[#ffcb05] px-[1.5rem] tracking-[.2rem]'>
                        HOME
                    </a>
                    <a href='#menu' className='text-[.9rem] text-black font-extrabold duration-300 ease hover:bg-black hover:text-[#ffcb05] px-[1.5rem] tracking-[.2rem]'>
                        MENU
                    </a>
                    <a href='#services' className='text-[.9rem] text-black font-extrabold duration-300 ease hover:bg-black hover:text-[#ffcb05] px-[1.5rem] tracking-[.2rem]'>
                        SERVICES
                    </a>
                    <a href='#location' className='text-[.9rem] text-black font-extrabold duration-300 ease hover:bg-black hover:text-[#ffcb05] px-[1.5rem] tracking-[.2rem]'>
                        LOCATION
                    </a>
                    <button
                        onClick={handleOrderOnline}
                        className='px-[1rem] py-[.3rem] text-black font-[800] border-[2px] border-black text-[.9rem] duration-300 hover:bg-black hover:text-[#ffcb05] ease tracking-[.2rem]'>
                        ORDER ONLINE
                    </button>
                </div>
            </div>
        </>
    )
}
