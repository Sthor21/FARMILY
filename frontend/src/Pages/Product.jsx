import React,{ useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../Components/Breadcrumbs/Breadcrumbs'
import {ProductDisplay} from '../Components/ProductDisplay/ProductDisplay'
import { ProductDescription } from '../Components/ProductDescription/ProductDescription'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
  const {all_product}=useContext(HomeContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id === Number(productId))
  return (
    <div style={{ backgroundColor: '#F7EFE5' }}>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <ProductDescription product={product}/>
      <RelatedProducts/>
    </div>
  )
}
