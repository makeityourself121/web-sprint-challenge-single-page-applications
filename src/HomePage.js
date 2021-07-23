import React from 'react'
import { useHistory } from 'react-router-dom'

import Pizza from './Pizza.jpg'
import './App.css'


export default function HomePage(props){
    const history=useHistory()
    const routeToPizza=()=>{
        history.push('/pizza')
    }

    return(
        <div>
           <img className={'pizzaImg'} src={Pizza} alt={'pizza'}/>
           <button onClick={routeToPizza}
                    id='order-pizza'>Order Pizza?</button>
        </div>
    )
}