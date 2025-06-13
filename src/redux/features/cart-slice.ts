import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  category?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

// Load initial state from localStorage
const loadInitialState = (): InitialState => {
  // Only access localStorage on the client side
  if (typeof window !== 'undefined') {
    const savedCart = getLocalStorage('cart');
    return {
      items: savedCart?.items || [],
    };
  }
  return {
    items: [],
  };
};

const initialState: InitialState = loadInitialState();

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, quantity, discountedPrice, imgs, category } = action.payload;
      
      // Generate a unique ID if one isn't provided
      const itemId = id || Math.floor(Math.random() * 1000000);
      
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: itemId,
          title,
          price,
          quantity,
          discountedPrice,
          imgs,
          category
        });
      }
      // Save to localStorage after adding item
      setLocalStorage('cart', state);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      // Save to localStorage after removing item
      setLocalStorage('cart', state);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
      // Save to localStorage after updating quantity
      setLocalStorage('cart', state);
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
      // Save to localStorage after clearing cart
      setLocalStorage('cart', state);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.discountedPrice * item.quantity;
  }, 0);
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;
export default cart.reducer;
