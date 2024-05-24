import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import axios from 'axios'



export default function ManageUsers() {
    const navigate = useNavigate()
    const [isSidebar, setSidebar] = useState(false)
    const [values, setValues] = useState([])
    const [details, setDetails] = useState({
        userId: '',
        username: '',
        password: '',
        personalDetails: {
            lastname: '',
            firstname: '',
            middlename: ''
        }
    })
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    useEffect(() => {
        fetchToken()
        fetchUsers()
    }, [])

    
    const fetchToken = () => {
        const token = localStorage.getItem('userId')
        if (!token) return navigate('/')
    }

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:3001/api/getalluser')
        const formattedData = res?.data?.data?.map((user) => ({
            id: user._id,
            username: user.username,
            lastname: user?.personalDetails?.lastname,
            firstname: user?.personalDetails?.firstname,
            middlename: user?.personalDetails?.middlename,
        }));
        setValues(formattedData)
    }

    const handleSubmitEdit = async () => {
        try {
            console.log(details?.userId)
            const res = await axios.post('http://localhost:3001/api/updateuser', { id: details?.userId, personalDetails: details?.personalDetails })
            if (res?.data?.success) {
                alert(res?.data?.message)
            } else {
                res?.data?.message
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchUsers()
            setOpenEditModal(false)
        }
    }

    const handleEditModal = (value) => {
        setDetails((prev) => ({
            ...prev,
            userId: value?.id,
            personalDetails: {
                ...prev?.personalDetails,
                lastname: value?.lastname,
                firstname: value?.firstname,
                middlename: value?.middlename,
            }
        }))
        setOpenEditModal(true)
    }

    const handleSubmitAddUser = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/adduser', { username: details?.username, password: details?.password, personalDetails: details?.personalDetails })

            if (res?.data?.success) {
                return alert(res?.data?.message)
            } else {
                return alert(res?.data?.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchUsers()
            handleClose()
        }
    }

    const toggleSidebar = (value) => {
        if (value) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnChangePersonal = (e) => {
        const { name, value } = e.target
        setDetails((prev) => ({
            ...prev,
            personalDetails: {
                ...prev?.personalDetails,
                [name]: value
            }
        }))
    }

    const handleOpen = () => {
        setOpenAddModal(true)
    };
    const handleClose = () => {
        setOpenAddModal(false)
        setOpenEditModal(false)
        setDetails({
            username: '',
            password: '',
            personalDetails: {
                lastname: '',
                firstname: '',
                middlename: ''
            }
        });
    };

    const renderActionButtons = (params) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button onClick={(item) => handleEditModal(params?.row)} variant="text">
                    <EditIcon />
                </Button>
                <Button onClick={(item) => handleEditModal(params.row)} variant="text">
                    <DeleteIcon />
                </Button>
            </div>
        );
    };

    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'username', headerName: 'User Name', width: 250 },
        { field: 'lastname', headerName: 'Last Name', width: 250 },
        { field: 'firstname', headerName: 'First Name', width: 250 },
        { field: 'middlename', headerName: 'Middle Name', width: 250 },
        { field: 'actions', headerName: 'Actions', width: 200, headerAlign: 'center', renderCell: renderActionButtons }
    ];

    return (
        <>
            <div className="flex flex-col">
                <Modal
                    open={openEditModal}
                    onClose={handleClose}
                >
                    <div className="absolute flex flex-col gap-[1rem] justify-between top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[35rem] rounded-xl bg-white p-[2rem]">
                        <h1 className='font-[600] text-[2rem]'>Edit User</h1>
                        <div className="w-full h-full flex flex-col gap-[2rem]">
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Lastname</h1>
                                <TextField
                                    name='lastname'
                                    value={details?.lastname}
                                    onChange={handleOnChangePersonal}
                                    type="text"
                                    placeholder='Enter the lastname...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Firstname</h1>
                                <TextField
                                    name='firstname'
                                    value={details?.firstname}
                                    onChange={handleOnChangePersonal}
                                    type="text"
                                    placeholder='Enter the firstname...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Middlename</h1>
                                <TextField
                                    name='middlename'
                                    value={details?.middlename}
                                    onChange={handleOnChangePersonal}
                                    type="text"
                                    placeholder='Enter the middlename...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                        </div>
                        <Button
                            onClick={handleSubmitEdit}
                            variant="contained"
                            className='w-full h-[3rem]'
                            sx={{ backgroundColor: '#111111' }}
                        >
                            SUBMIT
                        </Button>
                    </div>
                </Modal>
                <Modal
                    open={openAddModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="absolute flex flex-col gap-[1rem] justify-between top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[35rem] rounded-xl bg-white p-[2rem]">
                        <h1 className='font-[600] text-[2rem]'>Add User</h1>
                        <div className="w-full h-full flex flex-col gap-[2rem]">
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Username</h1>
                                <TextField
                                    name='username'
                                    value={details?.username}
                                    onChange={handleOnChange}
                                    type="text"
                                    placeholder='Enter the username...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Password</h1>
                                <TextField
                                    name='password'
                                    value={details?.password}
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder='Enter the password...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                        </div>
                        <Button
                            onClick={handleSubmitAddUser}
                            variant="contained"
                            className='w-full h-[3rem]'
                            sx={{ backgroundColor: '#111111' }}
                        >
                            SUBMIT
                        </Button>
                    </div>
                </Modal>
                <DashNavbar onSelectSidebar={(item) => toggleSidebar(item)} />
                <div className="flex">
                    <Sidebar isSidebar={isSidebar} />
                    <div className={`${isSidebar ? 'w-[100%]' : 'w-[82.5%]'} h-[93vh] p-[1rem] flex flex-col gap-2`}>
                        <div className="w-full h-[5%] flex justify-between items-center gap-1">
                            <div className="h-full flex justify-start items-center">
                                <button
                                    onClick={handleBack}
                                    className='bg-white px-[1rem] py-[.5rem] rounded-lg flex items-center'
                                >
                                    <ArrowBackIosIcon /> Back
                                </button>
                                <h1
                                    className='font-[600]'
                                >
                                    MANAGE USERS
                                </h1>
                            </div>
                            <Button
                                onClick={handleOpen}
                                variant="contained"
                                className='h-[100%]'
                                sx={{ backgroundColor: '#111111' }}
                            >
                                Add User
                            </Button>

                        </div>

                        <div className="w-full h-[95%]">
                            <DataGrid
                                rows={values}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

