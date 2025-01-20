import React from 'react'
import { createBrowserRouter, RouterProvider ,Navigate, Outlet,useNavigate} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import SignIn from './components/auth/sign-in'
import SignUp from './components/auth/sign-up'
import { Toaster } from "sonner";
import Dashboard from './pages/dashboard/Dashboard'
import { Profile } from './pages/profile/Profile'

// Route Guards
const ProtectedRoute = () => {
  const user = localStorage.getItem('user');
  if (!user) return <Navigate to="/sign-in" />;
  return <Outlet />;
};

const PublicRoute = () => {
  const user = localStorage.getItem('user');
  if (user) return <Navigate to="/dashboard" />;
  return <Outlet />;
};



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />  // Always accessible
      },
      {
        element: <PublicRoute />,  // Only for non-logged in users
        children: [
          {
            path: '/sign-in',
            element: <SignIn />
          },
          {
            path: '/sign-up',
            element: <SignUp />
          }
        ]
      },
      {
        element: <ProtectedRoute />,  // Only for logged in users
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/profile',
            element: <Profile />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors closeButton position="top-center" />
    </>
  )
}

export default App