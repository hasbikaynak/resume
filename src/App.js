import React from 'react'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Skill from './components/Skill'
import About from './components/About'
import NavbarLeft from './components/NavbarLeft'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <NavbarLeft/>
      <About/>
      <Experience/>
      <Education/>
      <Skill/>
      <Interests/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App