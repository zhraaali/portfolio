import React from 'react'
import './Achievment.css'
import img1 from './../../assets/images/photo.png'
import img2 from './../../assets/images/photo_2024-04-01_13-24-49.jpg'
const Achievment = () => {
  return (
    <div className='achievment-container'>
        <h1>My Achievements & Certificates</h1>
        <div className='achievment'>
        <img src={img1} />
        <img src={img2} />
    </div>
    </div>
  )
}

export default Achievment