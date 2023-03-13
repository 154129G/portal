import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

import userReducer  from "../store/reducers/userSlice";
import interfaceReducer from "./reducers/interfaceSlice";


const persistConfig = {
    key: 'root',
    storage: storage,
  };
  
  const rootReducer = combineReducers({
        user: userReducer,
        interface:interfaceReducer
  });
  
  const _persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: _persistedReducer,
});

export  const   persistor  = persistStore(store);

export default store;