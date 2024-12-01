import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='container' id='contact'>
      <h2>Contact Me</h2>
      <hr />
      <p>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size='2x'
          style={{ color: 'white', marginRight: '10px', width: '30px', height: '30px' }}
        />{' '}
        Wenzhou, Zhejiang, China
      </p>
      <p>
        <FontAwesomeIcon
          icon={faPhone}
          size='2x'
          style={{ color: 'white', marginRight: '10px', width: '30px', height: '30px' }}
        />{' '}
        Phone: +86 138-1234-5678
      </p>
      <p>
        <FontAwesomeIcon
          icon={faEnvelope}
          size='2x'
          style={{ color: 'white', marginRight: '10px', width: '30px', height: '30px' }}
        />{' '}
        Email: raozhaizhu@gmail.com
      </p>

      <br />
      <p>Let's get in touch. Send me a message:</p>
      <form action='/action_page.php' target='_blank'>
        <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
        <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
        <input className='form-control' id='subject' name='subject' placeholder='Subject' type='text' required />
        <input className='form-control' id='message' name='message' placeholder='Message' type='text' required />
        <button
          className='btn btn-default'
          type='submit'
          style={{
            width: '20%',
            minWidth: '240px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} size='2x' style={{ color: 'black', marginRight: '10px' }} />
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;

































