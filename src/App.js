import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import sample from "./sample.json";
import "./App.css";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home nutritionInfo={sample} />}/>
          <Route path="*" render={() => `Page not found`}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
