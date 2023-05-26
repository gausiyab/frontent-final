import React from 'react';
import {RiDeleteBin6Fill}  from 'react-icons/ri';
import "./Cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch =useDispatch();

  const totalPrice =() => {
  let total = 0;
  products.forEach((item) => {
  total += item.quantity * item.price;
});
return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    import.meta.env.VITE_API_PUPLIC_STRIPE_KEY

  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    
    <div className='cart'>
      <h1>Product in your Cart</h1>
      <div className="scroller">
      
    {products?.map(item=>(
      <div className="item" key={item.id}>
      <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />
      <div className="details">
      <h2>{item.proid}</h2>
        <h2>{item.tittle?.substring(0, 25)}</h2>
        <h2>Size : {item.selectedSize}</h2>
        <h2>Length : {item.lengthSize}</h2>
        <div className="price">{item.quantity} x ${item.price}</div>
      </div>
      <RiDeleteBin6Fill className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
      </div>
    ))}
    </div>
    <div className="bottom">
    <div className="total">
      <span>SUBTOTAL</span>
      <span>${totalPrice()}</span>
    </div>
    <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
    <span className='reset' onClick={() => dispatch(resetCart())}>reset cart</span>
    </div>
    </div>
  );
};

export default Cart;
