import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievment from './components/Achievment/Achievment';
import contactimg from './assets/images/6109659.webp'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Educationpage from './pages/Educationpage/Educationpage';
import Home from './pages/Home/Home';
import Mobilepage from './pages/Mobilepage/Mobilepage';
import Quizpage from './pages/Quizpage/Quizpage';

import { useEffect, useState } from 'react';
function App() {
  const [theme,setTheme]= useState("light");

  const changeTheme =() =>{
    if(theme === 'light'){
    setTheme('dark')}
    else{
      setTheme('light')
    }
  }
  return (
    <div className={`app ${theme}`}>
      <button onClick={changeTheme}>mode</button>
      <Routes>
      <Route path='/portfolio' element={<Home/>}/>
        <Route path='/educationpage' element={<Educationpage/>}/>
        <Route path='mobilepage' element={<Mobilepage/>}/>
        <Route path='quizpage' element={<Quizpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
