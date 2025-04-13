import { configureStore } from '@reduxjs/toolkit';
import isLoginModalOpenSlice from './slices/Layout/user/Header/isLoginModalOpenSlice';
import isRegisterModalOpenSlice from './slices/Layout/user/Header/isRegisterModalOpenSlice';
import loginFormSlice from './slices/Layout/user/Header/loginFormSlice';
import registerFormSlice from './slices/Layout/user/Header/registerFormSlice';
import registerErrorSlice from './slices/Layout/user/Header/registerErrorSlice';
import loginErrorSlice from './slices/Layout/user/Header/loginErrorSlice';

const store = configureStore({
    reducer: {
        isLoginModalOpen: isLoginModalOpenSlice,
        isRegisterModalOpen: isRegisterModalOpenSlice,
        loginForm: loginFormSlice,
        registerForm: registerFormSlice,
        registerFormSlice: registerFormSlice,
        registerError: registerErrorSlice,
        loginError: loginErrorSlice
    }
});

export default store;
