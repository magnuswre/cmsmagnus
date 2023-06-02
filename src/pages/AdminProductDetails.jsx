import React from 'react'
// import ProductDetailInfo from '../components/products/ProductDetailInfo'
// import ProductDetailDesc from '../components/products/ProductDetailDesc'
import ProductDetailsProvider from '../contexts/ProductDetailContext';
import AdminProductDetailsComponent from '../components/info_admin/AdminProductDetailsComponent';
import ProductContext from '../contexts/ProductContext';
// import AdminContextProvider from '../contexts/AdminContext';

const AdminProductDetails = () => {
  
    return (
    <div>
        <ProductContext>
          <ProductDetailsProvider>
            <AdminProductDetailsComponent />
          </ProductDetailsProvider>
        </ProductContext>
    </div>
  )
}

export default AdminProductDetails