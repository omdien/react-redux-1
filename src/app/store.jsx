import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/TestSlice';
import productReducer from '../features/ProductSlice';
import CloseOpenReducer from '../features/CloseOpenSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
    product: productReducer,
    closeOpen: CloseOpenReducer
  },
});