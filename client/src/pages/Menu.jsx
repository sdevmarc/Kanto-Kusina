import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'

export default function Menu() {
    const navigate = useNavigate()
    const [isSidebar, setSidebar] = useState(false)

    useEffect(() => {
        fetchToken()
    }, [])

    const fetchToken = () => {
        const token = localStorage.getItem('userId')
        if (!token) return navigate('/')
    }

    const toggleSidebar = (value) => {
        if (value) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <DashNavbar onSelectSidebar={(item) => toggleSidebar(item)} />
                <div className="flex">
                    <Sidebar isSidebar={isSidebar} />
                    <div className={`${isSidebar ? 'w-[100%]' : 'w-[82.5%]'} h-[93vh] p-[1rem] flex flex-col gap-2`}>
                        <div className="w-full h-[5%] flex justify-start items-center">
                            <h1
                                className='font-[600]'
                            >
                                Menu
                            </h1>
                        </div>

                        <div className="w-full h-[95%] flex justify-start items-start gap-5">
                            <Link
                                to='/menu/managemenu'
                                className="w-[20rem] h-[9rem] border border-solid rounded-lg flex flex-col justify-end items-end p-[1rem]">
                                <h1
                                    className='font-[600]'
                                >
                                    Manage Menu
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
