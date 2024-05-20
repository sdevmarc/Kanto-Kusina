import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import OrderOnline from './pages/OrderOnline'

const Routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/menu', element: <Menu /> },
    { path: '/orderonline', element: <OrderOnline /> }
])


export default Routes