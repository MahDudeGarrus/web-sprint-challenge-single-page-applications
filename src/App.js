//imports
import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";

//component imports
import Form from './components/Form'
import Confirmation from './components/Confirmation'
import Home from './components/Home'



// initial values given to form
const initialPizzaForm = {
  name: '',
  size: '',
  sauce: '',
  toppings: false,
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



  return (
    <>
    <nav>
      <h1>Lambda Eats</h1>
        <li>
          <Link to="/form">Order Here</Link>
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

      <Route path="/form">
        <Form values={pizzaOrder}/>
      </Route>
      
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      
    </>
  );
};
export default App;
