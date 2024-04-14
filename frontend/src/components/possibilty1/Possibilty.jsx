import React from 'react';
import './possibilty.css';
import logo2 from '../../assets/logo2.png';

const Possibilty = () => {
  return (
    <div className='gbt__possibilty '>
      
      <div className='gbt__possibilty-content'>
      <h1>Stigma and Discrimination</h1>
        <p>One significant problem is the persistent stigma and discrimination surrounding mental health conditions. Society often holds negative attitudes and misconceptions about mental illnesses, leading to prejudice, judgment, and exclusion of individuals with such conditions. This stigma can prevent people from seeking help, speaking openly about their experiences, or receiving adequate support, exacerbating their mental health challenges. </p>
        <div className='gbt__header-content__input'>
          <button type='submit' >Get Started</button>
        </div>
      </div>
      <div className="gbt__possibilty-img">
        <img src={logo2} alt='possibilty' />
      </div>
    </div>
  )
}

export default Possibilty
 