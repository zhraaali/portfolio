import './Hero.css'
import heroimg from './../../assets/images/zhraa9_n.png'
const Hero = () => {
  return (
    <div className="zh-hero">
        <div className='zh-hero-top'>
        <div className="zh-hero-content">
          <div className='zh-quiz-time'>
            <h3>Welcome</h3>
          </div>
          <h1>I am Zhraa Mohammad Ali</h1>
          <h5>Frontend Developer</h5>
        </div>

        <div className='zh-hero-img'>
        <img
            src={heroimg}
        />
        </div>
        </div>
        
      </div>
  )
}

export default Hero