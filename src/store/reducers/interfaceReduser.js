import { SET_SELECTED_DASHBOARD, SET_SELECTED_TAB_INDEX } from "../type";

const initialState = {
    dashbordData: [],
    selectedDashboard: {},
    selectedTabIndex: 0
};


const interfaceReducer = (state = initialState , action) => {
    switch (action.type){
        case SET_SELECTED_DASHBOARD:
            return {
                ...state,
                selectedDashboard: action.payload
            }
        case SET_SELECTED_TAB_INDEX:
                return {
                    ...state,
                    selectedTabIndex: action.payload
                }
        default:
            return state
    }
}

export default interfaceReducer;