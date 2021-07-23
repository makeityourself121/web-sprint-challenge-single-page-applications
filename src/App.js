import React from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import PizzaForm from "./PizzaForm";
const App = () => {

  
  return (
    <Switch>
      <Route path='/pizza'>
        <PizzaForm />
      </Route>
      <Route path='/'>  
      <h1>Lambda Eats</h1>
     <HomePage/>
      </Route>
      
    </Switch>
  );
};
export default App;
