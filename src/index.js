import React from 'react';
import ReactDOM from 'react-dom/client'; // 使用 'react-dom/client' 来引入 createRoot
import App from './App'; // 引入 App 组件
import './styles/styles.css'; // 样式文件
import './index.css'; // 可选的全局样式文件
import './App.css'; // 可选的全局样式文件

// 获取页面中的根元素
const rootElement = document.getElementById('root');

// 使用 React 18 的 createRoot 方法来渲染
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import reportWebVitals from './reportWebVitals'; // 确保正确导入 reportWebVitals
