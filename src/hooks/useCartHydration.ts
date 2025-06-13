"use client";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { getLocalStorage } from '@/utils/localStorage';

export const useCartHydration = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window !== 'undefined') {
      const savedCart = getLocalStorage('cart');
      if (savedCart?.items && savedCart.items.length > 0) {
        // If there's saved cart data, we could dispatch an action to hydrate it
        // For now, the cart slice already loads from localStorage in a client-safe way
        console.log('Cart hydrated with', savedCart.items.length, 'items');
      }
    }
  }, [dispatch]);
};
