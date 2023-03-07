import './App.css';
import { BrowserRouter as Router ,  Route  , Routes } from 'react-router-dom';


import SignUp  from './pages/signUp'
import SignIn from './pages/signIn.js'
import Home  from './pages/home'
import Landing from './pages/landing'
import OwnShopPage from './pages/OwnShopPage'
import NotFound from './pages/notFound'

import PrivateRoute from './utility/privetRoutes'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/publish' element={<OwnShopPage/>} /> 
          <Route path='/' element={<Landing/>} />
          <Route path='/404' element={<NotFound/>} />
          <Route element={<PrivateRoute/>}>
              <Route path='/home' element={<Home/>} />
              <Route path='/setings' element={<Home/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
