import React from 'react'
import '../css/header.css'
import navbar from '../images/navbar.png'

const Header = () => {
     return (
          <div className = 'h11'>
          <div className='head'>
               <div className = 'about-me aa'>
                    <button>About Me</button>
               </div>
               <div className = 'contact-me aa'>
                    <button>Contact Me</button>
               </div>
               <div className = 'navbar aa'>
                  <img src = {navbar} alt = '' />
                  <div className = 'all'>
                    <li>Background</li>
                    <li>skills and Knowledge</li>
                    <li>Education</li>
                  </div>
               </div>
               <hr></hr>
          </div>
          </div>
     )
}

export default Header