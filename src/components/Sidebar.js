import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar text-center'>
      <img
        src='https://i.imgur.com/bv0L1Qn.jpeg'
        alt='Avatar'
        className='img-responsive sidebar-icon'
        style={{ width: '100%', mixBlendMode: 'screen' }}
      />
      <a className='active' href='#home'>
        <FontAwesomeIcon icon={faHome} size='2x' style={{ marginBottom: '15px' }} className='sidebar-icon' />
        HOME
      </a>
      <a href='#about'>
        <FontAwesomeIcon icon={faUser} size='2x' style={{ marginBottom: '15px' }} className='sidebar-icon' />
        ABOUT
      </a>
      <a href='#portfolio'>
        <FontAwesomeIcon icon={faEye} size='2x' style={{ marginBottom: '15px' }} className='sidebar-icon' />
        PORTFOLIO
      </a>
      <a href='#contact'>
        <FontAwesomeIcon icon={faEnvelope} size='2x' style={{ marginBottom: '15px' }} className='sidebar-icon' />
        CONTACT
      </a>
    </div>
  );
};

export default Sidebar;
