import { useContext } from 'react';
import CheckoutItem from '../../components/chekout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
  const {cartItems, totalPrice} = useContext(CartContext);
  return(
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))
      }
      <Total>Total: ${totalPrice}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;