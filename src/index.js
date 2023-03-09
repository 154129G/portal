import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme , responsiveFontSizes , unstable_createMuiStrictModeTheme  } from '@mui/material/styles';

import store from './store/store';
import  { Provider }  from "react-redux"
import '../src/utility/interceptors'

let theme = createTheme();
theme = unstable_createMuiStrictModeTheme();
theme = responsiveFontSizes(theme);
theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#010440',
    },
    secondary: {
      main: '#2D3340',
    },
    background: {
      paper: '#dce2ea',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store ={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
