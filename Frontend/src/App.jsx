import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <LandingPage/>
      },
    ],
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App