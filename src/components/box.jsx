import React from 'react'
import './index.scss'

function Box({url, title, content}) {
    return (
        <div className='box' style={{width: '100%'}}>
            <div className="box-img">
                <img src={url} alt='' />
            </div>
            <div className="box-card">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
                <div className="arrowhead">
                <svg t="1589252841626" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="32" height="32"><path d="M631.466667 256L361.813333 512l273.066667 259.413333c10.24 10.24 13.653333 20.48 13.653333 34.133334 0 27.306667-23.893333 47.786667-51.2 47.786666-13.653333 0-27.306667-6.826667-34.133333-13.653333l-307.2-293.546667c-10.24-6.826667-17.066667-20.48-17.066667-34.133333s6.826667-27.306667 17.066667-34.133333l307.2-293.546667c10.24-6.826667 20.48-13.653333 34.133333-13.653333 27.306667 0 51.2 20.48 51.2 47.786666 0 17.066667-6.826667 27.306667-17.066666 37.546667z" p-id="2393"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Box
