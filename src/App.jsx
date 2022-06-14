import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState(0)

  const handleChange=(e)=>{
    if(value>-1){
      setValue(e+value)
    }
    
  }

  return (
    <div className="App">
      
      <h2 data-testid="counter-value">{value}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>{handleChange(1)}}>+</button>
      <button data-testid="counter-increment-button" onClick={()=>{handleChange(-1)}}>-</button>
    </div>
  );
}

export default App;
