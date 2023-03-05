import { React, useState } from 'react';
import { API_URL } from '../utility/API';
import axios  from 'axios';
import { useFormik } from 'formik'

import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import  VortexSpinner  from '../components/spiners/Vortex'
 
// import { useDispatch } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/*<Link color="inherit" href="https://material-ui.com/">*/}
      {/*  Your Website*/}
      {/*</Link>{' '}*/}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://solarapp-bucket.s3.us-east-2.amazonaws.com/unnamed.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const admin = 'defaoultAdmin';

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      parent: 'superadmin@webwheel.com',
      mobile: '',
      newPassword: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  async function onSignIN() {
    setIsLoading(true);
    try {
      const response = await axios.post( API_URL.Authentication.REGISTER_USER, formik.values );
      if(response){
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
    
    // dispatch({
    //   type: 'USER_LOGING',
    //   payload: logingData
    // })
  }
  return (
    <Grid container component="main" className={classes.root}>
      
      <CssBaseline />
      <Grid item xs={true} sm={6} md={7} className={classes.image} />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            {isLoading ? <VortexSpinner/>: null}
            <Grid container xs={12} spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  type="tel"
                  id="mobile"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid container xs={12} spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="newPassword"
                  label="New Password"
                  name="newPassword"
                  type="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              id={"submitButton"}
              onClick={onSignIN}
              fullWidth
              name={"submit"}
              variant="contained"
              color="primary"
              disabled={
                formik.values.email == "" ||
                formik.values.password == "" ||
                formik.values.newPassword == ""
              }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/*<Link href="#" variant="body2">*/}
                {/*  Forgot password?*/}
                {/*</Link>*/}
              </Grid>
              <Grid item>
                {/*<Link to="./signUp" variant="body2">*/}
                {/*  {"Don't have an account? Sign Up"}*/}
                {/*</Link>*/}
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

