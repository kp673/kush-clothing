import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/chekout-item/checkout-item.component';

const Checkout = () => {
  const {cartItems, totalPrice} = useContext(CartContext);
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))
      }
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  );
}

export default Checkout;