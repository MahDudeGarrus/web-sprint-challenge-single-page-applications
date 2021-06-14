import React, {useState, UseEffect} from 'react';

export default function Form(props) {

    const {values, change, submit, disabled, errors} = props

    //helper for inputChanges function
    const changes = (event) => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    //helper for submit
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h1> Build Your Own Pizza! </h1>

            <div className='errors'>
                <div>{errors.nameOfCust}</div>
                {/* <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.special}</div> */}
            </div>

            {/* NAME INPUT */}
            <div className='nameOnOrder'>
                <label>
                    Full Name:
                    <input id='name-input' name='nameOfCust' type='text' placeholder="Who is placing this order?" value={values.nameOfCust} onChange={changes}/>
                </label>
            </div>

            {/* SIZE INPUT */}
            <div className='sizeSelect'>
                <h3> Choice of Size </h3>    
                    <label> 
                    Size:
                        <select id='size-dropdown' name='size' onChange={changes}>
                            <option value='XS'>XS 8'</option>
                            <option value='S'>S 10'</option>
                            <option value='M'>M 12'</option>
                            <option value='L'>L 14'</option>
                            <option value='XL'>XL 20'</option>
                        </select>
                    </label>
            </div>

            {/* SAUCE INPUT */}
            <div className='sauceSelect'>
                <h3>Choice of Sauce</h3>
                    <label> Tomato Sauce <input type='radio' name='sauce' value='tomato' onChange={changes}/> </label>
                    <label> Garlic Alfredo <input type='radio' name='sauce' value='garlic' onChange={changes}/> </label>
                    <label> Butter Parmesan <input type='radio' name='sauce' value='butter' onChange={changes}/> </label>
                    <label> Triple Cheese Cream <input type='radio' name='sauce' value='triple' onChange={changes}/> </label>
                    <label> Sundried Tomato Olive Oil <input type='radio' name='sauce' value='sundried' onChange={changes}/> </label>
            </div>

            {/* TOPPINGS INPUT */}
            <div className='toppingsSelect'>
                <h3> Add Toppings</h3>
                    <p>Choose up to 10</p>

                    <label> pepperoni <input type='checkbox' name="toppings1" onChange={changes} className='toppingsChoice'/> </label>
                    <label> italian sausage <input type='checkbox' name="toppings2" onChange={changes} className='toppingsChoice'/> </label>
                    <label> bacon <input type='checkbox' name="toppings3" onChange={changes} className='toppingsChoice'/> </label>
                    <label> mushrooms <input type='checkbox' name="toppings4" onChange={changes} className='toppingsChoice'/> </label>
                    <label> black olives <input type='checkbox' name="toppings5" onChange={changes} className='toppingsChoice'/> </label>
                    <label> bell peppers <input type='checkbox' name="toppings6" onChange={changes} className='toppingsChoice'/> </label>
                    <label> red onion <input type='checkbox' name="toppings7" onChange={changes} className='toppingsChoice'/> </label>
                    <label> feta cheese <input type='checkbox' name="toppings8"  onChange={changes} className='toppingsChoice'/> </label>
                    <label> extra mozzerella <input type='checkbox' name="toppings9" onChange={changes} className='toppingsChoice'/> </label>
                    <label> spinach <input type='checkbox' name="toppings10" onChange={changes} className='toppingsChoice'/> </label>
                    <label> grilled chicken <input type='checkbox' name="toppings11" onChange={changes} className='toppingsChoice'/> </label>
                    <label> ham <input type='checkbox' name="toppings12" onChange={changes} className='toppingsChoice'/> </label>
                    <label> pineapple <input type='checkbox' name="toppings13" onChange={changes} className='toppingsChoice'/> </label>
                    <label> sardines <input type='checkbox' name="toppings14" onChange={changes} className='toppingsChoice'/> </label>
            </div>

            {/* SPECIAL INPUT */}
            <div>
                <h3>Special Instructions</h3>
                    <label>
                        <input id='special-text' name='special' type='text' placeholder="Anything else you'd like to add?" onChange={changes} />
                    </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button disabled={disabled} type='submit' id='order-button'>Add to Order!!</button>       
        </form>
    )
}