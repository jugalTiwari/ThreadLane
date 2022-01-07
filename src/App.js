import React from "react";
import {Route} from 'react-router-dom'
import './App.scss';
import Consultancy from "./js/views/Consultancy";
import Profile from "./js/views/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Route component={Profile} path='/' />
    </div>
  );
}

export default App;
