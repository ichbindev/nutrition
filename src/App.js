import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import sample from "./sample.json";
import "./App.css";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Recipes from "./pages/Recipes";
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
          <Route
            exact
            path="/log/"
            render={() => <Log nutritionInfo={sample} />}
          />
          <Route
            exact
            path="/recipes/"
            render={() => <Recipes nutritionInfo={sample} />}
          />
          <Route path="*" render={() => `Page not found`} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/** 
 * TODO: 
 * - Dark Mode option
 * - User management
 * - Logging schema
 * - User input component
 * - User statistics page
 * - Serving unit conversion
 * - Allow user to create recipes from multiple ingredients
 */