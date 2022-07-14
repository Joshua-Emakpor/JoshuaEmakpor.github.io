import navbar from '../images/navbar.png'
import React from 'react'
import '../css/body.css'
import fb from '../images/images/facebook.jfif'
import gh from '../images/images/git.jfif'
import tw from '../images/images/teitter.jfif'
import li from '../images/images/li.jfif'
import em from '../images/images/email.jfif'
import ig from '../images/images/ig.jfif'

const Body = () => {
     return (

          
          <div className = 'h11'>
          <div className='head'>
               {/* <div className = 'about-me aa'>
                    <button className = 'btn-about'>About Me</button>
               </div>
               <div className = 'contact-me aa'>
                    <button className = 'btn-contact'>Contact Me</button>
               </div> */}
               <div className = 'navbar aa'>
                  <img src = {navbar} alt = '' />
                  <div className = 'all'>
                    <li>Background</li>
                    <li>skills and Knowledge</li>
                    <li>Education</li>
                    <li>
                     <button className = 'btn-contact'>Contact Me</button>
                    </li>
                    <li>
                      <button className = 'btn-about'>About Me</button> 
                    </li>
                  </div>
               </div>
               <hr></hr>
          </div>
          
          <div className = 'body'>
               <h1>Emakpor Joshua</h1>
              <a href = 'www.github.com/Emakpor-Joshua'><button className = 'btn-project'>View Projects</button></a> 
          </div>
          <div className = 'foot'>
               <div className = 'fb aa'>
                    <a href = 'www.facebook.com/Emakpor-Joshua'>
                         <img src = {fb} alt = ''/> <span>Facebook</span>
                    </a>
               </div>
               <div className = 'ig aa'>
               <a href = 'www.instagram.com/Emakpor-Joshua'>
                    <img src = {ig} alt = ''/> <span>Instagram</span>
                    </a>
               </div>
               <div className = 'gh aa'>
               <a href = 'www.github.com/Emakpor-Joshua'>
                    <img src = {gh} alt = ''/> <span>GitHub</span>
                    </a>
               </div>
               <div className = 'twitter aa'>
               <a href = 'www.twitter.com/Emakpor-Joshua'>
                    <img src = {tw} alt = ''/> <span>Twitter</span>
                    </a>
               </div>
               <div className = 'Li aa'>
               <a href = 'www.linkedin.com/Emakpor-Joshua'>
                    <img src = {li} alt = ''/> <span>LinkedIn</span>
                    </a>
               </div>
               <div className = 'em aa'>
               <a href = 'www.gmail.com.com/Emakpor-Joshua'>
                    <img src = {em} alt = ''/> <span>Email</span>
                    </a>
               </div>
          </div>
          </div>
     )
}

export default Body