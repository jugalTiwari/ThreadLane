import React from "react";
import {Route} from 'react-router-dom'
import Login from './js/views/Login';
import './App.scss';
import Consultancy from "./js/views/Consultancy";

function App() {
  return (
    <div className="App">
      <Route component={Consultancy} path='/' />
    </div>
  );
}

export default App;
