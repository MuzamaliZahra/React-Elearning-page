import React, { useState } from 'react';
import { MenuItem } from './ManuItem'; // Updated import
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index_style.css';
import Hero from './Hero';
import Home from './Home';
import img from "../CSS/photo.jpg"
const Index = () => {
  const [clicked, setClicked] = useState(false); // Initialize state using the useState hook

  const handleClick = () => {
    setClicked(!clicked); // Update the state using setClicked
  };

  return (
    <>
    
      <nav className="navitem">
        <img src={img} alt="nltp"  className="navbarlogo"/>
         <h2 className="head">NEXTLEVEL </h2>
        <div className="menu-icon" onClick={handleClick}>
        
          <i className={clicked ? "fas fa-time" : "fas fa-bars"}></i>
        </div>
        
        <ul className={clicked ? "nav-menu active" : "nav-menu"}> 
          {MenuItem.map((item,index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}> &nbsp;&nbsp; </i>  
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
    </>
  );
};

export default Index;
