import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ArtProvider from './context/ArtProvider';
import './css/PhoneVersion.css';
import './css/MediumVersion.css';

function App() {
  return (
    <ArtProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </ArtProvider>
  );
}

export default App;
