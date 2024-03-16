import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage/Homepage';
import Zmd from './components/Zmd/Zmd';
import Footer from './components/Footer/Footer';
import HomepagContent from './components/HomepageContent/HomepageContent';
import Productpage from './components/Productpage/Productpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Homepage />
    <Zmd />
    <HomepagContent />
    <Footer />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
