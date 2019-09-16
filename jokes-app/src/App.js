import React from 'react';
import { Route } from "react-router-dom";

// styles
import './App.css';
import Jokes from "./components/Jokes";

// components
import Login from "./components/Login"

function App() {
  return (

    <div className="App">
    <Route path="/jokes" component={Jokes}/>
    <Login/>

    </div>
  );
}

export default App;