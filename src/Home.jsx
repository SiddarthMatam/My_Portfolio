import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <div className='home-container'>
        <h1 className="main-head">Hi, I’m Siddartha 👋 </h1>
        <p className="main-desc">A React Developer building clean and simple web experiences.<br/>Explore my work, learn more about me, and see the projects I’ve built using
          React, JavaScript, and modern UI concepts.</p>
        <h3 className="sub-head">Choose a section to get started:</h3>
        <p> View all the apps and websites I have created </p> 
        <Link to="/projects">
          <button className="home-buttons">Projects </button>
        </Link>
        <p> Know my background, skills, and journey  </p>
        <Link to="/about">
          <button className="home-buttons">About Me</button>
        </Link>
      </div>
    </>
  )
}

export default Home