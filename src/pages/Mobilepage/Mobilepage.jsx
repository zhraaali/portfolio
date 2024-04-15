import React from 'react'
import img1 from './../../assets/images/mobile2.png'
import img2 from './../../assets/images/mobile3.png'
import Projectspage from '../../components/Projectspage/Projectspage'
const Mobilepage = () => {
  return (
    <div>
      <Projectspage img1={img1}
                      img2={img2}
                      desc='Project idea: An mobile website that includes available mobiles, their number, price, 
                      and also contains a description of the teaching staff.'
                      tools='The tools used: Html css javascript bootstrap'
                      link={'https://github.com/zhraaali/task-5-2.git'}
                      path={'https://github.com/zhraaali/task-5-2.git'}

        />
    </div>
  )
}

export default Mobilepage