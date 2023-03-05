import { React , useState  } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const user = useSelector((state) => state.user);
    console.log('token' , user);
    let auth = {'token': true}
    return(
        auth.token 
                    ?
                    <Outlet/>
                    : 
                    <Navigate  to="/" /> 
    )
}

export default PrivateRoute;
