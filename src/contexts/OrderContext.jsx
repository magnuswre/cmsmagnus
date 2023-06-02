import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const OrderContext = createContext()

const OrderContextProvider = ({ children }) => {

  const { user } = useContext(UserContext)
  const [orderData, setOrderData] = useState([])
  console.log(orderData)

  const fetchOrders = async () => {
    try {
      if (user) {
        const res = await axios.get('http://localhost:8080/api/order/allOrders')
          setOrderData(res.data)
        } else {
        setOrderData([])
      }
    } catch (error) {
      console.log('Error fetching orders', error)
    }
  };

 
 const updateStatus = async (orderId, status) => {
    console.log(status);
    try {
      if (user) {
        await axios.put(`http://localhost:8080/api/order/${orderId}`, { status }, {
          headers: {
            Authorization: `Bearer ${user}`
          }
        });
        setOrderData(prevOrderData =>
          prevOrderData.map(order =>
            order._id === orderId ? { ...order, status } : order
              )
            );
          }
        } catch (error) {
          console.log('Error updating order status', error);
        }
      };

  useEffect(() => {
    fetchOrders()
  }, [user])

  const value = {
    orderData,
    updateStatus
  }

  return (
    <OrderContext.Provider value={value}>
      { children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider