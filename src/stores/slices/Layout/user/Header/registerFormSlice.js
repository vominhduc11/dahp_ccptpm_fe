import { createSlice } from '@reduxjs/toolkit';

const registerFormSlice = createSlice({
    name: 'registerFormSlice',
    initialState: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user'
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const { setUsername, setPassword, setConfirmPassword } = registerFormSlice.actions;
export default registerFormSlice.reducer;
