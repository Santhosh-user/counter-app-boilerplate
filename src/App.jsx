import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState(0)

  const handleChange1=()=>{
    if(value>=1){
      setValue(value-1)
    }
  }
  const handleChange2=()=>{
   
      setValue(value+1)
  }



  return (
    <div className="App">
      <h2 data-testid="counter-value">{value}</h2>
      <button disabled={value<=0 ? true: false} data-testid="counter-decrement-button" onClick={handleChange1}>-</button>
      <button data-testid="counter-increment-button" onClick={handleChange2}>+</button>
    </div>
  );
}

export default App;