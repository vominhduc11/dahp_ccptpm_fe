// const loggedReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'SIGN_IN':
//       return !state;
//     default:
//       return state;
//   }
// };

// export default loggedReducer;

// loggedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loggedSlice = createSlice({
    name: 'logged',
    initialState: false,
    reducers: {
        signIn: (state) => !state // Đảo ngược giá trị của state
    }
});

export const { signIn } = loggedSlice.actions;
export default loggedSlice.reducer;
