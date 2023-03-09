
import { combineReducers } from "redux";

import interfaceReducer from "./interfaceReduser";
const rootReducer = combineReducers({
    interfaceData: interfaceReducer
});

export default rootReducer;