import React, { useState, useEffect, lazy, Suspense } from "react";
import { Grid, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const MainDashboard = (props) => {
  const { 
    tabsData
  } = props;
  const [selectedTabs, setSelectedTabs] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('sdadadad',newValue);
    setValue(newValue);
  };
  return (
    <Grid>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {tabsData && tabsData.map((tab , index)=>{
           return(<Tab label={tab?.tabName} key={index} style= {{fontWeight: '600'}}/>) 
        })}
      </Tabs>
      
      <h1>Main Dashboard</h1>
    </Grid>
  );
};

export default MainDashboard;
