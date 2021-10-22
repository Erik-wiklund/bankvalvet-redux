import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import bankReducer from './bank/bankSlice';

const store = configureStore({
    reducer: {
        bank: bankReducer
    }
});

/* Derive types from our store */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkApi = {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
}

/* Redefine hooks with our types */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
