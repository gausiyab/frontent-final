import React from 'react';
import"./Shipping.scss";

const Shipping = () => {
  return (
    <div className='ship'>
        <span className='head'>Shipping Term</span>
        <h2 className='desc'><span>*</span>  We customize the dress after the order is place and ship within 1 to 7 working days after payment is successful, 
            depending on customization needed as per individual orders.
            We  final confirmation on <span>Size Measurement, Address, Colour and Contact Point from the customer.</span></h2>
        <p className='desc'><span>*</span> <span> Custom / Import Charges And Taxes will be paid by Buyer</span> International tax and Delay in destination Country "custom/import department"
        is not cover under late shipment.</p>
        <h2 className='desc'><span>* Express Shipping</span> via DHL, FedEx, Aramex and Blue Dart so your item is safe and secured.
        Express shipping takes <span>6-9 business</span> days for delivery from the date of shipping the parcel(and not date of purchase).</h2>
        <h3 className='desc'><span>* Free Shipping : </span>items will be via post & it generally takes 7 - 12 working days for delivery from the date of shipping the parcel(and not date of purchase). </h3>
        <span className='head'>Thank you!</span>
    </div>
  );
};

export default Shipping;
