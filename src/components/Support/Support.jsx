import React from 'react';
import { GoLocation} from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FaPinterestSquare} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import {BsWhatsapp } from "react-icons/bs";
import "./Support.scss";
import News from '../News/News';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="support">
      <div className="link">
      <h1>Follow us</h1>
        <Link to="https://www.facebook.com/gausiyaboutiques" target="blank">
        <span className='icons'><BsFacebook  color='rgb(0, 0, 255)' size={30}/></span></Link>

         <Link to="https://www.instagram.com/gausiyaboutiques/" target="blank">
        <span className='icons'><BsInstagram  color='rgb(221, 42, 123)'size={30}/></span></Link>

        <Link to="https://in.pinterest.com/gausiyaboutique/" target="blank">
        <span className='icons'><FaPinterestSquare color='rgb(189, 8, 28)' size={30}/></span></Link>

        <Link  to="https://www.linkedin.com/in/gausiyaboutique/" target="blank">
        <span className='icons'><AiFillLinkedin  color='rgb(0, 119, 181)'size={30}/></span></Link>

        <Link to= "https://wa.me/919967924064" target="blank">
        <BsWhatsapp  color='hsla(126, 100%, 50%, 1)' size={30}/></Link>
      </div>

      <div className="customer">
        <h2 className='head'>Customer Support Services 24/7</h2>

       <h3 className='secondd'>Customer service is one of our top priorities.
        The goal of our company is to provide 100% customer satisfaction.
        whenever you have a complaint, please contact us and we will make sure to assit you.
       </h3>
      </div>
      
      <div className="contact">
        <h2>Contact</h2>
        <div className="title">Gausiya Boutique</div>
          <div className="text">
          <GoLocation  color='rgb(255, 153, 0)'size={25}/>
            Plot no 29 , Road no 5, Shivaji Nagar, Govandi Mumbai 400043,India
          </div>
        <div className="c-item">
          <FiPhoneCall color='rgb(0, 128, 0)'size={30}/>
          <div className="textt">
            +91 9967924064
          </div>
        </div>
      </div>
      <News/>
    </div>
    
  );
};

export default Support;
