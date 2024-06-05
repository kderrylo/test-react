import React from 'react'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-navbar'>
            Sarana Belajar
        </div>

        <ul className='menu-navbar'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/aboutus'>About Us</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar