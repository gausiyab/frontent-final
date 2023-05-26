import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";
import Lazyimage from '../Lazyimage';

const Card = ({item}) => {
  return (
   <Link className='link' to={`/product/${item.id}`}>    
   <div className="card">
    <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}  
        <Lazyimage src={import.meta.env.VITE_API_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" className='mainImg' />
        <Lazyimage src={import.meta.env.VITE_API_UPLOAD_URL + item?.attributes?.img1?.data?.attributes?.url} alt="" className='secondImg' />
    </div>
    <h2>{item?.attributes.tittle}</h2>
    <div className="price">
        <h3>$ {item.oldPrice || item?.attributes.price + 20}</h3>
        <h3>$ {item?.attributes.price}</h3>     
    </div>  
   </div>  
   </Link>   
  );
};

export default Card;