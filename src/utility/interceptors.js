import axios from "axios";
import { API_URL } from "../utility/API";
import localStorage from 'localStorage';
//axios.defaults.baseURL = ''
const AuthService = "http://localhost:4000";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
    //   const res = await axios.post(
    //     AuthService + "/refreshToken",
    //     {},
    //     { withCredentials: true }
    //   );
    //   console.log('res?.data?.accessToken', res); 
    //   debugger
    //   if (res.status == 200) {
    //     axios.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${res?.data?.accessToken}`;
       
    //       localStorage.setItem("session-token", res?.data?.accessToken);
         
    //   }
    }
  }
);
