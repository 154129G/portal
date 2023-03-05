import axios from "axios";

 //axios.defaults.baseURL = ''
 const AuthService ='http://localhost:4000'

 axios.interceptors.response.use(res => res, async error => {
    if(error.response.status === 401){
        const res =  await axios.post(AuthService + '/refreshToken', {}, {withCredentials: true});
        if(res.status == 200){
            console.log('tttttttttttttttt' ,res)
        }
    }
 });