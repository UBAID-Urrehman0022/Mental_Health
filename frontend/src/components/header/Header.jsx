import React from 'react'
import './header.css';
import logo from '../../assets/logo.png';
import { useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleSubmit = () =>{
     navigate('/chatbot')
  }
  return (
    <div className='gbt__header ' id='home'>
      <div className='gbt__header-content'>
        <h1 className=' scale-up-center'>Protecting What Matters Most</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
scr it to make a type specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised </p>
        <div className='gbt__header-content__input'>
          <button type='submit' onClick={handleSubmit} >ChatBot</button>
        </div>
        
      </div>
      <div className='gbt__header-img scale-up-center'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
