import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ArtProvider from './context/ArtProvider';
import Login from './Pages/Login';

function App() {
  return (
    <ArtProvider>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </ArtProvider>
  );
}

export default App;
