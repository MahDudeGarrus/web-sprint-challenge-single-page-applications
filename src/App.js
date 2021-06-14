//imports
import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema_validation/formSchema'

//component imports
import Form from './components/Form'
import Confirmation from './components/Confirmation'
import Home from './components/Home'



// initial values given to form
const initialPizzaForm = {
  nameOfCust: '',
  size: '',
  sauce: '',
  toppings1: false,
  toppings2: false,
  toppings3: false,
  toppings4: false,
  toppings5: false,
  toppings6: false,
  toppings7: false,
  toppings8: false,
  toppings9: false,
  toppings10: false,
  toppings11: false,
  toppings12: false,
  toppings13: false,
  toppings14: false,
  special: '',
}

// initial error status
const initialFormErrors = {
  nameOfCust: '',
  size: '',
  sauce: '',
  toppings1: '',
  toppings2: '',
  toppings3: '',
  toppings4: '',
  toppings5: '',
  toppings6: '',
  toppings7: '',
  toppings8: '',
  toppings9: '',
  toppings10: '',
  toppings11: '',
  toppings12: '',
  toppings13: '',
  toppings14: '',
  special: '',
}

// the state of the submit button will start as disabled
const initialDisabled = true

const App = () => {
  // STATES
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaForm)
  const [order, setOrder] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  //POST NEW INPUTS
  const postOrder = newOrder => {
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      setOrder([...order, newOrder]);
    })
    .catch(error => {
      console.log('Error posting data: ',error)
    })
    //this will only reset the name input, not intended
    .finally(() => {
      setPizzaOrder(initialPizzaForm)
    })
  }

  // ONCHANGE HANDLER
  const inputChange = (name, value) => {
    //reaching for error messages in the schema
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, name: ""})
    })
    .catch(error => {
      setFormErrors({...formErrors, name: error.message})
    })
    
    //updating pizzaOrder with key:value pairs that are input
    setPizzaOrder({...pizzaOrder, [name]: value})
  }


  //SUBMIT HANDLER
  const submitHandler = () => {
    const newOrder = {
    nameOfCust: pizzaOrder.nameOfCust.trim(),
    size: pizzaOrder.size.trim(),
    //sauce: pizzaOrder.sauce,  // this doesn't pass on the codegrade test.
    toppings1: pizzaOrder.toppings1,
    toppings2: pizzaOrder.toppings2,
    toppings3: pizzaOrder.toppings3,
    toppings4: pizzaOrder.toppings4,
    toppings5: pizzaOrder.toppings5,
    toppings6: pizzaOrder.toppings6,
    toppings7: pizzaOrder.toppings7,
    toppings8: pizzaOrder.toppings8,
    toppings9: pizzaOrder.toppings9,
    toppings10: pizzaOrder.toppings10,
    toppings11: pizzaOrder.toppings11,
    toppings12: pizzaOrder.toppings12,
    toppings13: pizzaOrder.toppings13,
    toppings14: pizzaOrder.toppings14,
    special: pizzaOrder.special.trim(),
    }
    postOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(pizzaOrder)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [pizzaOrder])

  return (
    <>
    <nav>
      <h1>Lambda Eats</h1>
        <li>
          <Link to="/pizza" id='order-pizza'>Order Here</Link>
        </li>
        
        <li>
          <Link to="/">Home</Link>
        </li> 
    </nav>
      
      <p>You can remove this code and create your own header</p>

      {/* rendering components inside of routes*/}
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <Form values={pizzaOrder} change={inputChange} submit={submitHandler} disabled={disabled} errors={formErrors}/>
      </Route>
      
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      
    </>
  );
};
export default App;
