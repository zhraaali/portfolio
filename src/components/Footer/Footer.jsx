import React from 'react'
import './Footer.css'
import instaicon from './../../assets/images/Instagram_icon.png'
import facebookicon from './../../assets/images/facebook.png'
import linkedinicon from './../../assets/images/linkedin.png'
const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer'>
        <div className='footerone'>
        <h1>My Social Media Accounts</h1>
            <div className='footer-icons'>
                <img src={instaicon}/>
                <img src={facebookicon}/>
                <img src={linkedinicon}/>
            </div>
            </div>
            </div>
    
    </div>
  )
}

export default Footer