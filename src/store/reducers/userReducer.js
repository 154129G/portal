import * as userTypes from '../actions-types/userTpes'

const initialState = {
    userAuthData: {},
    isLoding: false
};


const userReducer = (state = initialState , action) => {
    switch (action.type){
        case userTypes.GET_CUSTOMER_CONFIG_DATA:
            return {
                ...state,
                user: action.payload,
                isLoding: false
            }

        default:
            return state
    }
}

export default userReducer;
