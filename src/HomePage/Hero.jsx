import React from 'react'
import './index_style.css';
import img from '../draw-2@2x.png'
const Hero = (props) => {
  return (

 
    <>
    <div className="st-box-child"/>
    <img className="draw-2-icon" alt="" src={img} />
    <div className="develop-your-skills">
    {props.title1}
    </div>
      
  
   
    
      <div className="your-journey-your-container">
          
          <p className="your-journey-your">
          {props.text2}
          </p>
          <a href={props.url} className={props.btnclass}> <div className="get-started">{props.buttonText}</div></a>
        </div>
  
        </>

  
  )
}

export default Hero