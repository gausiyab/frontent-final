import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Products.scss";
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
const Products = () => {
  const catId = parseInt (useParams().id);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data} = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.item;
    setSelectedSubCats (
      isChecked
      ? [...selectedSubCats, value]
      : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem" >
         <h2>products Categories</h2>
         <select className='select' onChange={handleChange}  > 
       <option className='option' >Filter By Categories </option>       
       {data?.map((item) =>(
       <option className='option' key={item.id} value={item.id}>{item.attributes.tittle}</option>
       ))}
     </select>
        </div>
      </div>
      <div className="right">
        <List catId={catId} subCats= {selectedSubCats}/>
      </div>
    </div>
  );
};
export default Products;

