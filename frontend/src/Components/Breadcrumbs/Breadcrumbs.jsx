import React from 'react'
import '../Breadcrumbs/Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME  <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

