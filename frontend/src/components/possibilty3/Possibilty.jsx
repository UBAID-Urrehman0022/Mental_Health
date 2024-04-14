import React from 'react';
import './possibilty.css';
import logo4 from '../../assets/logo4.png';

const Possibilty = () => {
  return (
    <div className='gbt__possibilty '>
      
      <div className='gbt__possibilty-content'>
      <h1>Underfunding and Inadequate Attention</h1>
        <p> Mental health often receives inadequate funding and attention compared to other areas of healthcare. This disparity can lead to a lack of research, limited development of effective treatments, and insufficient public awareness campaigns. The underfunding and lack of prioritization of mental health contribute to a gap in understanding, support, and resources, hindering progress in addressing mental health issues on a broader scale.</p>
        <div className='gbt__header-content__input'>
          <button type='submit' >Get Started</button>
        </div>
      </div>
      <div className="gbt__possibilty-img">
        <img src={logo4} alt='possibilty' />
      </div>
    </div>
  )
}

export default Possibilty
 