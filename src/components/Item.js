import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  
  const [state, setState] = useState(false)


  const addCard = () => {
    setState(!state)
  }
  const changeClass = state ? "in-cart" : ""
  const change = !state ? "Add to Cart" : "Remove from Cart"

  return (
    <li className={changeClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addCard} className="add">{change}</button>
    </li>
  );
}

export default Item;
