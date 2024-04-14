import React from 'react';
import './intract.css';
import { useNavigate } from 'react-router-dom';

const Intract = () => {
    const navigate = useNavigate()
  const handleSubmit = () =>{
     navigate('/form')
  }
  return (
    <div className='interact'>
        <div className='interact-input'>
            <p>Are you deeling with depression </p>
            <button type='button' onClick={handleSubmit}>+</button>
        </div>
        <div className='interact-input'>
            <p>Are you deeling with anxiety </p>
            <button type='button' onClick={handleSubmit}>+</button>
        </div>
        <div className='interact-input'>
            <p>Are you deeling with pressure </p>
            <button type='button' onClick={handleSubmit}>+</button>
        </div>
        <div className='interact-input'>
            <p>Are you deeling with mental issue </p>
            <button type='button'onClick={handleSubmit}>+</button>
        </div>
      
    </div>
  )
}

export default Intract
