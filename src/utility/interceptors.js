import axios from "axios";
import { API_URL } from "../utility/API";
//axios.defaults.baseURL = ''
const AuthService = "http://localhost:4000";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      const res = await axios.post(
        AuthService + "/refreshToken",
        {},
        { withCredentials: true }
      );
      if (res.status == 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response?.data?.accessToken}`;
        const userResponce = await axios.post(
          API_URL.Authentication.GET_USER_BY_EMAIL,
          logingData
        );
        console.log("userResponce", userResponce);
        if (userResponce.data.user.email === email) {
          localStorage.setItem("session-token", response?.data?.accessToken);
          navigate("/home");
        }
      }
    }
  }
);
