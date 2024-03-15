import React from 'react';
import "./Zmd.css"
import { Carousel } from 'antd';

function Zmd() {
  return (
    <div className="carousel-container">
      <Carousel autoplay>
        <div className="carousel-container">
          <img src='https://www.snbc.cn/upload/admin/20220607/9a1d9bed6dafc924366808508e68cc26.jpg' className='img-size'></img>
        </div>
        <div>
          <img src='https://www.snbc.cn/upload/admin/20211209/05b09faf142e4b2329b9d5fed56393bd.jpg' className='img-size'></img>
        </div>
        <div>
        <img src='https://www.snbc.cn/upload/admin/20211210/d2c27a4309daa07e0c4b3de9b9f89afd.jpg' className='img-size'></img>
        </div>
        <div>
        <img src='https://www.snbc.cn/upload/admin/20211209/97654f883ee33f1800f19ed5626a16d1.jpg' className='img-size'></img>
        </div>
      </Carousel>
    </div>
  );
}


export default Zmd;