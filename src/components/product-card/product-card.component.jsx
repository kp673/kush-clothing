import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { Cost, Footer, Name, ProductCardContainer } from './product-card.styles';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const{addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{ name }</Name>
        <Cost>{price}</Cost>
      </Footer>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  );
}
export default ProductCard;