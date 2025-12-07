import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to='/' className="links"><li>Home</li></Link>
        <Link to='/projects' className="links"><li>Projects</li></Link>
        <Link to='/about' className="links"><li>About Me</li></Link>
      </div>
    </>
  )
}

export default Navbar