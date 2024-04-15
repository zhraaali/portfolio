import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skills.css'
import { faChess, faHomeLgAlt } from '@fortawesome/free-solid-svg-icons'
import htmlimg from './../../assets/images/Untitled.png'
import cssimg from './../../assets/images/images.png'
import jsimg from './../../assets/images/js.png'
import reactimg from './../../assets/images/react.png'
import bootstrapimg from './../../assets/images/bootstrap.jpg'
import tawilindimg from './../../assets/images/tawlinid.png'
const Skills = () => {
  return (
    <div className='skill' id='skillslink'>
        <h1>Skills</h1>
        <div className='skill-inner'>
        
            <div>
                <h3>HTML</h3>
            <img src={htmlimg}/>
            </div>
            <div>
                <h3>Css</h3>
            <img src={cssimg}/>
            </div>
            <div>
                <h3>Javascript</h3>
            <img src={jsimg}/>
            </div>
            <div>
                <h3>React</h3>
            <img src={reactimg}/>
            </div>
            <div>
                <h3>Bootstrap</h3>
            <img src={bootstrapimg}/>
            </div>
            <div>
                <h3>Tawilind</h3>
            <img src={tawilindimg}/>
            </div>
        
        </div>
    </div>
  )
}

export default Skills