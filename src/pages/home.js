import React, { useState, useEffect }  from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { API_URL } from '../utility/API';
import axios  from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import  logo from '../assets/img/car.png';
import  logo01 from '../assets/img/logo.png';
//import  logo from '../assets/logo01.jpg';
import Dashboard  from '../assets/icons/dashboard.png';
import Templates  from '../assets/icons/template.png';
import { Scrollbars } from 'react-custom-scrollbars';

import DashBoardLayOut from '../containers/dashbords/DashbordLayOut';
import Setings from '../components/setings'
import Avatar from '../components/avatar';
import AvatarComponent from '../components/avatar';

import { removeUser } from '../store/reducers/userSlice';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
 
  const userObject = useSelector(store=>store?.user?.user);
  const [ dashboardData, setDashboardData ] = React.useState([
    { dashboardCode: "MAIN", dashboardName : "Dashboard" , wireframeName: "MainDashboard", permissionCode: 1000,
      icon:<img src={Dashboard}  height={35} width={35}/>, 
      tabs: [ {index: 0 , tabName: 'Tab 01' , wireframeName: 'tab01', permissionCode: 1001},
              {index: 1 , tabName: 'Tab 02' , wireframeName: 'tab02', permissionCode: 1002},
              {index: 2 , tabName: 'Tab 03' , wireframeName: 'tab03', permissionCode: 1003},
              {index: 3 , tabName: 'Tab 04' , wireframeName: 'tab04', permissionCode: 1004}
    ]
   },
   { dashboardCode: "STATIC", dashboardName : "Template" , wireframeName: "MainDashboard", permissionCode: 1000,
      icon: <img src={Templates}  height={35} width={35}/>,
      tabs: [ {index: 0 , tabName: 'Tab T 01' , wireframeName: 'tab01', permissionCode: 1001},
              {index: 1 , tabName: 'Tab T 02' , wireframeName: 'tab02', permissionCode: 1002},
              {index: 2 , tabName: 'Tab T 03' , wireframeName: 'tab03', permissionCode: 1003},
              {index: 3 , tabName: 'Tab T 04' , wireframeName: 'tab04', permissionCode: 1004}
    ]
   }
  ]);
  const [open, setOpen] = React.useState(true);
  const [userDetails, setUserDetails] = React.useState(true);
  const [ openLogOut, setOpenLogOut ] = React.useState(false);
  const [ selectedDashboardData, setSelectedDashboardData ] = React.useState({});

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setSelectedDashboardData(dashboardData[0])
    const userEmail = localStorage.getItem('user-details');
    getUserData()
   
  }, []);

  const  getUserData = async () =>{
    const user = localStorage.getItem('user-details');
    // const token = localStorage.getItem('session-token');
    // const userResponce =  await axios.post( API_URL.Authentication.GET_USER_BY_EMAIL,{email: userEmail});
    const name = `Hi  ${ userObject?.firstName}`;
    setUserDetails(name);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    setOpenLogOut(true);
    dispatch(removeUser())
  };
  const handleDashboard = (data) => {
    setSelectedDashboardData(data);
    // dispatch({
    //   type: SET_SELECTED_DASHBOARD,
    //   payload: data
    // })
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpenLogOut(false);
  };

  const handleSignOut = () => {
    localStorage.setItem('user-details', '');
    localStorage.setItem('session-token', '');
    navigate('/');
    setOpenLogOut(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{marginLeft: -19}}
            sx={{
              marginRight: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <img src={logo} alt="BigCo Inc. logo" height={50} width={50}/>
          </IconButton>
          <Grid  xs={12} sm={8} md={8} lg={8}>
          <Typography variant="h6"style={{ marginLeft:15}} noWrap component="div">
            Mini variant drawer
          </Typography>
          </Grid>
          <Grid  xs={12} sm={2} md={2} lg={2}>
          <Typography variant="sub-title">
           {userDetails}
          </Typography>
          </Grid>
          <Grid  container spacing={2} xs={12} sm={2} md={2} lg={2}>
          <Grid  item   xs={12} sm={10} md={10} lg={10}>
          <AvatarComponent style={{marginRight:20}}/>
          </Grid>
          <Grid  item  xs={12} sm={1} md={1} lg={1} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleLogOut}
            edge="start"
            alignItems = 'right'
            style={{marginRight: 10}}
          >
            <ExitToAppIcon fontSize='large'/>
          </IconButton>
          </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader style={{position: 'filxed'}}>
          <img src={logo01} alt="BigCo Inc. logo" height={50} width={50} style={{float: 'left', marginLeft:0}} />
          {  open == true ? <Typography  variant="h6" style={{ marginRight:40 ,marginTop:5, marginLeft:0 , fontWeight: 700 , color: '#010440'}}  noWrap component="div">
               eb wheel
                </Typography>:null
            }
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Scrollbars 
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMax={600}
        style={{ width:"100%", height: '100% '}}>
        <List style = {{marginTop: 15}}>
          {dashboardData.map((data, index) => (
            <ListItem key={data.dashboardName} disablePadding sx={{ display: 'block' }} onClick = {()=>{handleDashboard(data)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.dashboardName} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Scrollbars>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <DashBoardLayOut  dashboardData={selectedDashboardData}/>
      </Box>
      <Dialog
        open={openLogOut}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Log out..."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to sign out ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignOut}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
