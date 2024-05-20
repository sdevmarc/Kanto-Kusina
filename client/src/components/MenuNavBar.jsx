import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './css/MenuNavBar.css'

export default function MenuNavBar() {
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
            <div className={`sticky top-0 w-full flex justify-between items-center px-[3rem] py-[1rem] bg-[#000] z-20 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
                <div className='h-full flex justify-start items-center cursor-pointer'>
                    <h1 className='font-extrabold text-[#ffcb05] text-[3rem] tracking-[.18rem]'>
                        KANTO KUSINA
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-[1rem]">
                    <NavLink to={`/`} className='text-[.9rem] text-[#ffcb05] font-extrabold duration-300 ease hover:bg-[#ffcb05] hover:text-[#000] px-[1.5rem] tracking-[.2rem]'>
                        HOME
                    </NavLink>
                    <NavLink to={`/menu`} className='text-[.9rem] text-[#ffcb05] font-extrabold duration-300 ease hover:bg-[#ffcb05] hover:text-[#000] px-[1.5rem] tracking-[.2rem]'>
                        MENU
                    </NavLink>
                    <button
                        onClick={() =>  navigate('/orderonline')}
                        className='px-[1rem] py-[.3rem] text-[#ffcb05] font-[800] border-[2px] border-[#ffcb05] text-[.9rem] duration-300 hover:bg-[#ffcb05] hover:text-[#000] ease tracking-[.2rem]'>
                        ORDER ONLINE
                    </button>
                </div>
            </div>
        </>
    )
}
