import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        {/* AppLayout */}
      <Outlet /> {/* sare  routes ya ha pe render honge  : AppLayout will work as layout for every page  */}
      
    </div>
  )
}

export default AppLayout