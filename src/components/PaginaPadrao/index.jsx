import Banner from '@/components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao({children}) {
  return (
    <main>
        <Banner />
        <Outlet />
        {children}
    </main>
  )
}
