import React, { useEffect } from 'react';
import './HomepageVideo.css'; // 导入组件的 CSS 文件

function HomepageVideo() {
    useEffect(() => {
        // 在这里编写 JavaScript 代码，确保在组件加载时执行
        const textArray = ["Text 1", "Text 2", "Text 3"]; // 要显示的文字数组
        const typingSpeed = 100; // 打字速度，单位：毫秒

        let textIndex = 0;
        let charIndex = 0;
        let typingText = document.getElementById('typing-text');

        function type() {
            if (charIndex < textArray[textIndex].length) {
                typingText.innerHTML += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, 2000); // 等待两秒后擦除文字
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, typingSpeed);
            } else {
                textIndex++;
                if (textIndex >= textArray.length) {
                    textIndex = 0;
                }
                setTimeout(type, 500); // 等待0.5秒后继续打字
            }
        }

        setTimeout(type, 1000); // 等待1秒后开始打字
    }, []);

    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src="https://www.minethink.com/upload/admin/20190326/c0f88bf00f58c3e3e65ad26310dab875.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                </video>
                <div className="text-container">
                    <h1 id="typing-text"></h1>
                </div>
            </div>
        </div>
    )
}

export default HomepageVideo;
