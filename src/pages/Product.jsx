import React from 'react'
import Products from '../components/products/Products'
import ProductContextProvider from '../contexts/ProductContext'
// import ProductDetailsProvider from '../contexts/ProductDetailContext'



const Product = () => {
  return (
    <div>
      <ProductContextProvider>
        {/* <ProductDetailsProvider> */}
          <Products />
      {/* </ProductDetailsProvider> */}
      </ProductContextProvider>
    </div>
  )
}



export default Product