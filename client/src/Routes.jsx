import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Menu from './pages/Menu'
import ManageUsers from './controllers/ManageUsers'
import ManageMenu from './controllers/ManageMenu'
import ViewMenu from './pages/ViewMenu'

const Routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/users', element: <Users /> },
    { path: '/viewmenu', element: <ViewMenu /> },
    { path: '/menu', element: <Menu /> },
    { path: '/users/manageusers', element: <ManageUsers /> },
    { path: '/menu/managemenu', element: <ManageMenu /> }
])


export default Routes