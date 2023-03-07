import React, { useState, useEffect }  from 'react';


import MainDashboard from './MainDashboard';
import DocumentationDashboard from "./DocumentationDashboard";
import StaticDashboard from "./StaticDashboard";
import DynamicDashboard from "./DynamicDashbord";
import TabsBar from '../../components/common/TabsBar';

import { Grid } from '@material-ui/core';


const DashBoardLayOut = () =>{
   const [selectedDashboardCode ,setSelectedDashboardCode] = useState("");
   useEffect(()=>{
    setSelectedDashboardCode("MAIN")
   },[]);
    return(
        <Grid>
         <TabsBar/>
         {selectedDashboardCode == "MAIN" ?  <MainDashboard/>: null }
         {selectedDashboardCode == "DOCS" ?  <DocumentationDashboard/>: null }
         {selectedDashboardCode == "STATIC" ?  <StaticDashboard/>: null }
         {selectedDashboardCode == "DYNAMIC" ?  <DynamicDashboard/>: null }
        </Grid>
    );
}

export default DashBoardLayOut;