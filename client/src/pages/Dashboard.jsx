import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
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
                    <Sidebar />
                    <div className={`w-[82.5%] h-[93vh] p-[1rem] flex flex-col gap-2`}>
                        <div className="w-full h-[5%] flex justify-start items-center">
                            <h1
                                className='font-[600]'
                            >
                                Users
                            </h1>
                        </div>

                        <div className="w-full h-[95%] flex justify-center items-center">
                            <h1 className='font-[600]'>
                                WELCOME TO DASHBOARD
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
