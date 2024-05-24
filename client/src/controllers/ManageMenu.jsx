import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import axios from 'axios'

const ManageMenu = () => {
    const navigate = useNavigate()
    const [isSidebar, setSidebar] = useState(false)
    const [values, setValues] = useState([])
    const [details, setDetails] = useState({
        userId: '',
        productInformation: {
            productName: '',
            productDetails: '',
            productPhoto: '',
            productPrice: '',
            productImageUrl: ''
        }
    })
    const [open, setOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isImage, setImage] = useState('')

    useEffect(() => {
        fetchToken()
        fetchMenu()
    }, [])

    const fetchToken = () => {
        const token = localStorage.getItem('userId')
        if (!token) return navigate('/')
    }

    const fetchMenu = async () => {
        const { userId } = JSON.parse(localStorage.getItem('userId'))
        const res = await axios.get('http://localhost:3001/api/getallproducts')
        setDetails((prev) => ({
            ...prev,
            userId: userId
        }))

        const formattedData = res?.data?.data?.map((user) => ({
            id: user._id,
            userId: user?.userId,
            productPhoto: user?.productInformation?.productPhoto,
            productName: user?.productInformation?.productName,
            productDetails: user?.productInformation?.productDetails,
            productPrice: user?.productInformation?.productPrice
        }));
        setValues(formattedData)
    }

    const handleAddMenu = async () => {
        try {
            const formData = new FormData();
            formData.append('userId', details.userId);
            formData.append('productName', details.productInformation.productName);
            formData.append('productDetails', details.productInformation.productDetails);
            formData.append('productPrice', details.productInformation.productPrice);
            formData.append('productPhoto', details.productInformation.productPhoto);

            const res = await axios.post('http://localhost:3001/api/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res?.data?.success) {
                alert(res?.data?.message)
            } else {
                alert(res?.data?.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchMenu()
            handleClose()
        }
    }

    const handleEditMenu = async () => {
        try {
            const formData = new FormData();
            formData.append('userId', details.userId);
            formData.append('productName', details.productInformation.productName);
            formData.append('productDetails', details.productInformation.productDetails);
            formData.append('productPrice', details.productInformation.productPrice);
            formData.append('productPhoto', details.productInformation.productPhoto);

            const res = await axios.post(`http://localhost:3001/api/updateproduct/${details.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res?.data?.success) {
                alert(res?.data?.message)
            } else {
                alert(res?.data?.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchMenu()
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
        const { name, value, files } = e.target;
        if (name === 'productPhoto') {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);

            setDetails((prev) => ({
                ...prev,
                productInformation: {
                    ...prev.productInformation,
                    productPhoto: file,
                    productImageUrl: imageUrl
                }
            }));
        } else {
            setDetails((prev) => ({
                ...prev,
                productInformation: {
                    ...prev.productInformation,
                    [name]: value
                }
            }));
        }
    };

    const handleOpenAdd = () => {
        setIsEditing(false)
        setOpen(true)
    };

    const handleOpenEdit = (row) => {
        setIsEditing(true)
        setDetails({
            id: row.id,
            userId: row.userId,
            productInformation: {
                productName: row.productName,
                productDetails: row.productDetails,
                productPhoto: row.productPhoto,
                productPrice: row.productPrice,
                productImageUrl: row.productImageUrl
            }
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setDetails({
            userId: '',
            productInformation: {
                productName: '',
                productPrice: '',
                productImageUrl: '',
                productPhoto: '',
                productDetails: ''
            }
        })
    };

    const renderActionButtons = (params) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button onClick={() => handleOpenEdit(params.row)} variant="text">
                    <EditIcon />
                </Button>
                <Button onClick={() => handleOpenDelete(params.row)} variant="text">
                    <DeleteIcon />
                </Button>
            </div>
        );
    };

    const columns = [
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'userId', headerName: 'User Id', width: 150 },
        { field: 'productPhoto', headerName: 'Photo', width: 150 },
        { field: 'productName', headerName: 'Product Name', width: 250 },
        { field: 'productDetails', headerName: 'Product Details', width: 250 },
        { field: 'productPrice', headerName: 'Price', width: 100 },
        { field: 'actions', headerName: 'Actions', width: 200, headerAlign: 'center', renderCell: renderActionButtons }
    ];

    return (
        <>
            <div className="flex flex-col">
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className="overflow-auto absolute flex flex-col gap-[1rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[35rem] rounded-xl bg-white p-[2rem]">
                        <h1 className='font-[600] text-[2rem]'>{isEditing ? 'Edit Menu' : 'Add Menu'}</h1>
                        <div className="w-full py-[1rem] flex flex-col gap-[2rem]">
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Add Photo</h1>
                                <div className="w-full h-[10rem] flex justify-between items-center">
                                    <div className="overflow-hidden w-[10rem] h-full">
                                        {
                                            details?.productInformation?.productImageUrl ? (
                                                <img src={details?.productInformation?.productImageUrl} alt="" />
                                            ) : (
                                                <>
                                                    <div className="w-full h-full border border-black flex justify-center items-center">
                                                        <h1>No image</h1>
                                                    </div>

                                                </>
                                            )
                                        }
                                    </div>
                                    <input
                                        id='file-input'
                                        name='productPhoto'
                                        type="file"
                                        accept="image/*"
                                        onChange={handleOnChange}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="file-input" className="px-[1rem] py-[.2rem] rounded-md bg-[#111] text-white cursor-pointer duration-300 ease hover:scale-[.98] hover:opacity-[.4]">
                                        Choose File
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Product Name</h1>
                                <TextField
                                    name='productName'
                                    value={details?.productInformation?.productName}
                                    onChange={handleOnChange}
                                    type="text"
                                    placeholder='Enter the product name...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Product Details</h1>
                                <TextField
                                    name='productDetails'
                                    value={details?.productInformation?.productDetails}
                                    onChange={handleOnChange}
                                    type="text"
                                    placeholder='Enter the product details...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <div className="w-full flex flex-col justify-start gap-[.5rem]">
                                <h1 className='font-[600]'>Product Price</h1>
                                <TextField
                                    name='productPrice'
                                    value={details?.productInformation?.productPrice}
                                    onChange={handleOnChange}
                                    type="text"
                                    placeholder='Enter the product price...'
                                    className='w-full h-[3rem] px-[1rem]'
                                />
                            </div>
                            <Button
                                onClick={isEditing ? handleEditMenu : handleAddMenu}
                                variant="contained"
                                className='w-full h-[2.5rem]'
                                sx={{ backgroundColor: '#111111' }}
                            >
                                {isEditing ? 'EDIT MENU' : 'ADD MENU'}
                            </Button>
                        </div>
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
                                    MANAGE MENU
                                </h1>
                            </div>
                            <Button
                                onClick={handleOpenAdd}
                                variant="contained"
                                className='h-[100%]'
                                sx={{ backgroundColor: '#111111' }}
                            >
                                Add Menu
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

export default ManageMenu
