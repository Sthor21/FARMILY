import React from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from'../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
export const ProductDisplay = (props) => {
    const{product}=props;
  return (
    <div className='product_display'>
        <div className="product_display_left">
            <div className="product_display_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='product_display_img'>
                <img className='product_display_main_img' src={product.image} alt="" />
            </div>

        </div>
        <div className="product_display_right">
            <h1>{product.name}</h1>
            <div className="product_display_right_star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product_display_right_prices">
            <div className="product_display_right_prices_old">
                ₹{props.product.old_price}
                </div>
                <div className="product_display_right_prices_new">
                ₹{props.product.new_price}
                </div>
            </div>
            <div className="product_display_right_description">
            Savor the juicy sweetness of our handpicked peaches, perfect for snacking or adding to your favorite dishes. Enjoy the taste of summer in every bite!
            </div>
            <div className="product_display_right_quantity">
                <h1>Select Quanity</h1>
                <div className='product_display_right_quantities'>
                    <div>1kg</div>
                    <div>3kg</div>
                    <div>5kg</div>
                    <div>10kg</div>
                    <div>20kg</div>
                </div>s
            </div>
            <button >ADD TO CART</button>
            <p className='product_display_right_category'><span>Category :</span>Fruits, Vegetables, Herbs, Dairy Products, Specialty Items.</p>
            <p className='product_display_right_category'><span>Tags :</span>Fresh Produce, Organic Farming, Local Harvest, Healthy Snacks, Sustainable Farming</p>
        </div>
    </div>
  )
}
