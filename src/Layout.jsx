import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav'
import './index.css'


function Layout() {
  return (
    <>
      <SideNav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout