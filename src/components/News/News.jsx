
import React from 'react';
import "./News.scss";

const News = () => {
  return (
   <div className="contact">
        <div className="wrapper">
            <span className='small-text'>Be IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter Your E-mail'/>
                <button>JOIN US</button>
            </div>
        </div>
      </div>
  );
};
export default News;