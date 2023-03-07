import { configureStore} from "@reduxjs/toolkit";
import userReducer  from "../store/reducers/userSlice";
import interfaceReducer from "./reducers/interfaceReduser";

export const store = configureStore({
    reducer:{
        user: userReducer,
        interfaceData: interfaceReducer
    }
})
