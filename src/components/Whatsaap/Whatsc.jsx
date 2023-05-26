import React from 'react';
import "./Whatsc.scss";
import {BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

const whatsc = () => {
  return (
   <div className='chat'>
      <div className="right-chat">
        <Link to= "https://wa.me/919967924064" target="blank">
        <BsWhatsapp className='what' size={35}/></Link>
        </div>
    </div>
  );
};

export default whatsc;
