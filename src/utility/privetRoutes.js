import { React , useState  } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import localStorage from 'localStorage';
const PrivateRoute = () => {
    let auth = false;
    const sessionToken = localStorage.getItem("session-token");
    sessionToken === '' ?auth = false :  auth = true
    return( 
        auth
                    ?
                    <Outlet/>
                    : 
                    <Navigate  to="/sign-in" /> 
    )
}

export default PrivateRoute;
