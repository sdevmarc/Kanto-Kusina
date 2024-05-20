import React, { useEffect } from 'react'

export default function AddToCart({ isVisible, onClose }) {

    return (
        <>
            <div className={`fixed ${isVisible ? 'flex' : 'hidden'} top-0 left-0 w-full h-screen bg-black bg-opacity-[.3] justify-center items-center z-[3]`}>
                <div className="w-[35rem] h-[40rem] flex flex-col bg-white rounded-[1rem] p-[1rem] gap-[1rem]">
                    <div className="overflow-hidden w-full h-[70%] bg-black rounded-[1rem]">
                        <img
                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                            alt=""
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className="w-full h-[15%] flex justify-between items-center">
                        <h1 className='w-[50%] overflow-hidden text-ellipsis text-nowrap font-extrabold text-[2rem] text-left'>TITLE</h1>
                        <h1 className='w-[50%] overflow-hidden text-ellipsis text-nowrap font-extrabold text-[2rem] text-right'>PRICE</h1>
                    </div>
                    <div className="w-full h-[15%] flex justify-between items-center">
                        <button
                            onClick={onClose}
                            className='w-[40%] h-[70%] rounded-[1rem] flex justify-center items-center bg-black text-white font-extrabold text-[1rem] duration-300 ease hover:opacity-[.4] hover:scale-[.98]'
                        >
                            CANCEL
                        </button>
                        <button

                            className='w-[40%] h-[70%] rounded-[1rem] flex justify-center items-center bg-black text-white font-extrabold text-[1rem] duration-300 ease hover:opacity-[.4] hover:scale-[.98]'
                        >
                            ADD TO CART
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
