import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
    name: 'roleSlice',
    initialState: 'user',
    reducers: {
        setAdminRole: () => 'admin',
        setUserRole: () => 'user'
    }
});

export const { setAdminRole, setUserRole } = roleSlice.actions;
export default roleSlice.reducer;
