import React from 'react'
import '../ProductDescription/ProductDescription.css'

export const ProductDescription = () => {
  return (
    <div className='product_description'>
        <div className="product_description_navigator">
            <div className="product_description_nav_box">Description</div>
            <div className="product_description_nav_box fade">Reviews {(122)}</div>
        </div>
        <div className="product_description_description">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
            </p>
        </div>
    </div>

)
}
