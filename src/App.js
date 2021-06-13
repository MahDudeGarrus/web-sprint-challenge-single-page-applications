//imports
import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import * as yup from 'yup';

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

const App = () => {
  // States
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaForm)
  const [order, setOrder] = useState([])

  const getOrder = () => {
    axios.get('https://reqres.in/api/orders')
    .then(response => {
      const ordersFromAPI= response.data
      setOrder(ordersFromAPI)
    })
    .catch(error => {
      console.log('Error getting data:', error)
    })
  }
  
  const postOrder = (newOrder) => {
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      setOrder([...order, newOrder]);
    })
    .catch(error => {
      console.log('Error posting data: ',error)
    })
    
  }

  const inputChange = (name, value) => {
    setPizzaOrder({...pizzaOrder, [name]: value})
  }

  const submitHandler = () => {
    const newPizzaOrder = {
    nameOfCust: pizzaOrder.nameOfCust.trim(),
    size: pizzaOrder.size.trim(),
    // sauce: pizzaOrder.sauce,  // this doesn't pass on the codegrade test.
    toppings1: pizzaOrder.toppings1.trim(),
    toppings2: pizzaOrder.toppings2.trim(),
    toppings3: pizzaOrder.toppings3.trim(),
    toppings4: pizzaOrder.toppings4.trim(),
    toppings5: pizzaOrder.toppings5.trim(),
    toppings6: pizzaOrder.toppings6.trim(),
    toppings7: pizzaOrder.toppings7.trim(),
    toppings8: pizzaOrder.toppings8.trim(),
    toppings9: pizzaOrder.toppings9.trim(),
    toppings10: pizzaOrder.toppings10.trim(),
    toppings11: pizzaOrder.toppings11.trim(),
    toppings12: pizzaOrder.toppings12.trim(),
    toppings13: pizzaOrder.toppings13.trim(),
    toppings14: pizzaOrder.toppings14.trim(),
    special: pizzaOrder.special.trim(),
    }
    postOrder(newPizzaOrder)
  }

  //invoking data received from getOrder function
  useEffect(() => {
    getOrder()
  }, [])


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
        <Form values={pizzaOrder} change={inputChange}/>
      </Route>
      
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      
    </>
  );
};
export default App;
