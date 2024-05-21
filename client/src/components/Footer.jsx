import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
    return (
        <footer className="w-full h-[40dvh] bg-[#ffcb05] py-[2rem] px-[3rem] flex flex-col justify-center items-center gap-[1rem]">
            <h1 className='font-[500] text-[1rem] text-[#000] tracking-[1rem]'>
                CONNECT WITH US
            </h1>
            <div className="flex gap-[2rem]">
                <a
                    href="https://www.facebook.com/kantokusina"
                    className="text-[#000] text-[2rem]"
                    target='_blank'
                >
                    <FacebookIcon />
                </a>
                <a
                    href="mailto:jactubaran07@gmail.com"
                    className="text-[#000] text-[2rem]"
                >
                    <EmailIcon />
                </a>

            </div>
            <div className="text-[#000] text-[.8rem] text-center">
                <p>&copy; 2024 Kanto Kusina. All rights reserved.</p>
                <p>Bonifacio Street, Barangay Dist IV, Bayombong, Philippines | +639069645470</p>
            </div>
        </footer>
    )
}
