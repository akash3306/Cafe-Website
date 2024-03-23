import React from 'react'
import './Product.css'
import { product } from "../Our Menu/Data";
function Product() {
  return (
    <div>
       <section className="products" id="product">
        <h1 className="heading">
          OUR <span>PRODUCTS</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>Fresh Items</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product
