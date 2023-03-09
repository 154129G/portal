import { SET_SELECTED_DASHBOARD, SET_SELECTED_TAB_INDEX } from "../type";

const initialState = {
    dashbordData: [],
    selectedDashboard: {},
    selectedTabIndex: 0
};



 const interfaceReducer = (state = {
    selectedDashboard: {}
  }, action) => {

    switch(action.type){
        case SET_SELECTED_DASHBOARD:
            let selectedStore = {
                selectedDashboard: action.payload
            }
            return selectedStore;
        default:
            return state;
    }
};

export default interfaceReducer;