import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div><Link to='/'> Home</Link></div>
        <div><Link to='/about'> About</Link></div>
        <div><Link to='/users'> Users</Link></div>
    </>
    
  )
}

export default NavBar