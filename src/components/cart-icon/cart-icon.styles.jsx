import styled from "styled-components";

import ShoppingCartIcon from "../../assets/ShoppingCartIcon";

export const ShopIcon = styled(ShoppingCartIcon)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainter = styled.div`
  width: 45px; 
  height: 45px; 
  position: relative; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer; 
`;

export const ItemCount = styled.span`
  position: relative; 
  font-size: 10px; 
  font-weight: bold; 
  bottom: 12px; 
  color: black;
`;

// .cart-icon-container { 
//   width: 45px; 
//   height: 45px; 
//   position: relative; 
//   display: flex; 
//   align-items: center; 
//   justify-content: center; 
//   cursor: pointer; 
  
//   // .shopping-icon { 
//   //   width: 24px; 
//   //   height: 24px; 
//   // } 
  
//   .item-count { 
//     position: absolute; 
//     font-size: 10px; 
//     font-weight: bold; 
//     bottom: 12px; 
//   } 
// } 