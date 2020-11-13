import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import '../App.css'
import Form from './Form'

const App = () => {
  return (


    <Switch>
      <div className="header">
        <h1>Lambda Eats</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/help">Help</Link>
          </nav>
      </div>
      <Route path="/pizza">
        <Form />
      </Route>
      <Route path="/">
      </Route>
    </Switch>

  );
};
export default App;
