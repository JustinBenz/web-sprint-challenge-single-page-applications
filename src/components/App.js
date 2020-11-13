import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import '../App.css'
import Form from './Form'
const App = () => {
  return (
    <>
    <div className="header">
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/help">Help</Link>
      </nav>
    </div>
    <div className="banner">
      <h2>Your favorite food, delivered while coding</h2>
      <Link to="/pizza">Pizza?</Link>
    </div>
    <Switch>
      <Route exact path="/"/>
      <Route path="/pizza" component={Form}/>
    </Switch>
    </>
  );
};
export default App;
