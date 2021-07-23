import React, {useState, useEffect} from 'react'
import {Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import PizzaForm from "./PizzaForm";
import schema from './Schema'
import {reach} from 'yup'
import axios from 'axios'

const initialFormValues={
  name:'',
  size:'',
  // sauce:'',
  pepperoni:false,
  sausage:false,
  canadian:false,
  spicyItalian:false,
  garlic:false,
  special:'',
}
const initialErrors={
  name:'',
  size:'',
  sauce:'',
  
}
const initialorder=[]
const initialDisabled=true
const App = () => {
  const [order, setOrder]=useState(initialorder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder=testOrder=>{
    axios.post('https://reqres.in/api/orders', testOrder)
    .then(res=>{
      setOrder([res.data, ...order])
    })
    .catch(err=>{
        alert(err)
    })
    .finally(()=>{
        setFormValues(initialFormValues)
    })
}

const validate = (name, value) => {
  reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
        
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

const formSubmit=()=>{
  const newOrder={
      name:formValues.name.trim(),
      size:formValues.size.trim(),
      // sauce:formValues.sauce.trim(),
      pepperoni:formValues.pepperoni,
      sausage:formValues.sausage,
      canadian:formValues.canadian,
      spicyItalian:formValues.spicyItalian,
      garlic:formValues.garlic,
      special:formValues.special.trim()
      
  }
  postNewOrder(newOrder)
}

useEffect(() => {
 
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <Switch>
      <Route path='/pizza'>
        <PizzaForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}/>
      </Route>
      <Route path='/'>  
      <h1>Lambda Eats</h1>
     <HomePage/>
      </Route>
      
    </Switch>
  );
};
export default App;
