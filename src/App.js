import React from 'react';
import Utama from './components/Utama';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Notifikasi from './components/Notifikasi';
import Postkosong from './components/Postkosong';
import Postbaru from './components/Postbaru';
import Profile from './components/Profile';
import UpdateStatus from './components/UpdateStatus';
import Editprofil from './components/Editprofil';
import Profilteman from './components/Profilteman';
import Register from './components/Register';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
             <Link to="/"></Link>
             <Link to="/homepage"></Link>
             <Link to="/notifikasi"></Link>
             <Link to="/postkosong"></Link>
             <Link to="/postbaru"></Link>
             <Link to="/profile"></Link>
             <Link to="/editprofile"></Link>
        </ul>   
      </nav>
        <Switch>
          <Route exact path="/">
              <Utama />
          </Route>
          <Route path="/homepage">
              <Homepage />
          </Route>
          <Route path="/notifikasi">
              <Notifikasi />
          </Route>
          <Route path="/postkosong">
              <Postkosong />
          </Route>
          <Route path="/postbaru">
              <Postbaru />
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/editprofil">
              <Editprofil />
          </Route>
          <Route path="/profilteman">
              <Profilteman />
          </Route>
          <Route path="/navbar">
              <Navbar />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route>404 Not Found</Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
