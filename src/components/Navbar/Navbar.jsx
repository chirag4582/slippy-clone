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
        <p>Home</p>
        <p>Product</p>
        <p>Pricing</p>
        <p>Blog</p>
      </div>
      <div className='right'>
        <p>Sign in</p>
        <button>
          <p>Get started</p>
          <p>{'>'}</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar