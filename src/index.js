import React from 'react';
/*
import ReactDOM from 'react-dom/client';*/
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage/Homepage';
import Zmd from './components/Zmd/Zmd';
import Footer from './components/Footer/Footer';
import HomepagContent from './components/HomepageContent/HomepageContent';
import Productpage from './components/Productpage/Productpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
/** 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  <React.StrictMode>
   
    <Homepage />
    <Zmd />
    <HomepagContent />
    <Footer />
    
    
  </React.StrictMode>
  */
  /*
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" component={Homepage} />
      <Route path="/Productpage" component={Productpage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
*/


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* 使用 Routes 包裹 Route 组件 */}
        <Route exact path="/" element={<Homepage />} /> {/* 使用 element 属性来指定要渲染的组件 */}
        <Route path="/Productpage" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
