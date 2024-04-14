import React from 'react';
import './navbar.css';
import vector from '../../assets/Vector.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
          
            <h1>Aphora</h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <li><a href='#home' >Home</a></li>
                <li><a href='#suggestion'>Suggestion</a></li>
                <li><a href='#consult'>Consultancey</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
