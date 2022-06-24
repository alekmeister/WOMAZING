import { configureStore } from '@reduxjs/toolkit';
import ClothingReducer from './clothes/slice';

export const store = configureStore({
  reducer: {
    clothes: ClothingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
