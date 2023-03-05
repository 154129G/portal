import {createSlice} from "@reduxjs/toolkit";




const initialState =[{
    id: "1" ,
    name: 'dhanaa' ,
    email: '',
    role: '',
    token: 'dkdK'
    }];


const userSlice = createSlice({
    name: 'user',
    initialState: {userConfigData: []},
    reducers:{
        setUser: (state, action) => {
            state.userConfigData.push(action.payload);
        }
    }
})

export  const { setUser } = userSlice.actions;
export const user = (state) => state.user;

export default userSlice.reducer;

