import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import "./Homepage.css"
import logo from '../../assets/logo.png';


function Homepage() {
    return (
        <div className='Homepage-Header'>
            <div className='NaviBar'>
                <div className='head-box'>
                    <a className='fl' >
                        <img className='logo' src={logo}></img>
                    </a>
                </div>
                <div className='nav_t'>
                    <ul className='Homepage-ul'>
                        <li className='Homepage-li'><a href='https://www.snbc.cn/'><span>关于我们</span></a></li>
                        <li className='Homepage-li'><a href='https://www.snbc.cn/'><span>解决方案</span></a></li>
                        <li className='Homepage-li'><a href='https://www.snbc.cn/'><span>产品中心</span></a></li>
                        <li className='Homepage-li'><a href='https://www.snbc.cn/'><span>服务支持</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Homepage;