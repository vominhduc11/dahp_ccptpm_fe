import { createSlice } from '@reduxjs/toolkit';

const isLoginModalOpenSlice = createSlice({
    name: 'isLoginModalOpenSlice',
    initialState: false,
    reducers: {
        openModal: () => true,
        closeModal: () => false
    }
});

export const { openModal, closeModal } = isLoginModalOpenSlice.actions;
export default isLoginModalOpenSlice.reducer;
