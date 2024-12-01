import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

// 导入其他组件

const App = () => {
  return (
    <>
      <Sidebar />
      <div className='content main'>
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
