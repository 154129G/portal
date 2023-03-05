import { React, useState } from "react";
import { httpPost } from "../utility/http";
import { API_URL } from "../utility/API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import localStorage from "localStorage";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import image from "../assets/img/08.png";
import VortexSpinner from "../components/spiners/Vortex";

import { setUser } from "../store/reducers/userSlice";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://solarapp-bucket.s3.us-east-2.amazonaws.com/unnamed.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    margingTop: "150px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSignIN(e) {
    e.preventDefault();
    const logingData = {
      email: email,
      password: password,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        API_URL.Authentication.Loging,
        logingData,
        { withCredentials: true }
      );
      setIsLoading(false);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.accessToken}`;
      const userResponce = await axios.post(
        API_URL.Authentication.GET_USER_BY_EMAIL,
        logingData
      );
      if (userResponce.data.user.email === email) {
        localStorage.setItem("user-details", userResponce.data.user.email);
        localStorage.setItem("session-token", response?.data?.accessToken);
        navigate("/home");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <Grid container component="main" className={classes.root}>
      {isLoading ? <VortexSpinner /> : null}
      <CssBaseline />
      <Grid item xs={false} sm={6} md={7} s>
        <img
          src={image}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ExitToAppIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={onSignIN}
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="/" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                {/* <Link to="./signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
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
