import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Arrow, CheckoutItemContainer, ImageContainer, Properties, Quantity, Remove, Value } from './checkout-item.styles';


const CheckoutItem = ({ item }) => {
  const {addItemToCart, removeItemFromCart, removeProductFromCart} = useContext(CartContext)
  const { name, imageUrl, price, quantity } = item;
  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item)
  const removeProduct = () => removeProductFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Properties>{name}</Properties>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Properties>{price}</Properties>
      <Remove onClick={removeProduct}>&#10005;</Remove>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem