import { createSlice } from '@reduxjs/toolkit';

const registerSuccessSlice = createSlice({
    name: 'registerSuccessSlice',
    initialState: false,
    reducers: {
        setRegisterSuccess: () => true
    }
});

export const { setRegisterSuccess } = registerSuccessSlice.actions;
export default registerSuccessSlice.reducer;
