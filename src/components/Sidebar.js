import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar text-center'>
      <img
        src='/img/veryMe.jpg'
        alt='Avatar'
        className='img-responsive'
        style={{ width: '100%', mixBlendMode: 'screen' }}
      />
      <a className='active' href='#home'>
        <i className='fa fa-home fa-2x margin-bottom-15'></i>HOME
      </a>
      <a href='#about'>
        <i className='fa fa-eye fa-2x margin-bottom-15'></i>ABOUT
      </a>
      <a href='#portfolio'>
        <i className='fa fa-eye fa-2x margin-bottom-15'></i>PORTFOLIO
      </a>
      <a href='#contact'>
        <i className='fa fa-envelope fa-2x margin-bottom-15'></i>CONTACT
      </a>
    </div>
  );
};

export default Sidebar;
