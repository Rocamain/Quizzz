import React from "react"
import "./Hero.css"
import Btn from "../components/Btn.js"


export default  function Hero (props) {    
    
    return (
       <div className="start">
            <div className="start-text">
                <h1 className="start-title">Quizzical</h1>
                <p className="start-description">Lets see if yout are the smatest in the world</p>
                <Btn  action={props.start} type='hero-start-btn' />
            </div>
            <div className="blop-container-top">
                <svg className="blop-top" width="100%" height="100%"   viewBox="0 0 223 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 102.395C71.1213 71.8507 33.3179 42.7816 37.1728 1.30671C41.4394 -44.599 75.8541 -84.3588 118.419 -102.133C158.797 -118.994 206.035 -109.256 241.822 -84.1494C271.947 -63.0141 272.823 -22.8756 282.141 12.729C292.17 51.0508 318.521 91.8106 296.501 124.779C273.539 159.159 224.991 164.432 183.931 159.768C148.318 155.723 123.751 128.677 99.4095 102.395Z" fill="#FFFAD1"/>
                </svg>
            </div>
            <div className="blop-container-bottom">
                <svg className="blop-bottom" width="100%" height="100%"  viewBox="0 0 148 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
                </svg>
            </div>
       </div>
    )
}