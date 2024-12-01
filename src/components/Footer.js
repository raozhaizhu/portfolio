import React from 'react';
import { FaFacebook, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='container'>
      <FaFacebook className='fab fa-2x' />
      <FaInstagram className='fab fa-2x' />
      <FaSnapchat className='fab fa-2x' />
      <FaPinterestP className='fab fa-2x' />
      <FaTwitter className='fab fa-2x' />
      <FaLinkedin className='fab fa-2x' />
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
