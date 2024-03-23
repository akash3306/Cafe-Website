import React, { useState} from 'react'
// import {Link} from "react-router-dom"
import Logo from './images/logo.png'
import { useNavigate } from 'react-router'
import './Navbar.css'
// import { Map } from '../Mapping/Map'
import style from  './style.module.css'

const Navbar = () => {

//   const data = [
//  {   
//    name:"Home",
//    link:"home"
// },
// {
//   name:"About Us",
//   link:"about"
// },
// {
//   name:"Menu",
//   link:"menu"
// },
// {
//   name:"Products",
//   link:"products"
// },
// {
//   name:"Review",
//   link:"review"
// },
// {
//   name:"Contact",
//   link:"contact"
// },
// {
//   name:"Blog",
//   link:"blog"
// },

//    ]
  const history = useNavigate()
  const [menu, SetMenu] = useState(false)
  
  const handleLogout = ()=> {
       history('/login')
   }

  return (
   <>
    <div className='Navwrapper'>
        <div className='logo' >
         
            <img src = {Logo} alt = ""/>
           
        </div>

       
       <div className={style.links} >
       <a href="#home">Home</a>
       <a href="#about">About Us</a>
       <a href="#menu">Menu</a>
       <a href="#product">Products</a>
       <a href="#review">Review</a>
       <a href="#contact">Contact</a>
       <a href="#blog">Blog</a>


        {/* <Map of={data} render={(item) =>
          <li >
            <Link  ref = {Scrolltoview} to={`${item.link}`} onClick={handleScoll}>{item.name}</Link>
           
          </li>

        } /> */}
       </div>


       <div className='profile'>
            <button className='logout' onClick={handleLogout}>
                Log Out
            </button>
       <div style={{color:"white", cursor: "pointer"}} onClick={()=>{SetMenu(prev=>!prev)}} className={style.menu_button}>
       ＝
       </div>
       <div style={{display: `${menu ? "flex": "none"}` }} className={style.menu_wrapper_button}>
         
         <div className={style.links_wrapper}>
         <a href="#home">Home</a>
       <a href="#about">About Us</a>
       <a href="#menu">Menu</a>
       <a href="#product">Products</a>
       <a href="#review">Review</a>
       <a href="#contact">Contact</a>
       <a href="#blog">Blog</a>
         </div>
       </div>
        </div>
    </div>   

   </>
  )
}
export default Navbar