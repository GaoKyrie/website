import "./Footer.css"

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-con body-width">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footer-tit1" >关于新北洋</div>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">公司简介</div>
                        </a>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">产品中心</div>
                        </a>
                        <a href="https://www.snbc.cn">
                            <div className="footer-tit3">加入我们</div>
                        </a>
                    </div>

                    <div className="footer-top-center">
                        <div className="footer-tit1">新闻与活动</div>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">公司动态</div>
                        </a>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">展会信息</div>
                        </a>
                    </div>

                    <div className="footer-top-center">
                        <div className="footer-tit1">投资者关系</div>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">公司公告</div>
                        </a>
                        <a href="https:www.snbc.cn">
                            <div className="footer-tit3">规章制度</div>
                        </a>
                        <a href="https://www.snbc.cn">
                            <div className="footer-tit3">定期报告</div>
                        </a>
                    </div>

                    <div className="footer-top-right">
                        <div className="footer-tit1">联系我们</div>
                        <div className="footer-tit3">新北洋总部</div>
                        <div className="footer-tit3">山东省威海市环翠区昆仑路216号新北洋科技园</div>

                        <div className="footer-titflex">
                            <div className="footer-tit2">公司总机：</div>
                            <div className="footer-tit3">********</div>
                        </div>
                        <div className="footer-titflex">
                            <div className="footer-tit2">服务热线：</div>
                            <div className="footer-tit3">*********</div>
                        </div>
                        <div className="footer-titflex">
                            <div className="footer-tit2">销售热线：</div>
                            <div className="footer-tit3">*********</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;