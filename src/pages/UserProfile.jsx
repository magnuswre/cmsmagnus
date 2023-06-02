import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'
import ShoppingCart from '../components/shoppingcart/ShoppingCart'

const UserProfile = () => {
  const { orderData} = useContext(OrderContext)

  console.log(orderData)

  if (!orderData) {
    return <div>Loading...</div>
  }

  return (
    
    <div className="orders">
     <div className='active-order'>
      {
       <ShoppingCart />
      }
     </div>
     <div className='historic-orders'>
      {orderData.map(order => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <h4>Order Rows:</h4>
          <ul>
            {order.orderRows.map(row => (
              <li key={row._id}>
                <p>Product: {row.product}</p>
                <p>Quantity: {row.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserProfile






