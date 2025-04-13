import { createSlice } from '@reduxjs/toolkit';

const loginErrorSlice = createSlice({
    name: 'loginErrorSlice',
    initialState: '',
    reducers: {
        setError: (state, action) => {
            return action.payload;
        }
    }
});

export const { setError } = loginErrorSlice.actions;
export default loginErrorSlice.reducer;
