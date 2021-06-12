import React, {useState, useEffect} from "react";
import Form from './components/Form'
import Confirmation from './components/Confirmation'

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
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaForm)



  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Form values={pizzaOrder}/>
      <Confirmation />
    </>
  );
};
export default App;
