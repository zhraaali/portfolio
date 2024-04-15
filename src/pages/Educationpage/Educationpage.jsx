import React from 'react'
import Projectspage from '../../components/Projectspage/Projectspage'
import img1 from './../../assets/images/education.png'
import img2 from './../../assets/images/education2.png'
import { Link } from 'react-router-dom'
const Educationpage = () => {
  return (
    <div id='education'>
        <Projectspage img1={img1}
                      img2={img2}
                      desc='Project idea: An educational project that includes available lessons, their number, price, 
                      and also contains a description of the teaching staff.'
                      tools='The tools used: Html css javascript bootstrap'
                      link={'https://github.com/zhraaali/task_4-2.git ' }
                      path={'https://github.com/zhraaali/task_4-2.git ' }

        />
    </div>
  )
}

export default Educationpage