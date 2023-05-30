import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const Properties = styled.span`
  width: 25%;
  justify-content: center;
`
export const Quantity = styled.span`
  display: flex;
  width: 25%
`
export const Arrow = styled.div`
  cursor: pointer;
`
export const Value = styled.span`
  margin: 0 10px;
`
export const Remove = styled.div`
 padding-left: 12px;
  cursor: pointer;
`