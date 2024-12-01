import React from 'react';

const Contact = () => {
  return (
    <section className='container' id='contact'>
      <h2>Contact Me</h2>
      <hr />
      <p>
        <i className='fa fa-map-marker-alt far fa-fw fa-2x' style={{ color: 'white', marginRight: '10px' }}></i>{' '}
        Wenzhou, Zhejiang, China
      </p>
      <p>
        <i className='fa fa-phone fa-fw fa-2x' style={{ color: 'white', marginRight: '10px' }}></i> Phone: +86
        138-1234-5678
      </p>
      <p>
        <i className='fa fa-envelope fa-fw fa-2x' style={{ color: 'white', marginRight: '10px' }}></i> Email:
        raozhaizhu@gmail.com
      </p>

      <br />
      <p>Let's get in touch. Send me a message:</p>
      <form action='/action_page.php' target='_blank'>
        <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
        <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
        <input className='form-control' id='subject' name='subject' placeholder='Subject' type='text' required />
        <input className='form-control' id='message' name='message' placeholder='Message' type='text' required />
        <button className='btn btn-default' type='submit' style={{ display: 'block', width: '20%' }}>
          <i className='fa fa-paper-plane'></i> SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;

