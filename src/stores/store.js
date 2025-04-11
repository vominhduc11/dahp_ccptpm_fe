import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import loggedSlice from './slices/loggedSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        isLogged: loggedSlice
    }
});

export default store;
