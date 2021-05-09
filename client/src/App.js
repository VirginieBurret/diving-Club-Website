import Home from './Pages/home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
           <Switch>
    
           <Route exact path="/">  <Home /> </Route>
           <Route path="/login">  <Login /> </Route>
           <Route path="/register"> <Register /> </Route>
           <Route path="/profile/:username">  <Profile /> </Route>

           </Switch>
         

      </Router>
     
    </div>
  );
}

export default App;
