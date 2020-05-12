import React from 'react'
import Slick from './slick'
import Box from './box'

function Home() {
    return (
        <div className='home'>
            <div className="home-page">
                <Slick />
            </div>
            <div className="section1">
                <div className="line"></div>
                <div className="sec1-container">
                    <div className="sec1-left">
                        <div className='title'>our mission</div>
                    </div>
                    <div className="sec1-right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis necessitatibus ab temporibus modi ut excepturi distinctio labore sint, consequatur est tenetur, sed delectus ipsam velit, pariatur asperiores quaerat accusantium rem hic error? Dolorum accusantium perspiciatis id, assumenda quasi rerum sequi? Neque ratione dolores animi, exercitationem perspiciatis fugit sapiente, itaque quisquam commodi perferendis iusto quos, voluptatum delectus unde culpa autem aperiam cupiditate eaque voluptatem recusandae! Doloremque eaque consequuntur dignissimos eveniet aliquid! Dignissimos praesentium excepturi sequi veritatis voluptate eveniet nulla ipsum beatae, facilis quod suscipit minima est deserunt nemo! Libero, et quo! Magni tempora cupiditate deleniti expedita, molestiae et molestias laborum.</p>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="sec3-left">
                    <span className='cn'>新闻</span>
                    <span className='en'>NEWS</span>
                </div>
                <div className="sec3-right">
                    <div className="news">
                        <div className="time">2020/05/08</div>
                        <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quos!</div>
                        <div className="arrowhead">
                            <svg t="1589252841626" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="32" height="32"><path d="M631.466667 256L361.813333 512l273.066667 259.413333c10.24 10.24 13.653333 20.48 13.653333 34.133334 0 27.306667-23.893333 47.786667-51.2 47.786666-13.653333 0-27.306667-6.826667-34.133333-13.653333l-307.2-293.546667c-10.24-6.826667-17.066667-20.48-17.066667-34.133333s6.826667-27.306667 17.066667-34.133333l307.2-293.546667c10.24-6.826667 20.48-13.653333 34.133333-13.653333 27.306667 0 51.2 20.48 51.2 47.786666 0 17.066667-6.826667 27.306667-17.066666 37.546667z" p-id="2393"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="left">
                    <Box title='公司信息' content='ABOUT US' url='https://tsukasa-service.jp/wp/wp-content/themes/tsukasa/img/common/link_01.jpg' />
                </div>
                <div className="right">
                    <Box title='产品种类' content='LIST OF ARTICLES' url='https://tsukasa-service.jp/wp/wp-content/themes/tsukasa/img/common/link_02.jpg'/>
                </div>
            </div>
            <div className="footer">
                <div className="contact">
                    <div className="cn">联系我们</div>
                    <div className="en">contact</div>
                </div>
                <div className="info">
                    <div className="compony">compony name</div>
                    <div className="adress">
                      浙江省诸暨市 
                    </div>
                    <div className="tel">
                    TEL. 0586-23-3346　FAX. 0586-23-1878
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
