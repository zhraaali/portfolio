import React from 'react'
import img1 from './../../assets/images/quiz.png'
import img2 from './../../assets/images/quiz1.png'
import Projectspage from '../../components/Projectspage/Projectspage'
const Quizpage = () => {
  return (
    <div>
      <Projectspage img1={img1}
                      img2={img2}
                      desc='Project idea: An quizzes website that includes available quizzes
                      and also contains a description of quizzes contain.'
                      tools='The tools used: Html css javascript bootstrap react'
                      link={'https://github.com/zhraaali/quizzes.git'}
                      path={'https://github.com/zhraaali/quizzes.git'}

        />
    </div>
  )
}

export default Quizpage