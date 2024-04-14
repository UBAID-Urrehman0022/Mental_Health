import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './homepage.css';
import Header from '../../components/header/Header';
import Possibilty from '../../components/possibilty/Possibilty';
import Possibilty1 from '../../components/possibilty1/Possibilty';
import Possibilty2 from '../../components/possibilty2/Possibilty';
import Possibilty3 from '../../components/possibilty3/Possibilty';
import Intract from '../../components/intract/Intract';

const Homepage = () => {
  return (
    <div className='HOME'>
      <Navbar />
      <Header />
      <div className='h1'>
        <h1>Introduction</h1>
      <Possibilty />
      </div>
      <div className='h2'>
        <h1>Diseases Caused
        By anxiety & Depression</h1>
      <Possibilty1 />
      <Possibilty2 />
      <Possibilty3 />
      </div>
      <div className='h3'>
        <h1>Protect from anxiety & Depression</h1>
        <Intract />
      </div>
    </div>
  )
}

export default Homepage
