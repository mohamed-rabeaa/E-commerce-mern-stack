import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../component/client/Container'
import Navbar from '../../component/client/Navbar'
import Footer from '../../component/wideget/Footer'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout