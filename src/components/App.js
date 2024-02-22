import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [state, setState] = useState(false)
  
  const handleToggle = () => {
    setState(!state)
  }
  
  const change = state ? "App dark" : "App light"

  return (
    <div className={change}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

