import React from 'react';
import {useState} from "react";
import imgb from "./robot-svgrepocom.svg";  // Importing the image file
import styles from "./PopUp.module.css";  // Importing CSS modules
import { Link } from 'react-router-dom';
import Popup from './Popup';
const Button = () => {
  const[openModel, setOpenModel]=useState(false);
  return (
  
  <>
    <div className={styles.button1}>
    <Link to="/pop" onClick={()=>{
      setOpenModel(true);
    }}>
        <img src={imgb} alt="Ai" />
      </Link >
    </div>
    {openModel  && <Popup/>}
    </>
  );
};

export default Button;

