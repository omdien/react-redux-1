import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <div className='flex w-screen'>
            <Sidebar />
            {children}
        </div>
    </React.Fragment>
  )
}

export default Layout