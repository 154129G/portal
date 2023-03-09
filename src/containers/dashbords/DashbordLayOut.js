import React, { useState, useEffect, lazy, Suspense  }  from 'react';
import { BrowserRouter as Router ,  Route  , Routes , useNavigate} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'


import { Grid } from '@material-ui/core';
import ErrorFallback from '../../pages/errorBoundry';

const MainDashboard = lazy(()=> import('./MainDashboard'));
const DocumentationDashboard = lazy(()=> import('./DocumentationDashboard'));
const StaticDashboard = lazy(()=> import('./StaticDashboard'));
const DynamicDashboard = lazy(()=> import('./StaticDashboard'));

const DashBoardLayOut = (props) =>{
    const { 
        dashboardData 
    }  = props;

    const navigate = useNavigate();

   const [selectedDashboardCode ,setSelectedDashboardCode] = useState("");
  

   useEffect(()=>{
    setSelectedDashboardCode(dashboardData?.dashboardCode);
   },[dashboardData]);

   const route =(path)=>{
    navigate(`/${path}`);
   }
    return(
        <Grid>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset= {()=>{}}>
            <Suspense fallback = {<div>Loading....</div>}>
            {selectedDashboardCode == "MAIN" ?  <MainDashboard tabsData = {dashboardData?.tabs}/>: null }
            {selectedDashboardCode == "DOCS" ?  <DocumentationDashboard/>: null }
            {selectedDashboardCode == "STATIC" ?  <StaticDashboard/>: null }
            {selectedDashboardCode == "DYNAMIC" ?  <DynamicDashboard/>: null }
            </Suspense>
            </ErrorBoundary>
        </Grid>
       
    );
}

export default DashBoardLayOut;