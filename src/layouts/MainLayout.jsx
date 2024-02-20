import React, { children } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MainLayout(props) {
  return (
    <>
      <Header/>
      <div className='w-full min-h-screen'>
        {props.children}
        <Footer/>
      </div>

    </>
  )
}

export default MainLayout