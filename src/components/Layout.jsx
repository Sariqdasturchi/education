import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-62 ">
        <Outlet />
      </div>
    </div>
  )
}
