import React from 'react'




export default function PizzaForm(props){
    const {
        values,submit,change,disabled,errors,}=props
    
      const onSubmit=evt=>{
          evt.preventDefault()
          submit()
      }

      const onChange=evt=>{
          const{name, value,type,checked}=evt.target
          const valueToUse=type==='checkbox'?checked:value
          change(name, valueToUse)
      }

    return(
        
        <form id={'pizza-form'} onSubmit={onSubmit}>
        <div>
            <h1>Build your own Pizza</h1>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                
            </div>
            <label htmlFor='name-input'>Name:
            <input id='name-input' name='name'type='text' value={values.name} onChange={onChange}/>
            </label>
            <h3>Choice of Size</h3>
            <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
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
            checked={values.sauce==='original red'}
            onChange={onChange}/>
            
            </label>
            <label>Garlic Ranch
            <input 
            type='radio'
            name='sauce'
            value='Garlic Ranch'
            checked={values.sauce==='Garlic Ranch'}
            onChange={onChange}/>
            </label>
            <label>BBQ Sauce
            <input 
            type='radio'
            name='sauce'
            value='bbq sauce'
            checked={values.sauce==='bbq sauce'}
            onChange={onChange}/>
            </label>
            <label>Spinach Alfredo
            <input 
            type='radio'
            name='sauce'
            value='spinach alfredo'
            checked={values.sauce==='spinach alfredo'}
            onChange={onChange}/>
            </label>
            </div>

            <div>
                <h3>Add Toppings</h3>
                <p>Choose up to 6</p>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={values.pepperoni}
                    />
                </label>
                <label>Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    onChange={onChange}
                    checked={values.sausage}
                    />
                </label>
                <label>Canadian Bacon
                    <input
                    type='checkbox'
                    name='canadian'
                    onChange={onChange}
                    checked={values.canadian}
                    />
                </label>
                <label>Spicy Italian Sausage
                    <input
                    type='checkbox'
                    name='spicyItalian'
                    onChange={onChange}
                    checked={values.spicyItalian}
                    />
                </label>
                <label>Garlic Chicken
                    <input
                    type='checkbox'
                    name='garlic'
                    onChange={onChange}
                    checked={values.garlic}
                    />
                </label>

            </div>

            <div>
                <h3>Special Instructions</h3>
            <input id='special-text' name='special'type='text' value={values.special} onChange={onChange}/>
            </div>

            <button id='order-button' disabled={disabled}>Submit</button>
        </div>
        </form>
        
    )
}