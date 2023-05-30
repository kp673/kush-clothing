import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const ShoppingLogo = styled(ShoppingIcon)`
  width: 50px;
  height: 50px;
`
  
export const CartIconContainer = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ItemCount = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 10px;
`