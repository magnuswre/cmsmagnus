import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "../components/shoppingcart/CartProduct";
import { OrderContext }  from "../contexts/OrderContext";

const Checkout = () => {

   const { orders , submitOrder } = useContext(OrderContext)

    const { cartItems, totalQuantity, removeFromCart, clearCart, incrementQuantity, decrementQuantity} = useContext(CartContext);
    console.log(cartItems)
  
     const calculateTotal = () => {
      let totalPrice = 0
      cartItems.forEach(item => {
        totalPrice = item.product.price * totalQuantity
      })
      return totalPrice
    }


  return (
    <div className="checkout-container">
    <div onClick={e => e.stopPropagation()}>
      {cartItems.length < 1 && (
        <div className="checkout p-2 text-center">Your cart is empty.</div>
        )}
      {cartItems.map((item, index) => <CartProduct key={index + item.product._id} item={item} index={index} />)}
      <div className="checkout dropdown-divider"></div>
      <div className="checkout d-flex justify-content-between align-items-center p-2">
       <div className="checkout price-info">
         <p className="checkout m-0">Total: {calculateTotal()} SEK</p>
         <small className='checkout text-muted'>incl. vat</small>
       </div>
       <div className="checkout d-flex gap-2">
         <button className="checkout btn btn-cart clear" onClick={clearCart}>Clear Cart</button>
         <button className="checkout btn btn-cart info" onClick={() => submitOrder(cartItems)}>Submit Order</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout