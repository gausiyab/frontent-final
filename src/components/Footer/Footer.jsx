import React from 'react';
import { GoLocation} from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAttachEmail } from 'react-icons/md';
import { FaPinterestSquare} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImPaypal } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import "./Footer.scss";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
  const  year = new Date().getFullYear();
const navigate = useNavigate();
  return (
    <footer className='footer'>
    <div className="container">
      <div className="col">
        <div className="title">LOOKING FOR SOMTHING</div>
        <span className='text'onClick={()=>navigate("/Products/1")}>Kaftan & More</span>
        <span className='text'onClick={()=>navigate("/Products/2")}>Imitation Jewellery</span>
        <span className='text'onClick={()=>navigate("/Products/3")}>Kids Kaftan & More</span>
        <span className='text'onClick={()=>navigate("/Products/1")}>Morroccan Kaftan</span>
      </div>
      <div className="col">
        <div className="title">LINKS</div>
        <span className='text'onClick={()=>navigate("Shipping")}>Shipping Policy</span>
        <span className='text'onClick={()=>navigate("Cancellation")}>Refund Policy</span>
        <span className='text'onClick={()=>navigate("Term_of_service")}>Term of Service</span>
        <span className='text'onClick={()=>navigate("Privacy_policy")}>Privacy policy</span>
        <span className='text'onClick={()=>navigate("Support")}>Customer Support</span>
      </div>
       <div className="col">
        <div className="title">GET CONNECTED</div>
        <Link to="https://www.facebook.com/gausiyaboutiques" target="blank">
        <span className='icons'><BsFacebook  color='rgb(0, 0, 255)' size={30}/></span></Link>

         <Link to="https://www.instagram.com/gausiyaboutiques/" target="blank">
        <span className='icons'><BsInstagram  color='rgb(221, 42, 123)'size={30}/></span></Link>

        <Link to="https://in.pinterest.com/gausiyaboutique/" target="blank">
        <span className='icons'><FaPinterestSquare color='rgb(189, 8, 28)' size={30}/></span></Link>

        <Link  to="https://www.linkedin.com/in/gausiyaboutique/" target="blank">
        <span className='icons'><AiFillLinkedin  color='rgb(0, 119, 181)'size={30}/></span></Link>

        <div className="icons">  <MdAttachEmail color='rgb(255, 117, 26)'size={30}/></div>
        <div className="title">
           gausiyaboutique@gmail.com
          </div>
      </div>
      <div className="col">
        <div className="title">ADDRESS</div>
        <div className="c-item">
          <div className="text">
          <GoLocation  color='rgb(255, 153, 0)'size={50}/>
            Plot no 29 , Road no 5, Shivaji Nagar, Govandi Mumbai 400043,India
          </div>
        </div>
        <div className="c-item">
          <FiPhoneCall color='rgb(0, 128, 0)'size={30}/>
          <div className="text">
            +91 9967924064
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          Gausiya Boutique @ {year} All Rights Reserved.
        </div>
        <div className="payment">
                    <span className='icons'><ImPaypal color='rgb(0, 0, 255)' size={30}/></span>
                    <span className='icons'><FaCcStripe  color='rgb(221, 42, 123)'size={35}/></span>
                    <span className='icons'>< RiVisaFill color='rgb(189, 8, 28)' size={35}/></span>
                    <span className='icons'><FaCcMastercard  color='rgb(0, 0, 255)'size={35}/></span>
                    <span className='icons'><FaCcDiscover  color='rgb(255, 153, 0)'size={35}/></span>
                </div>
      </div>
    </div>
   </footer>
  );
};

export default Footer;
