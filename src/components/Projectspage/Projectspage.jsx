import React from 'react'
import './Projectspage.css'
import img from './../../assets/images/6109659.webp'
import { Link } from 'react-router-dom'
const Projectspage = (props) => {
  return (
    <div className='projectspage'>
        <div className='project-images'>
            <img src={props.img1}/>
            <img src={props.img2}/>
        </div>
        <div className='project-descraption'>
            <img src={img}/>
            <div>
            <p>{props.desc}</p>
            <p>{props.tools}</p>
            <Link to={props.path}><p>{props.link}</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Projectspage