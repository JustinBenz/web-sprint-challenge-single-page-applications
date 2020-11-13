import React,{ useState } from "react";
import { Link, Route, Switch } from "react-router-dom"
import '../App.css'
import Form from './Form'

const initialUserInput = {
  name: "",
  size: 0,
  sauce: "",
  toppings: "",
  special: "",
}

const initialPizzas = [];

const App = () => {
  const[pizzas, setPizzas] = useState(initialPizzas)
  const[userInput, setUserInput] = useState(initialUserInput)
  const changeFunc = (name, value) => {
    setUserInput({...userInput,[name]: value});
  }

  const submitFunc = () => {
  
  }

  return (
    <>
    <div className="header">
    <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </nav>
    </div>
    <Switch>
      <Route path="/pizza">
        <Form input={userInput} submit={submitFunc} change={changeFunc}/>
      </Route>
      <Route path="/" render={() => 
      <div className="banner">
        <h1>Your favorite food, delivered</h1>
        <Link to="/pizza">Pizza?</Link>
      </div>
      }>    
      </Route>
    </Switch>
    </>
  );
};
export default App;
