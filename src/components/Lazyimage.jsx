import React , { useEffect, useRef, useState } from 'react';
const Lazyimage = (props) => {
  const [ inView, setInView] =useState(false)
 const ref = useRef();
let callback = (entries,observer) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
          setInView(true)
        }
    })
};
 useEffect(()=>{
    let observer = new IntersectionObserver(callback);

    if (ref?.current)
   { observer.observe(ref.current);}
   
    return()=>{
        observer.disconnect();
    };
 },[]);
 
  return inView ?(<img{...props}/>) : (
    <img  ref={ref} style={{width:"1000px",  height:"1000px" , background:"red"}} />
  );
};

export default Lazyimage;
