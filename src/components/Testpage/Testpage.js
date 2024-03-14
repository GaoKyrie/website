import React from 'react';
import { Link } from 'react-router-dom';

// 假设您有一个Product组件来展示单个产品

const TestPage = () => {
  return (
    <div className="Testpage">
      <header className="header">
        <h1 className="logo">公司名称</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="intro">
          <h2>欢迎来到我们的网站！</h2>
          <p>这里是关于我们公司的简短介绍。</p>
        </section>

        <section className="products">
          <h2>我们的产品</h2>
          
        </section>

        {/* 可以根据需要添加更多部分，如关于我们、新闻/博客等 */}

      </main>

      <footer className="footer">
        <p>版权所有 &copy; {new Date().getFullYear()} 公司名称</p>
        <p>联系方式: {/* 联系信息 */}</p>
      </footer>
    </div>
  );
};

export default TestPage;