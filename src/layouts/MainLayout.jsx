import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
    <>
      <Header/>
      <div className='flex flex-col w-full min-h-screen'>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default MainLayout