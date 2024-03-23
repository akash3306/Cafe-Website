import React from 'react'
import './Menu.css'
import { menu } from "./Data";
function Menu() {
  return (
    <div>
         <section className="menu" id="menu">
        <h1 className="heading">
          OUR <span>MENU</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box">
              <img src={item.img} alt="" />
              <h3>tasty and healty</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Menu
