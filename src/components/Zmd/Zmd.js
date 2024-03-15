import React from 'react';
import "./Zmd.css"
import { Carousel } from 'antd';
import image01 from '../../assets/image01.png';
function Zmd() {
  return (
    <div className="carousel-container">
      <Carousel autoplay>
        <div className="carousel-container">
          <img src={image01} className='img-size'></img>
        </div>
        <div>
          <img src={image01} className='img-size'></img>
        </div>
        <div>
        <img src={image01} className='img-size'></img>
        </div>
        <div>
        <img src={image01} className='img-size'></img>
        </div>
      </Carousel>
    </div>
  );
}


export default Zmd;