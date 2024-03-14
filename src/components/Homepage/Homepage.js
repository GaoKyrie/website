import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import "./Homepage.css"
function Homepage () {
    return(
    <div>
        <ul className='Homepage-ul'> 
            <li className='Homepage-li'><a href='https://baidu.com'><span>关于我们</span></a></li>
            <li className='Homepage-li'><a href='https://baidu.com'><span>解决方案</span></a></li>
            <li className='Homepage-li'><a href='https://baidu.com'><span>产品中心</span></a></li>
            <li className='Homepage-li'><a href='https://baidu.com'><span>服务支持</span></a></li>

        </ul>
    </div>
);
}

export default Homepage;