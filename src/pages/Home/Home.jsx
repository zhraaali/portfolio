import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Achievment from '../../components/Achievment/Achievment'
import Footer from '../../components/Footer/Footer'
import contactimg from './../../assets/images/6109659.webp'
const Home = () => {
  return (
    <>
        <Navbar/>
      <Hero/>
      <About title='About Me'
             desc='My name is Zahraa Mohamed Ali. I am studying Computer Engineering with a specialization in Software Engineering. Currently, 
             I am working as an intern at Focal X Agency as a Frontend Developer and also interning at Vica Web Solution as a Frontend Developer.'
             src={contactimg}
      />
      <Skills/>
      <Projects/>
      <Achievment/>
      <About contact='Contact Me' 
      name='Zhraa mohammed ali'
             number='number: +963937340947'
             email='email: zhraa002.z.ali.2002@gmail.com'
             address='Location: Lattakia/jableh'
             src={contactimg}
      />
      <Footer/>
    </>
  )
}

export default Home