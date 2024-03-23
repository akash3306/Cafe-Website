import React from 'react'
import './Review.css'
import { review } from "../Our Menu/Data";
import qouteImg from "../Images/quote-img.png";
function Review() {
  return (
    <div>
       <section className="review" id="review">
        <h1 className="heading">
          CUSTOMER'S <span>REVIEW</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Review
