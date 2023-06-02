import { useContext, useState  } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { FaTrash } from "react-icons/fa";

const ShoppingCart = () => {
  const { cartItems, totalQuantity, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [isToggled, setIsToggled] = useState(false);

   

  const handleToggle = () => {
    

    setIsToggled(!isToggled);

    console.log(window.event.target)
    

  };

  
  

  const calculateTotal = () => {
    let totalPrice = 0
    cartItems.forEach(item => {
      totalPrice = item.product.price * totalQuantity
    })
    return totalPrice
  }

  return (
    <div className="shopping-cart-container">
      <span className="rounded-pill">{totalQuantity}</span>

      {/* {!window.event.target} */}
      {
      isToggled ? (
        <div className="expandable-cart">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
              <div className="dropdown-top" key={index}>
                <div className="cart-item-container">
                  <div className="cart-image">
                    <img src={item.product.imageURL} alt={item.product.imageURL} />
                  </div>
                  <div>
                    <p>{item.product.name}</p>
                    <small>{item.quantity}x {item.product.price} SEK</small>
                  </div>
                </div>

                <div className='button-container'>
                  <div role="group">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                  <FaTrash onClick={removeFromCart} />
                </div>
              </div>
              ))}
              <span className="divider"></span>
              <div className="dropdown-bottom">
                <div className="price-info">
                  <p>Total: {calculateTotal()} SEK</p>
                  <small>incl. vat</small>
                </div>
                <div>
                  <button onClick={clearCart}>Clear Cart</button>
                  <button>Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>
      ) 
      
      : (
        <div></div>
      )}


      <BsCart3 onClick={handleToggle} size={30} />
    </div>
  );
};

export default ShoppingCart;
