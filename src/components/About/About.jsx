import React from 'react'
import './About.css'
const About = (props) => {
  return (
    <div className='about'>
        {/* <h1>{props.title}</h1>
        <p>{props.desc}</p> */}

        <div className='contact'>
          <img src={props.src}/>
          <div className='contact-contain'>
            <h2>{props.contact}</h2>
            <p>{props.name}</p>
            <p>{props.number}</p>
            <p>{props.email}</p>
            <p>{props.address}</p>
            <h1>{props.title}</h1>
        <p>{props.desc}</p>
          </div>
        </div>
    </div>
    
  )
}

export default About