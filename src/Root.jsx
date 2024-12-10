import React from 'react'
import Dashboard from './components/Admin/Dashboard'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <Outlet />
    </>
  )
}
