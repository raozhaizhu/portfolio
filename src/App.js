import React from 'react';
import { useEffect } from 'react';
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
      <div className='content'>
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

/*
App.js 负责渲染整个应用的主要组件，包括侧边栏、内容区域、页脚等。*
import SidebarNavigation from './utils/SidebarNavigation';
  useEffect(() => {
    // 在组件加载后启动滑动跟踪功能
    SidebarNavigation();
  }, []);
*/
