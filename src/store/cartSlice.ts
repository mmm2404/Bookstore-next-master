import  { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IShoppingCart } from "@/types";



const initialState: IShoppingCart={
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartItem(state, action: PayloadAction<any>) {
     
          const itemInCart = state.items.find((item: ICartItem) => item.id === action.payload.id)
  
          if (!itemInCart) {
            state.items.push({...action.payload, quantity: 1, delivery:"delivery"});
 
          } else {
            itemInCart.quantity++;

          }
 
      },
        incrementQuantity:(state,action: PayloadAction<any>) => {

          const item = state.items.find((item: ICartItem) => item.id === action.payload);
          if(item){
                item.quantity ++;
                item.price.amount++;  
          }      
     },
        decrementQuantity:(state, action: PayloadAction<any>) => {
          const item = state.items.find((item: ICartItem) => item.id === action.payload);
          if(item?.quantity === 1){
            item.quantity = 1
          }else {
            if(item){
                item.quantity--;
                item.price.amount--;
         
            }
          }
        },

         removeItem:(state, action: PayloadAction<any>) => {

          let newBasket = state.items.filter((item:any) => item.id !== action.payload);
          state.items = newBasket

  },
        checkout:(state) =>{
          state.items = [];

      }
}})

  export default cartSlice.reducer;
  export const {addCartItem, incrementQuantity, decrementQuantity,checkout,removeItem} = cartSlice.actions
     
