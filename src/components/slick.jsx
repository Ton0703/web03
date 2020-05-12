import React, {useState, useEffect, useRef} from 'react'
import { useTransition , animated, config} from 'react-spring'

const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
    { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
  ]

function Slick() {
    const [index, set] = useState(0)
    const timeId = useRef(null)
    const transitions = useTransition(slides[index], item => item.id, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.molasses
    } )
    useEffect(() => {
        timeId.current = setInterval(() => {
           set(state => (state + 1)%4)
        },5000)
    }, [])
    function handleClickPrevious(e){
        e.preventDefault()
        set(state => state === 0 ? 3 : (state - 1)%4)
        clearInterval(timeId.current)
        timeId.current = setInterval(() => {
            set(state => (state + 1)%4)
         },5000)
    }
    function handleClickNext(e){
        e.preventDefault()
        set(state => (state + 1)%4)
        clearInterval(timeId.current)
        timeId.current = setInterval(() => {
            set(state => (state + 1)%4)
         },5000)
    }
    return (
        <div className='slick-container'>
            <div className='previous' onClick={handleClickPrevious}>
            <svg t="1589252841626"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="32" height="32"><path d="M631.466667 256L361.813333 512l273.066667 259.413333c10.24 10.24 13.653333 20.48 13.653333 34.133334 0 27.306667-23.893333 47.786667-51.2 47.786666-13.653333 0-27.306667-6.826667-34.133333-13.653333l-307.2-293.546667c-10.24-6.826667-17.066667-20.48-17.066667-34.133333s6.826667-27.306667 17.066667-34.133333l307.2-293.546667c10.24-6.826667 20.48-13.653333 34.133333-13.653333 27.306667 0 51.2 20.48 51.2 47.786666 0 17.066667-6.826667 27.306667-17.066666 37.546667z" p-id="2393"></path></svg>
            </div>
            {transitions.map(({item, props, key}) => (
                 <animated.div key={key} className='slick-bg' style={{...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`}}></animated.div>
           ))}
           <div className='next' onClick={handleClickNext}>
           <svg t="1589252841626" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2392" width="32" height="32"><path d="M631.466667 256L361.813333 512l273.066667 259.413333c10.24 10.24 13.653333 20.48 13.653333 34.133334 0 27.306667-23.893333 47.786667-51.2 47.786666-13.653333 0-27.306667-6.826667-34.133333-13.653333l-307.2-293.546667c-10.24-6.826667-17.066667-20.48-17.066667-34.133333s6.826667-27.306667 17.066667-34.133333l307.2-293.546667c10.24-6.826667 20.48-13.653333 34.133333-13.653333 27.306667 0 51.2 20.48 51.2 47.786666 0 17.066667-6.826667 27.306667-17.066666 37.546667z" p-id="2393"></path></svg>
           </div>
        </div>
    )
}

export default Slick
