import React from 'react';
import './possibilty.css';
import logo3 from '../../assets/logo3.png';

const Possibilty = () => {
  return (
    <div className='gbt__possibilty '>
      <div className="gbt__possibilty-img">
        <img src={logo3} alt='possibilty' />
      </div>
      <div className='gbt__possibilty-content'>
      <h1>Access to Mental Health Services</h1>
        <p>Another critical problem is the limited access to mental health services and resources. Many regions, especially in low-income areas or rural communities, face a shortage of mental health professionals, treatment facilities, and affordable options for care. Additionally, financial barriers, lack of insurance coverage, and long waiting lists can further impede individuals from receiving timely and appropriate mental health support. </p>
        <div className='gbt__header-content__input'>
          <button type='submit' >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Possibilty
 