import React from 'react';

const Portfolio = () => {
  return (
    <section className='container' id='portfolio'>
      <h2>My Portfolio</h2>
      <hr />
      <div className='row'>
        <div className='col-sm-6'>
          <div className='thumbnail'>
            <img src='https://i.imgur.com/xc8WZ4W.jpeg' alt='Project 1' />
            <p>
              <strong>Todolist Made with React</strong>
            </p>
            <p>This is a todolist app made with React. It allows users to add, remove, and mark tasks as completed.</p>
            <button className='btn btn-default' type='button'>
              View Project
            </button>
          </div>
          <div className='thumbnail'>
            <img src='https://i.imgur.com/nA1hvtM.jpeg' alt='Project 2' />
            <p>
              <strong>Shopping Cart</strong>
            </p>
            <p>
              This is a shopping cart app that allows users to add, remove, and adjust the quantity of items in their
              cart.
            </p>
            <button className='btn btn-default' type='button'>
              View Project
            </button>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='thumbnail'>
            <img src='https://i.imgur.com/JADWm6p.png' alt='Project 3' />
            <p>
              <strong>Weather App</strong>
            </p>
            <p>This is a weather app that displays the current weather and forecast for a specific location.</p>
            <button className='btn btn-default' type='button'>
              View Project
            </button>
          </div>
          <div className='thumbnail'>
            <img src='https://i.imgur.com/iN5cDYe.png' alt='Project 4' />
            <p>
              <strong>Blog App</strong>
            </p>
            <p>This is a blog app that allows users to create, edit, and delete blog posts.</p>
            <button className='btn btn-default' type='button'>
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
