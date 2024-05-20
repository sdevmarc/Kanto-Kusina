import React from 'react'
import MenuNavBar from '../components/MenuNavBar'

export default function Menu() {
    return (
        <>
            <div className="flex flex-col">
                <MenuNavBar />
                <div className="w-full flex flex-col justify-start items-center px-[20rem] py-[7rem] bg-[#ffcb05] gap-[5rem]">
                    <h1 className='text-[#000] font-extrabold text-[3.5rem]'>
                        MENUS
                    </h1>
                    <div className="w-full flex flex-col gap-[2rem]">
                        <div className="w-full">
                            <h1 className='text-[2.5rem] font-extrabold'>
                                ALL-DAY SILOG
                            </h1>
                            <div className="w-full flex justify-start items-start flex-wrap gap-[3rem]">
                                <div className="w-[24rem] bg-black p-[1rem] flex flex-col gap-[.5rem]">
                                    <div className=" w-full flex justify-center items-center">
                                        <h1 className='text-white text-[2rem] text-ellipsis text-nowrap overflow-hidden'>
                                            TITLE
                                        </h1>
                                    </div>

                                    <div className="overflow-hidden w-full h-[20rem] rounded-[1rem]">
                                        <img
                                            src="https://source.unsplash.com/a-group-of-young-women-sitting-next-to-each-other-on-a-bench-EMRMuMNOOmE"
                                            alt="Food"
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                    <h1 className='font-bold text-white'>Description</h1>
                                    <div className='overflow-auto w-full h-[10rem] flex flex-col gap-[.5rem]'>

                                        <p
                                            className='text-white'
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum commodi odit harum amet deserunt enim voluptatem facere, quas corporis aliquam sapiente asperiores in nemo rerum perspiciatis possimus vitae accusamus velit.
                                            Nobis harum cupiditate eum tempora minima ducimus excepturi error accusantium quisquam non nemo voluptatibus, ipsam eaque iusto ab? Placeat, amet est. Excepturi sint ipsa repellendus consectetur quae quos fugit nobis?
                                            Repudiandae, animi dicta. Nisi aliquid voluptates repellendus ea distinctio corporis aliquam dignissimos provident, numquam quod recusandae animi quis magni, voluptas facilis deleniti hic odio vel! Natus tempora ipsum ad debitis!
                                        </p>
                                    </div>
                                    <div
                                        className='w-full h-[5rem] flex justify-between items-center'
                                    >
                                        <h1 className='text-white text-[2rem] font-bold'>
                                            Price
                                        </h1>
                                        <h1
                                            className='text-white text-[2rem] font-bold'
                                        >
                                            ₱ 100.00
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
