import React, {useState, UseEffect} from 'react';

export default function Form() {
    return (
        <form>
            <h2> Build Your Own Pizza! </h2>
            <div className='sizeSelect'>
                <h3> Choice of Size </h3>    
                    <label> 
                    Size:
                        <select name='size'>
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
                    <label> Tomato Sauce <input type='radio' name='tomato'/> </label>
                    <label> Garlic Alfredo <input type='radio' name='garlic'/> </label>
                    <label> Butter Parmesan <input type='radio' name='butter'/> </label>
                    <label> Triple Cheese Cream <input type='radio' name='triple'/> </label>
                    <label> Sundried Tomato Olive Oil <input type='radio' name='sundried'/> </label>
            </div>

            <div className='toppingsSelect'>
                <h3> Add Toppings</h3>
                    <p>Choose up to 10</p>

                    <label> pepperoni <input type='checkbox' /> </label>
                    <label> italian sausage <input type='checkbox' /> </label>
                    <label> bacon <input type='checkbox' /> </label>
                    <label> mushrooms <input type='checkbox' /> </label>
                    <label> black olives <input type='checkbox' /> </label>
                    <label> bell peppers <input type='checkbox' /> </label>
                    <label> red onion <input type='checkbox' /> </label>
                    <label> feta cheese <input type='checkbox' /> </label>
                    <label> extra mozzerella <input type='checkbox' /> </label>
                    <label> spinach <input type='checkbox' /> </label>
                    <label> grilled chicken <input type='checkbox' /> </label>
                    <label> ham <input type='checkbox' /> </label>
                    <label> pineapple <input type='checkbox' /> </label>
                    <label> sardines <input type='checkbox' /> </label>
            </div>

            <div>
                <h3>Special Instructions</h3>
                    <label>
                        <input type='text' placeholder="Anything else you'd like to add?" />
                    </label>
            </div>

            <button>Add to Order!!</button>
            
        </form>
    )
}