import React from 'react'
import './About.css'
import about from '../Images/about-img.jpeg'
function About() {
  return (
    <div>
       <section className="about" id='about'>
        <h1 className="heading">
          <span>ABOUT</span> US
        </h1>

        <div className="row">
          <div className="image">
            <img src={about} alt="" />
          </div>

          <div className="content">
            <h3>what makes our Coffee special?</h3>
            <p>
            We use a unique grading system to ensure a consistent and high-quality roast.
            Our beans are aged for at least a year to reduce acidity and create a smoother taste.Our coffee is freshly roasted and shipped directly to our customers
            </p>
            <a  className="btn">
              learn more  -->
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
