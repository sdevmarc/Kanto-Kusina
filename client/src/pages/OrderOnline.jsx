import React, { useState } from 'react'
import OrderNavBar from '../components/OrderNavBar'
import AddToCart from '../components/AddToCart'

export default function OrderOnline() {
    const [isModal, setModal] = useState(false)

    const handleAddToCart = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <>

            <div className="flex flex-col">
                <AddToCart isVisible={isModal} onClose={handleClose} />
                <OrderNavBar />
                <div className="w-full flex flex-col justify-start items-center px-[20rem] py-[7rem] bg-[#ffcb05] gap-[5rem]">
                    <div className="w-full flex flex-col justify-center items-start gap-[2rem]">
                        <div className="w-full flex justify-between items-center">
                            <h1
                                className='font-extrabold text-[3.5rem]'
                            >
                                ORDER SOMETHING
                            </h1>
                            <input
                                type="text"
                                placeholder='Search...'
                                className='outline-none w-[30rem] h-[3rem] px-[1rem] rounded-[1rem] text-black'
                            />
                        </div>
                        <div className="w-full flex flex-col gap-[1rem]">
                            <h1 className='text-[2.5rem] font-extrabold'>
                                ALL-DAY SILOG
                            </h1>
                            <div className="w-full flex justify-start items-start gap-[1rem] flex-wrap">
                                <div className="w-[24rem] bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-[1rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-black font-bold text-[1.5rem] text-ellipsis text-nowrap overflow-hidden'>
                                            LONGGADOG
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden w-full h-[10rem] bg-blue-500 rounded-[.7rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt=""
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full h-[2.7rem] px-[1rem] rounded-[.5rem] bg-black text-white duration-300 ease hover:opacity-[.7] hover:scale-[.98]'
                                    >
                                        ADD TO CART
                                    </button>
                                </div>

                                <div className="w-[24rem] bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-[1rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-black font-bold text-[1.5rem] text-ellipsis text-nowrap overflow-hidden'>
                                            LONGGADOG
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden w-full h-[10rem] bg-blue-500 rounded-[1rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt=""
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full h-[2.7rem] px-[1rem] rounded-[.5rem] bg-black text-white duration-300 ease hover:opacity-[.7] hover:scale-[.98]'
                                    >
                                        ADD TO CART
                                    </button>
                                </div>

                                <div className="w-[24rem] bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-[1rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-black font-bold text-[1.5rem] text-ellipsis text-nowrap overflow-hidden'>
                                            LONGGADOG
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden w-full h-[10rem] bg-blue-500 rounded-[1rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt=""
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full h-[2.7rem] px-[1rem] rounded-[.5rem] bg-black text-white duration-300 ease hover:opacity-[.7] hover:scale-[.98]'
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                                <div className="w-[24rem] bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-[1rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-black font-bold text-[1.5rem] text-ellipsis text-nowrap overflow-hidden'>
                                            LONGGADOG
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden w-full h-[10rem] bg-blue-500 rounded-[1rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt=""
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full h-[2.7rem] px-[1rem] rounded-[.5rem] bg-black text-white duration-300 ease hover:opacity-[.7] hover:scale-[.98]'
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                                <div className="w-[24rem] bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-[1rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-black font-bold text-[1.5rem] text-ellipsis text-nowrap overflow-hidden'>
                                            LONGGADOG
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden w-full h-[10rem] bg-blue-500 rounded-[1rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt=""
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full h-[2.7rem] px-[1rem] rounded-[.5rem] bg-black text-white duration-300 ease hover:opacity-[.7] hover:scale-[.98]'
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
