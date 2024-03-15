import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import "./Homepage.css"
function Homepage() {
    return (
        <div className='Homepage-Header'>
            <div className='NaviBar'>
                <div>
                    <a>
                        <img></img>
                    </a>
                </div>
                <div>
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