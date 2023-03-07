
import { localStorage } from 'localStorage';
import axios  from 'axios';
import { API_URL } from './API';

let refresh = false;
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        const response = await axios.post(API_URL.Authentication.REFRESH_TOKEN, {}, {withCredentials: true});
        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response?.data?.accessToken}`;
            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});

export const httpPost= async (url, query, ignoreSession) => {
   
        console.log('url' , url ,query );
        let httpHeders ={}; 
        if(ignoreSession){
            httpHeders ={
                "Content-Type": "application/json",
                "Accept": "application/json",
              }
        }else{
            httpHeders ={
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('session-token')
              }
        }

        const data = await axios.post( url,
            query
        ,  {headers: httpHeders});

        return data;
    
}