import './HomepageContent.css'

function HomepagContent() {
    return (
        <div>
            <div className='index-tit'>
                <div className='index-tit-con'>
                    解决方案
                </div>
            </div>

            <div>
                <ul class="accordion-container">
                    <li class="accordion-item">
                        <p class="accordion-title">产品1</p>                     
                    </li>
                    <li class="accordion-item">
                        <p class="accordion-title">产品2</p>
                    </li>
                    <li class="accordion-item">
                        <p class="accordion-title">产品3</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default HomepagContent;