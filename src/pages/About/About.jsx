
import React from 'react';
import "./About.scss";
import { ImPaypal } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';

const About = () => { 
  return(
    <div className="main">
            <span className="nisar">Welcom To Gausiya Boutique</span>
            <div className="about">
            <span className="wel">Proprietor : Mohd Nisar</span>
                <div className="para-s">
                <span className="Company">Company Details</span>
                    <p className="parag">
                        Nature of business : Manufacturer and Exporter worldwide. Established in the year 2014. IE
                        code :
                        031405****
                        GST no : 27BDSPS9571G1ZM Established in 2014 we are one of the reputed manufacturer,
                        exporter and supplier
                        of
                        a wide range of Designer KAFTAN / ARABIAN KAFTAN / FARSHA / BEADED GOWN / EVENING GOWN /
                        MOROCCAN CAFTAN.
                        More different types designs available.
                        We also manufacturer a large collection for adults and
                        some kids for example functional wear, Festival oriented series with designers New patterns.
                        Our products are in high demand international market too.
                        All our products are made Real Hand Made Design and finest fabric that the easy and
                        comfortable to wear.
                        GAUSIYA BOUTIQUE also
                        promises express delivery anywhere Country. We deliver worldwide shipping
                        USA / UK / EUROP / AFRICA / AUSTRALIA / UAE / Middle East AND MORE.</p>
                </div>
                <div className="payment">
                    <div className='option'>Secure Payment Option</div>
                    <span className='icons'><ImPaypal color='rgb(0, 0, 255)' size={30}/></span>
                    <span className='icons'><FaCcStripe  color='rgb(221, 42, 123)'size={35}/></span>
                    <span className='icons'>< RiVisaFill color='rgb(189, 8, 28)' size={35}/></span>
                    <span className='icons'><FaCcMastercard  color='rgb(0, 0, 255)'size={35}/></span>
                    <span className='icons'><FaCcDiscover  color='rgb(255, 153, 0)'size={35}/></span>
                </div>
            </div>
    </div>
  );
};

export default About;
