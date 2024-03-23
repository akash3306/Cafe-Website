import React from 'react'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About US/About'
import Menu from './Our Menu/Menu'
import Product from './Product/Product'
import Review from './Review/Review'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'
import Lenis from '@studio-freight/lenis'

function Dashboard() {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
    <Layout>
     
       <Home />
      <About />
      <Menu/>
      <Product />
      <Review />
      <Contact />
      <Blog /> 
    </Layout>
  )
}

export default Dashboard
