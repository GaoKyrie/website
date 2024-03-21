import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Productpage from './components/Productpage/Productpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Firstpage from './pages/Firstpage';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={< Firstpage/>} /> 
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
