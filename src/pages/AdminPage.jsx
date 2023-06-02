// import Collection  from '../components/home/Collection'
// import CollectionCard from '../components/home/CollectionCard'
import React, { useContext } from 'react'
import { ProductDetailContext } from '../contexts/ProductDetailContext'
import ProductContextProvider from '../contexts/ProductContext'
import AdminPageDetails from '../components/info_admin/AdminPageDetails'

const AdminPage = () => {


  // 'const { data } = useContext(ProductDetailContext)
  // console.log(first)'
 
  return (
    <div>
       <ProductContextProvider>
         <AdminPageDetails />
     </ProductContextProvider>
    </div>
  )
}

export default AdminPage