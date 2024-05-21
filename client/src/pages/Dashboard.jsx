import { useState } from 'react'

import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'

export default function Dashboard() {
    const [isSidebar, setSidebar] = useState(false)

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
                    <div className={`${isSidebar ? 'w-[100%]' : 'w-[82.5%]'} h-[93vh] p-[1rem] flex flex-col`}>
                        <h1
                            className='font-[600]'
                        >
                            DASHBOARD
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
