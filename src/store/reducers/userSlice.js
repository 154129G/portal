
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: {},
    permissions: []
 }

const userSlice = createSlice(
    {
     name: 'user-details',
     initialState,
     reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            state.user = {};
        },
    }
     
    }
);

export const { setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;

