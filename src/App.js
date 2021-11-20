import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Header} from "./components/Header"
import { GlobalProvider } from './context/GlobalState';
import {Watchlist} from "./components/Watchlist"
import {Add} from "./components/Add"
import "./lib/font-awesome/css/all.min.css"


function App() {  
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path ="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
