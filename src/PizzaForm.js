import React, {useState} from 'react'
import { useRouteMatch} from 'react-router-dom'
import schema from './Schema'
import {reach} from 'yup'
import axios from 'axios'
const initialFormValues={
    name:'',
    size:'',
    sauce:'',
    topping:'',
    special:'',
}
const initialErrors={
    name:'',
    size:'',
    sauce:'',
    topping:'',
}
export default function PizzaForm(props){
    const {url}=useRouteMatch()
    const [order, setOrder]=useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialErrors)

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
              sauce:formValues.sauce.trim(),
              topping:formValues.topping.trim(),
              special:formValues.special.trim()
          }
          postNewOrder(newOrder)
      }
      
      const postNewOrder=newOrder=>{
          axios.post('https://reqres.in/api/orders', newOrder)
          .then(res=>{
            setOrder(res.data)
          })
          .catch(err=>{
              alert(err)
          })
          .finally(()=>{
              setFormValues(initialFormValues)
          })
      }
      const onSubmit=evt=>{
          evt.preventDefault()
          formSubmit()
      }

      const onChange=evt=>{
          const{name, value,type,checked}=evt.target
          const valueToUse=type==='checkbox'?checked:value
          inputChange(name, valueToUse)
      }

    return(
        
        <form id={'pizza-form'} onSubmit={onSubmit}>
        <div>
            <h1>Build your own Pizza</h1>
            <label htmlFor='name-input'>Name:
            <input id='name-input' name='name'type='text' onChange={onChange}/>
            </label>
            <h3>Choice of Size</h3>
            <select id='size-dropdown' name='size' onChange={onChange}>
                <option value=''>Select</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
            
            <div className='Sauce'>
                <h3>Choice of Sauce</h3>
            <label>Original Red
            <input 
            type='radio'
            name='sauce'
            value='original red'
            onChange={onChange}/>
            
            </label>
            <label>Garlic Ranch
            <input 
            type='radio'
            name='sauce'
            value='Garlic Ranch'
            onChange={onChange}/>
            </label>
            <label>BBQ Sauce
            <input 
            type='radio'
            name='sauce'
            value='bbq sauce'
            onChange={onChange}/>
            </label>
            <label>Spinach Alfredo
            <input 
            type='radio'
            name='sauce'
            value='spinach alfredo'
            onChange={onChange}/>
            </label>
            </div>

            <div>
                <h3>Add Toppings</h3>
                <p>Choose up to 6</p>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='topping'
                    />
                </label>
                <label>Sausage
                    <input
                    type='checkbox'
                    name='topping'
                    onChange={onChange}
                    />
                </label>
                <label>Canadian Bacon
                    <input
                    type='checkbox'
                    name='topping'
                    onChange={onChange}
                    />
                </label>
                <label>Spicy Italian Sausage
                    <input
                    type='checkbox'
                    name='topping'
                    onChange={onChange}
                    />
                </label>
                <label>Garlic Chicken
                    <input
                    type='checkbox'
                    name='topping'
                    
                    />
                </label>

            </div>

            <div>
                <h3>Special Instructions</h3>
            <input id='special-text' name='special'type='text'/>
            </div>

            <button>Submit</button>
        </div>
        </form>
        
    )
}