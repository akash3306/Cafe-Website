import React from 'react'
import './Home.css'

function Home() {
  return (
  <div>
        <section className="home" id='home' >
        <div className="content">
          <h3>
            fresh <span>Coffee in the </span>morning
          </h3>
          <p>
          Choose your preferred coffee type: espresso, latte, cappuccino, or a flat white.
          Add any additional toppings or flavors you prefer, such as caramel, whipped cream, or chocolate chips.
          </p>
          <a className="btn">
            Get Yours Now
          </a>
        </div>
      </section>
  
  </div>
  )
}

export default Home
