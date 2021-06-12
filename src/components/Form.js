import React, {useState, UseEffect} from 'react';

export default function Form() {
    return (
        <form id='pizza-form'>
            <h2> Build Your Own Pizza! </h2>
            <div className='nameOnOrder'>
                <label>
                    Full Name:
                    <input id='name-input' name='name' type='text' placeholder="Who is placing this order?"/>
                </label>
            </div>
            <div className='sizeSelect'>
                <h3> Choice of Size </h3>    
                    <label> 
                    Size:
                        <select id='size-dropdown' name='size'>
                            <option>XS 8'</option>
                            <option>S 10'</option>
                            <option>M 12'</option>
                            <option>L 14'</option>
                            <option>XL 20'</option>
                        </select>
                    </label>
            </div>
            
            <div className='sauceSelect'>
                <h3>Choice of Sauce</h3>
                    <label> Tomato Sauce <input type='radio' name='sauce'/> </label>
                    <label> Garlic Alfredo <input type='radio' name='sauce'/> </label>
                    <label> Butter Parmesan <input type='radio' name='sauce'/> </label>
                    <label> Triple Cheese Cream <input type='radio' name='sauce'/> </label>
                    <label> Sundried Tomato Olive Oil <input type='radio' name='sauce'/> </label>
            </div>

            <div className='toppingsSelect'>
                <h3> Add Toppings</h3>
                    <p>Choose up to 10</p>

                    <label> pepperoni <input type='checkbox' name="toppings1"/> </label>
                    <label> italian sausage <input type='checkbox' name="toppings2"/> </label>
                    <label> bacon <input type='checkbox' name="toppings3"/> </label>
                    <label> mushrooms <input type='checkbox' name="toppings4"/> </label>
                    <label> black olives <input type='checkbox' name="toppings5"/> </label>
                    <label> bell peppers <input type='checkbox' name="toppings6"/> </label>
                    <label> red onion <input type='checkbox' name="toppings7"/> </label>
                    <label> feta cheese <input type='checkbox' name="toppings8"/> </label>
                    <label> extra mozzerella <input type='checkbox' name="toppings9"/> </label>
                    <label> spinach <input type='checkbox' name="toppings10"/> </label>
                    <label> grilled chicken <input type='checkbox' name="toppings11"/> </label>
                    <label> ham <input type='checkbox' name="toppings12"/> </label>
                    <label> pineapple <input type='checkbox' name="toppings13"/> </label>
                    <label> sardines <input type='checkbox' name="toppings14"/> </label>
            </div>

            <div>
                <h3>Special Instructions</h3>
                    <label>
                        <input id='special-text' name='special' type='text' placeholder="Anything else you'd like to add?" />
                    </label>
            </div>

            <button id='order-button'>Add to Order!!</button>
            
        </form>
    )
}