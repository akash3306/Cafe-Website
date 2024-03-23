import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Layout({children}) {
  return (
    <div className='main-layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
