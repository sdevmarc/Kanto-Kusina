import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import PeopleIcon from '@mui/icons-material/People'
import './css/Sidebar.css'

export default function Sidebar({ isSidebar }) {

    return (
        <>
            <div className={`sidebar ${!isSidebar && 'notactive'} h-[93vh] border border-solid bg-white px-[.5rem] py-[1rem] flex flex-col justify-start items-start gap-[1rem] dashsidebar`}>
                <div className="w-full h-full flex flex-col justify-between items-start">
                    <div className="w-full flex flex-col gap-[.5rem]">
                        {
                            Navs.map((item) => (
                                <NavLink
                                    to={item.navigate}
                                    key={item.id}
                                    className='w-full px-[1rem] py-[.5rem] rounded-lg text-[#111111] flex items-center gap-3 font-[600] text-[15px] hover:bg-[#dcdcde] duration-300 ease-in-out'
                                >
                                    {item.icon}{!isSidebar && item.name}
                                </NavLink>
                            ))
                        }
                    </div>

                    {/* <div className="w-full flex flex-col justify-start items-start gap-[.5rem]">
                        {
                            bottomNavs.map((item) => (
                                <NavLink
                                    to={item.navigate}
                                    key={item.id}
                                    className='w-full px-[1rem] py-[.5rem] rounded-lg text-[#111111] flex items-center gap-3 font-[600] text-[15px] hover:bg-[#dcdcde] duration-300 ease-in-out'
                                >
                                    {item.icon}{!isSidebar && item.name}
                                </NavLink>
                            ))
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

const Navs = [
    { id: 1, navigate: '/dashboard', name: 'Dashboard', icon: <DashboardIcon /> },
    { id: 2, navigate: '/users', name: 'Users', icon: <PeopleIcon /> },
    { id: 4, navigate: '/menu', name: 'Menu', icon: <SchoolIcon /> }
]

const bottomNavs = [
    { id: 1, navigate: '/', name: 'Settings', icon: <SettingsIcon /> },
    { id: 2, navigate: '/', name: 'Logout', icon: <LogoutIcon /> }
]
