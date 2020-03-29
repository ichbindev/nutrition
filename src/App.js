import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NutritionLabel from "./components/NutritionLabel";
import sample from "./sample.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <NutritionLabel nutritionInfo={sample} />}/>
          <Route path="*" render={() => `Page not found`}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
