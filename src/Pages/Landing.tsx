import React from 'react'
import Header from '../Template/Header'
import MainSection from '../components/Landing/MainSection'
import Powering from '../components/Landing/Powering'
import Explore from '../components/Landing/Explore'
import Introduction from '../components/Landing/Introduction'
import Blog from '../components/Landing/Blog'
import Footer from '../Template/Footer'

function Landing() {
  return (
    <div data-testid='landing-page'>
    <Header/>
    <MainSection/>
    <Powering/>
    <Explore/>
    <Introduction/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default Landing