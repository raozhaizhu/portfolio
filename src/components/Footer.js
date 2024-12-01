import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faPinterestP,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='container'>
      <FontAwesomeIcon icon={faFacebook} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faInstagram} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faSnapchat} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faPinterestP} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faLinkedin} size='2x' className='social-icon' style={{ marginRight: '10px' }} />
      <p>
        Powered by
        <a
          href='https://github.com/raozhaizhu/portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className='hover-text-green'
        >
          Raozhaizhu
        </a>
      </p>
    </footer>
  );
};

export default Footer;
