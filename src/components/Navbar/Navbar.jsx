import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar' >
      <div className='left'>
        <img className='logo-image' src={'./assets/logo/logo-image.png'} alt='logo'/>
        <img src={'./assets/logo/logo-main.svg'} alt='logo' />
      </div>
      <div className='middle'>
        <p className='underline'>Home</p>
        <p className='underline'>Product</p>
        <p className='underline'>Pricing</p>
        <p className='underline'>Blog</p>
      </div>
      <div className='right'>
        <p>Sign in</p>
        <p>Get started <span>{">"}</span> </p>
      </div>
    </div>
  )
}

export default Navbar