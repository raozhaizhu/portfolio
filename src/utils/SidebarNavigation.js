import React, { useState, useEffect } from 'react';

const SidebarNavigation = () => {
  const [activeSection, setActiveSection] = useState(''); // 状态来保存当前激活的 section

  // 获取当前页面的 hash
  const getCurrentHash = () => window.location.hash;

  // 更新 activeSection 状态
  const updateActiveLink = () => {
    const currentHash = getCurrentHash();
    setActiveSection(currentHash);
  };

  // 监听滚动事件，优化性能
  const onScroll = () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section');

    // 检查每个 section 是否在视口中
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        currentSection = section.getAttribute('id');
      }
    });

    // 更新 activeSection 状态
    setActiveSection(`#${currentSection}`);
  };

  useEffect(() => {
    // 页面加载时，初始化 active 状态
    updateActiveLink();

    // 监听滚动事件
    window.addEventListener('scroll', onScroll);

    // 监听 hashchange 事件（当点击链接或修改 URL hash 时）
    window.addEventListener('hashchange', updateActiveLink);

    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', updateActiveLink);
    };
  }, []);

  // 定义 sidebar links 数据，可以直接用数组来生成
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className='sidebar'>
      {/* 使用 React 渲染 sidebar links */}
      {links.map((link) => (
        <a href={link.href} className={link.href === activeSection ? 'active' : ''} key={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SidebarNavigation;