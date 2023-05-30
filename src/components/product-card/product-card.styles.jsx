import styled from "styled-components";
import { BaseButton, InvertedButton } from "../button/button.styles";


export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${BaseButton},
  ${InvertedButton}{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton},
    ${InvertedButton}{
      opacity: 0.85;
      display: flex;
    }
  }

`
export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin-left: 10px;
    
`
export const Cost = styled.span`
  width: 10%;
  margin-right: 10px;
`
