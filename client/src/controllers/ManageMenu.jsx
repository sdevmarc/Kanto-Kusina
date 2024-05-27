import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashNavbar from '../components/DashNavbar'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { Edit as EditIcon, Delete as DeleteIcon, ArrowBackIos as ArrowBackIosIcon } from '@mui/icons-material'
import { Modal, TextField, Button } from '@mui/material'
import axios from 'axios'

const ManageMenu = () => {
    const navigate = useNavigate()
    const [isSidebar, setSidebar] = useState(false)
    const [values, setValues] = useState([])
    const [details, setDetails] = useState({
        productId: '',
        userId: '',
        productInformation: {
            productName: '',
            productDetails: '',
            productPhoto: '',
            productPrice: '',
            productImageUrl: ''
        }
    })
    const [modalType, setModalType] = useState('')

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

    const handleAddSubmit = async (e) => {
        try {
            e.preventDefault()

            if (!details?.productInformation?.productPhoto) {
                const res = await axios.post('http://localhost:3001/api/addproductwithoutimage', details)
                if (res?.data?.success) {
                    alert(res?.data?.message)
                } else {
                    alert(res?.data?.message)
                }
            } else {
                const formData = new FormData();
                formData.append('userId', details.userId);
                formData.append('productName', details.productInformation.productName);
                formData.append('productDetails', details.productInformation.productDetails);
                formData.append('productPrice', details.productInformation.productPrice);
                formData.append('productPhoto', details.productInformation.productPhoto);

                const res = await axios.post('http://localhost:3001/api/addproductwithimage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if (res?.data?.success) {
                    alert(res?.data?.message)
                } else {
                    alert(res?.data?.message)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchMenu()
            handleModalClose()
        }
    }

    const handleEditSubmit = async (e) => {
        try {
            e.preventDefault()

            if (!details?.productInformation?.productPhoto) {
                const res = await axios.post('http://localhost:3001/api/updateproductwithoutimage', details)

                if (res?.data?.success) {
                    alert(res?.data?.message)
                } else {
                    alert(res?.data?.message)
                }
            } else {
                const formData = new FormData();
                formData.append('productId', details?.productId);
                formData.append('userId', details?.userId);
                formData.append('productName', details?.productInformation?.productName);
                formData.append('productDetails', details?.productInformation?.productDetails);
                formData.append('productPrice', details?.productInformation?.productPrice);
                formData.append('productPhoto', details?.productInformation?.productPhoto);

                const res = await axios.post('http://localhost:3001/api/updateproductwithimage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if (res?.data?.success) {
                    alert(res?.data?.message)
                } else {
                    alert(res?.data?.message)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchMenu()
            handleModalClose()
        }
    }

    const handleDeleteMenu = async (e) => {
        try {
            const res = await axios.post(`http://localhost:3001/api/deleteproduct`, { productId: e?.id })
            if (res?.data?.success) {
                alert(res?.data?.message)
            } else {
                alert(res?.data?.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            fetchMenu()
        }
    }

    const handleOnClickAddMenu = () => {
        setModalType('AddMenu')
        console.log(modalType)
    }

    const handleOnClickEditMenu = (e) => {
        setModalType('EditUser')
        if (!e?.productPhoto) {
            setDetails((prev) => ({
                ...prev,
                productId: e?.id,
                userId: e?.userId,
                productInformation: {
                    ...prev?.productInformation,
                    productName: e?.productName,
                    productDetails: e?.productDetails,
                    productPrice: e?.productPrice
                }
            }))
        } else {
            setDetails((prev) => ({
                ...prev,
                productId: e?.id,
                userId: e?.userId,
                productInformation: {
                    ...prev?.productInformation,
                    productName: e?.productName,
                    productDetails: e?.productDetails,
                    productPrice: e?.productPrice,
                    productImageUrl: `http://localhost:3001/uploads/${e?.productPhoto}`
                }
            }))
        }
    }

    const handleModalClose = () => {
        setDetails((prev) => ({
            ...prev,
            userId: '',
            productInformation: {
                ...prev?.productInformation,
                productName: '',
                productDetails: '',
                productPrice: '',
                productPhoto: '',
                productImageUrl: ''
            }
        }))
        setModalType('')
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

    const renderActionButtons = (params) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button onClick={() => handleOnClickEditMenu(params.row)} variant="text">
                    <EditIcon />
                </Button>
                <Button onClick={() => handleDeleteMenu(params.row)} variant="text">
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
                                onClick={handleOnClickAddMenu}
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
            <Modal
                open={modalType !== ''}
                onClose={handleModalClose}
            >
                <form
                    onSubmit={modalType === 'AddMenu' ? handleAddSubmit : handleEditSubmit}
                    className="overflow-auto absolute flex flex-col gap-[1rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[35rem] rounded-xl bg-white p-[2rem]">
                    <h1 className='font-[600] text-[2rem]'>{modalType === 'AddMenu' ? 'Add Menu' : 'Edit Menu'}</h1>
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
                                                <div className="w-[10rem] h-[10rem] border border-black flex justify-center items-center">
                                                    <h1 className='text-black font-[600]'>No Image</h1>
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
                            type='submit'
                            variant="contained"
                            className='w-full h-[2.5rem]'
                            sx={{ backgroundColor: '#111111' }}
                        >
                            {modalType === 'AddMenu' ? 'ADD MENU' : 'UPDATE MENU'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ManageMenu
