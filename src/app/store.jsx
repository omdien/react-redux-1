import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/TestSlice';
import productReducer from '../features/ProductSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
    product: productReducer
  },
});