import React from 'react'
import './Blog.css'
import { blog } from "../Our Menu/Data";
function Blog() {
  return (
    <div>
            <section class="blogs" id="blog">
        <h1 class="heading">
          OUR <span>BLOGS</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a class="title">
                  TASTY AND REFRESHING SPICES
                </a>
                <span>By Admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a  class="btnnn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
