import { createSlice } from '@reduxjs/toolkit';

const registerErrorSlice = createSlice({
    name: 'registerErrorSlice',
    initialState: '',
    reducers: {
        setError: (state, action) => {
            return action.payload;
        }
    }
});

export const { setError } = registerErrorSlice.actions;
export default registerErrorSlice.reducer;
