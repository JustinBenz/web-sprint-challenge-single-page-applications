import React from "react"
import '../App.css'

export default function Form (props) {
    const { input, submit, change} = props;

    const changeHandle = (evt) => {
        const { name, value, type, checked } = evt.target;
        const inputToUse = type === "checkbox" ? checked : value;
        change(name, inputToUse);
    };

    const submitHandle = (evt) => {
        evt.preventDefault();
        submit();
    }
    return(
        <>
        <div className="formCover">
            <form className="form">
                <h1>Name and Size</h1>
                <input type="text" name="name" onChange={changeHandle} value={input.name} placeholder="Name..."></input>
                <select name="size" onChange={changeHandle} value={input.size}>
                    <option value={0}>----</option>
                    <option name="Small" value={1}>Small</option>
                    <option name="Medium"value={2}>Medium</option>
                    <option name="Large" value={3}>Large</option>
                </select>
                <h1>Sauce</h1>
                <label>
                    OG Red
                    <input name="sauce" onChange={changeHandle} checked={input.sauce} type="checkbox" ></input>
                </label>
                <label>
                    Garlic Ranch
                    <input name="sauce" onChange={changeHandle} checked={input.sauce} type="checkbox"></input>
                </label>
                <label>
                    BBQ Sauce
                    <input name="sauce" onChange={changeHandle} checked={input.sauce} type="checkbox"></input>
                </label>
                <label>
                    Spinach Alfredo
                    <input name="sauce" onChange={changeHandle} checked={input.sauce} type="checkbox"></input>
                </label>
                <h1>Toppings</h1>
                <label>
                    Pepperoni
                    <input name="toppings" onChange={changeHandle} checked={input.toppings} type="checkbox"></input>
                </label>
                <label>
                    Olives
                    <input name="toppings" onChange={changeHandle} checked={input.toppings} type="checkbox"></input>
                </label>
                <label>
                    Bacon
                    <input name="toppings" checked={input.toppings} onChange={changeHandle} type="checkbox"></input>
                </label>
                <label>
                    Mushrooms
                    <input name="toppings" checked={input.toppings} onChange={changeHandle} type="checkbox"></input>
                </label>
                <h2>Special Instructions</h2>
                <input type="text" name="special" value={input.special} onChange={changeHandle} placeholder="Special Instructions..."></input>
                <button id="submitBtn">Submit Order</button>
            </form>
        </div>
        </>
    );
};