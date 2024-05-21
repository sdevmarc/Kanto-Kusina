import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const Routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    {path:'/dashboard', element: <Dashboard />}
])


export default Routes