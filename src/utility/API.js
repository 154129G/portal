
const AuthService ='http://localhost:4000'


export const API_URL ={
    Authentication:{
        Loging: AuthService + '/users/login',
        REGISTER_USER: AuthService + '/users/register',
        GET_USER_BY_EMAIL :  AuthService +  '/users/getUserByEmail',
        REFRESH_TOKEN:  AuthService + '/users/refreshToken',
    }
    
}






