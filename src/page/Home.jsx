import React from 'react'
import Header from '../components/header/Header'
import AbooutUs from '../components/aboutus/AbooutUs'
import MySelf from '../components/myself/MySelf'
import MySkils from '../components/myskils/MySkils'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='w-[100%] mx-auto'>
      <Header />
      <AbooutUs />
      <MySkils />
      <Projects />
      <Resume />
      <MySelf />
      <Footer />
    </div>
  )
}

export default Home
