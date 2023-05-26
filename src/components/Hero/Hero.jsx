import React from 'react';
import "./Hero.scss";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const  year = new Date().getFullYear();
  return (
<div className="content">
                    <span className='name'>Gausiya Boutique</span>
                    <h1 className="homeer">                      
                        CUSTOM-MADE EMBROIDERED KAFTAN / GOWNS & SUMMER / KIDS DRESS / IMITATION JEWELLERY 
                    </h1>  
                    <span className='name'>Trending Product in {year}</span>                   
                     <button onClick={()=>navigate("/Products/1")} >VIEW COLLECTION</button>
                </div>
  );
};

export default Hero;
