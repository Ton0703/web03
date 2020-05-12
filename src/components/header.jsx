import React, {useState} from 'react'

function Header() {
    const [visible, set] = useState(false)
    function handleClick(){
        set(!visible)
    }
    return (
        <div className='header'>
            <div className="hdleft">Logo</div>
            <div className="hdright">
                <div className='nav'>
                    <ul className={visible? 'visible' : ''}>
                        <li>首页</li>
                        <li>企业情报</li>
                        <li>产品类型</li>
                        <li>注意事项</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </div>
            <div className={`menu-btn ${visible ? 'active' : ''}`} onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Header
