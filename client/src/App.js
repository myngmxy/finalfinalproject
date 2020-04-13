// import React , {useContext} from 'react';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Notes from './Components/Notes'
// import Login from './Components/Login';
// import Register from './Components/Register';
// import {BrowserRouter as Router, Route} from 'react-router-dom';


// function App() {

//   return (
//     <Router>
//       <Navbar/>
//       <Route exact path="/" component={ Home } />
//       <Route path ="/login" component={ Login } />
//       <Route path = "/register" component={ Register }/>
//       <Route path = "/notes" component = {Notes} />
//     </Router>
      
//   );
// }

// export default App;

import React from 'react';
import NavbarComp from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Notes from './Components/Todos';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import Profile from './Components/Profile';
import About from './Components/About';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/notes" roles={["user","admin"]} component={Notes}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/profile" roles={["user","admin"]} component={Profile}/>
      <Route path="/about" component={About}/>
    </Router>
  );
}

export default App;