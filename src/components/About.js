import React from 'react';

const About = () => {
  return (
    <section className='container' id='about'>
      <h2>About Me</h2>
      <hr />
      <p>
        I'm Raozhaizhu, a passionate web developer skilled in front-end technologies like HTML, CSS, JavaScript, SASS,
        Bootstrap, and React. I'm dedicated to creating responsive, user-friendly websites that deliver seamless
        experiences. In addition to my technical expertise, I have a strong background in writing and content creation.
        I served as the editor-in-chief for a leading public account, and now, I'm the New Media Director at a media
        company. Through my career, I've honed my writing, planning, and strategic skills, along with rich experience in
        business communication and media collaboration. With a blend of technical know-how and creative leadership, I am
        always ready to take on new challenges and contribute to impactful projects.
      </p>
      <br />
      <h2>My Skills</h2>
      <hr />
      <h4>Content Creation & Writing</h4>
      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          aria-valuenow='95'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: '95%', backgroundColor: 'rgb(97, 97, 97)' }}
        >
          <span className='sr-only'>95% Complete</span>
        </div>
      </div>
      <h4>Business Communication & Media Collaboration</h4>
      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          aria-valuenow='85'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: '85%', backgroundColor: 'rgb(97, 97, 97)' }}
        >
          <span className='sr-only'>85% Complete</span>
        </div>
      </div>
      <h4>Front-End Technologies</h4>
      <div className='progress'>
        <div
          className='progress-bar'
          role='progressbar'
          aria-valuenow='70'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: '70%', backgroundColor: 'rgb(97, 97, 97)' }}
        >
          <span className='sr-only'>70% Complete</span>
        </div>
      </div>
    </section>
  );
};

export default About;
