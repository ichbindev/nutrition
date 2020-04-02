import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import sample from "./sample.json";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home nutritionInfo={sample} />}
          />
          <Route path="*" render={() => `Page not found`} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
