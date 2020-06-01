import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import sample from "./sample.json";
import "./App.css";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Recipes from "./pages/Recipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import { ThemeContext, themes } from "./utilities/consts";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <Navbar />
        <Router>
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
            <Route
              exact
              path="/calculator/"
              render={() => <Calculator nutritionInfo={sample} />}
            />
            <Route path="*" render={() => `Page not found`} />
          </Switch>
        </Router>
        <Footer />
      </ThemeContext.Provider>
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
 * - decide or combine css, sass, stylized components
 * - animations
 * - the entire backend
 */
