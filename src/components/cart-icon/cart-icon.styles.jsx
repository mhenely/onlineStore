import styled from "styled-components";

import ShoppingIcon from '../../assets/shopping-bag';

export const ShopIcon = styled(ShoppingIcon)`
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
  position: absolute; 
  font-size: 10px; 
  font-weight: bold; 
  bottom: 12px; 
  color: white;
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