import {useContext, useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails.jsx'
import AdminLogin from './pages/AdminLogin'
import AdminPage from './pages/AdminPage'
import AdminProductDetails from './pages/AdminProductDetails'
// import { AdminContext } from './contexts/AdminContext'
import Protected from './components/Protected'
import AdminOrders from './pages/AdminOrders'

import AdminOrderDetail from './pages/AdminOrderDetail'
import OrderContextProvider from './contexts/OrderContext'
import { UserContext } from './contexts/UserContext'
import UserProfile from './pages/UserProfile'


const App = () => {

  // const { admin } = useContext(AdminContext)
  const { user } = useContext(UserContext)
  console.log(user)

  // const [isSignedIn, setIsSignedIn] = useState(null)
  // const signin = () => {
  //   setIsSignedIn(true)
  // }
  // const signout = () => {
  //   setIsSignedIn(false)
  // }

 return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />}/>
        <Route path='/userprofile' element={
         <OrderContextProvider>
          <Protected>
          <UserProfile />
          </Protected>
         </OrderContextProvider>}/>
        
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/AdminLogin' element={<AdminLogin />}/>
        <Route path='/Adminproductdetails/:productId' element={
           <Protected user={user} >
              <AdminProductDetails />
            </Protected>
            } />
        
        <Route path='/AdminPage' element={
          <Protected user={user} >
          <AdminPage />
          </Protected> 
          }/>
       
       <Route path='/AdminOrders' element={
          <Protected user={user} >
            <OrderContextProvider>
              <AdminOrders />
            </OrderContextProvider> 
          </Protected> 
          }/>

         <Route path='/adminorderdetails/:orderId' element={
          <Protected user={user} >
            <OrderContextProvider>
              <AdminOrderDetail />   
               </OrderContextProvider>
          </Protected> 
          }/>


          
       </Routes>


      <Footer />
    </div>
  )
}

export default App