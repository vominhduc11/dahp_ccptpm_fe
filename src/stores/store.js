import { configureStore } from '@reduxjs/toolkit';
import isLoginModalOpenSlice from './slices/Layout/user/Header/isLoginModalOpenSlice';
import isRegisterModalOpenSlice from './slices/Layout/user/Header/isRegisterModalOpenSlice';
import loginFormSlice from './slices/Layout/user/Header/loginFormSlice';
import registerFormSlice from './slices/Layout/user/Header/registerFormSlice';
import registerErrorSlice from './slices/Layout/user/Header/registerErrorSlice';
import loginErrorSlice from './slices/Layout/user/Header/loginErrorSlice';
import registerSuccessSlice from './slices/Layout/user/Header/registerSuccessSlice';
import roleSlice from './slices/Context/AuthContext/roleSlice';

const store = configureStore({
    reducer: {
        isLoginModalOpen: isLoginModalOpenSlice,
        isRegisterModalOpen: isRegisterModalOpenSlice,
        loginForm: loginFormSlice,
        registerForm: registerFormSlice,
        registerFormSlice: registerFormSlice,
        registerError: registerErrorSlice,
        loginError: loginErrorSlice,
        registerSuccess: registerSuccessSlice,

        role: roleSlice
    }
});

export default store;
