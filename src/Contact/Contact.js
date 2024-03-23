import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>CONTACT</span>US
        </h1>
        <div class="row">
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h5>Get in Touch</h5>
            <div class="inputBox">
             
              <input type="text" placeholder="Name" />
            </div>
            <div class="inputBox">
              
              <input type="mail" placeholder="Email" />
            </div>
            <div class="inputBox">
             
              <input type="number" placeholder="Phone number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
