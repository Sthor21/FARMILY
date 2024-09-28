import React, { useContext } from 'react'
import './css/ProductCategory.css'
import {HomeContext} from '../Context/HomeContext'
import { Item } from '../Components/Item/Item'
export const ProductCategory = (props) => {
  const {all_product}=useContext(HomeContext);
  const isSustainability = props.category === "sustainable";
  return (
    <div className='product_category'>
      <img className='product_category_banner' src={props.banner} alt="" />
      {!isSustainability && (
        <div className="bgcolor">
          <div className="product_category_products">
            {all_product.map((item, i) => {
              if (props.category.toLowerCase() === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
              }
              return null;
            })}
          </div>
        </div>
      )}
      {!isSustainability && (
        <div className="product_category_loadmore">
          Explore More
        </div>
      )}
      
    </div>
  )
}

