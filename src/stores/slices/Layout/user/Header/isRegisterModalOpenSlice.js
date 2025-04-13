import { createSlice } from '@reduxjs/toolkit';

const isRegisterModalOpenSlice = createSlice({
    name: 'isRegisterModalOpenSlice',
    initialState: false,
    reducers: {
        openModal: () => true,
        closeModal: () => false
    }
});

export const { openModal, closeModal } = isRegisterModalOpenSlice.actions;
export default isRegisterModalOpenSlice.reducer;
