import MenuIcon from '@mui/icons-material/Menu'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Logo from '../../public/KKLogo.jpg'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

export default function DashNavbar({ onSelectSidebar }) {
    const navigate = useNavigate()
    const [isSidebar, setSidebar] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const SidebarHandler = () => {
        setSidebar(prev => !prev)
        onSelectSidebar(isSidebar)
    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            <div className="w-full h-[7vh] bg-white border border-solid px-[1rem] flex justify-between items-center">
                <div className="h-full flex items-center gap-[1rem]">
                    <button
                        onClick={SidebarHandler}
                    >
                        <MenuIcon sx={{ color: '#111111' }} />
                    </button>
                    <div className="overflow-hidden w-[2rem] h-full">
                        <img
                            className='w-full h-full object-contain'
                            src={Logo}
                            alt="smu header"
                        />
                    </div>
                    <h1>Kanto Kusina</h1>
                </div>

                <div className='h-full flex items-center gap-[2rem]'>
                    <button>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                    </button>

                    <Button onClick={handleClick}>
                        <Avatar
                            {...stringAvatar('Kent Dodds')}
                        />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    )
}


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}