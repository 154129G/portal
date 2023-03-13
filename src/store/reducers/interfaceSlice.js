import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dashboardItem: [],
    selectedDashborad: {},
    selectedtabIndex: undefined 
 }

const interfaceDataSlice = createSlice(
    {
     name: 'interface-data',
     initialState,
     reducers:{
        setAllDashboards: (state, action) => {
            state.dashboardItem = action.payload;
        },
        setSelectedtabIndex: (state, action) => {
            state.selectedtabIndex = action.payload;
        },
        removeSelectedtabIndex: (state, action) => {
            state.selectedtabIndex = undefined;
        },
    }
     
    }
);

export const { setAllDashboards, setSelectedtabIndex , removeSelectedtabIndex} = interfaceDataSlice.actions;

export default interfaceDataSlice.reducer;

