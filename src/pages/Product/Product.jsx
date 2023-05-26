import  { useState } from 'react';
import "./Product.scss";
import { ImPaypal } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import useFetch from "../../hooks/useFetch";
import  { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [lengthSize, setLengthSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const { data} = useFetch(
     `products/${id}?populate=*`
  );

  const notify =() => {
    toast.success('Success. Check your cart', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  return(
  <div className="mainf">
      <ToastContainer/>
    <div className="main-container">
      <div className="left">
        <div className="main_image">
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt=""  />
        </div>
        <div class="option">
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img1")} />
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")}/>
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img3")}/>
          <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes?.img4?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img4")}/>
        </div>
      </div>
      <div className="right">
      <div className="left-c">
      <h1>{data?.attributes?.tittle}</h1>
      <span className='small'>$ {data?.attributes?.price}</span>
      <span className='small'>{data?.attributes?.proid}</span>
      <span className='small'>Size</span>
      <div className='size'>
      {data?.attributes?.size?.data?.map((item ,i) => (
          <div key={i} 
          className={ `muti-size ${ selectedSize === item.size ? "active" : ""}  `}
          onClick={()=> {
            setSelectedSize(item.size);
            setShowError(false);
          }}>
           { item.size}
            </div>
        ))}
      </div>
      <span className='small'>{data?.attributes?.inchtittle}</span>
      <div className='size-inch'>
      {data?.attributes?.length?.data?.map((item ,i) => (
          <div key={i}
           className={`m-sizes ${ lengthSize === item.length ? "active" : ""}`}
           onClick={()=> {
            setLengthSize(item.length);
            setShowError(false);
          }}>
             {item.length}
           </div>
        ))}
      </div>
      {showError && (<div className='erro'>Size & Length selection is require</div>)}
        <span className='small'>Fabric : {data?.attributes?.materialname}</span>
        <span className='small'>Quantity</span>
      <div className="quantity">
        <button className='q-encreas' onClick={() => setQuantity((prev) => (prev ===1 ? 1 : prev - 1))}>-</button>
        <span className='number'>{quantity}</span>
        <button className='q-encreas' onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button className='addcard'
      onClick={() =>{
        if (!lengthSize + !selectedSize)
        { setShowError(true); }          
        else{
          dispatch(
            addToCart({
              id: data.id,
              tittle: data.attributes.tittle,
              proid : data.attributes.proid,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity: quantity,
            selectedSize : selectedSize,
            lengthSize :lengthSize,
             
            })
          );
          notify();
        }
      }
    }
      >Add to Card</button>
      </div>
       <div className="icons">
        <h2>Checkout safely using your preferred payment method</h2>
        <span className='icons'><FaCcStripe  color='rgb(0, 0, 255)'size={35}/></span>
        <span className='icons'><ImPaypal color='rgb(0, 0, 255)' size={30}/></span>
        <span className='icons'>< RiVisaFill color='rgb(189, 8, 28)' size={35}/></span>
        <span className='icons'><FaCcMastercard  color='rgb(189, 8, 28)'size={35}/></span>
       </div>
      </div>
      
    </div>
       <span className="tittl-des">Product Details</span>
    <div  className='des'>
    <h2>Quality detail : {data?.attributes?.desc}</h2>
    <h3>Note : {data?.attributes?.descr}</h3>
    </div>
    </div>
    );
};

export default Product;
