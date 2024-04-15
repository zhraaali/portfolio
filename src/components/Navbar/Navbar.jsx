import { Link } from 'react-router-dom';
import './Navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  return (
   <div className="navbar">
    <nav className='zh-nav'>
      <input type='checkbox' id='check'/>
      <label for='check' className='checkbtn'>
        <FontAwesomeIcon icon={faBars}/>

      </label>
      <label className='logo'>Port<span>folio</span></label>
      <ul className='zh-nav-elements'>
      <li><a href='#projectlink'>My Projects</a></li>
      <li><a href='#skillslink'>My Skills</a></li>
      <li><a href='' >Home</a></li>
      </ul>
    </nav>
    </div>
    
  )
}

export default Navbar

