import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card';
import quizimg from './../../assets/images/quiz.png'
import mobileimg from './../../assets/images/mobile.png'
import educationimg from './../../assets/images/education.png'
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='project' id='projectlink'>
        <div className='project-desc'> 
        <h2>MY PORTFOLIO</h2>
        <p>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
        </div>
        <div className='project-inner'>
        <Link to='/educationpage'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={educationimg}/>
  <Card.Body>
    <Card.Title>Education</Card.Title>
    {/* <Card.Text>
      Some quick example text 

    </Card.Text> */}
    
  </Card.Body>
</Card>
        </Link>
        <Link to='/mobilepage'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mobileimg}/>
  <Card.Body>
    <Card.Title>Mobile</Card.Title>
    {/* <Card.Text>
      Some quick example text 

    </Card.Text> */}
    
  </Card.Body>
</Card>
        </Link>
        <Link to='/quizpage'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={quizimg}/>
  <Card.Body>
    <Card.Title>Quiz</Card.Title>
    {/* <Card.Text>
      Some quick example text 

    </Card.Text> */}
    
  </Card.Body>
 </Card>
        </Link>
        </div>
    </div>
  )
}

export default Projects