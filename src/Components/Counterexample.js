import React, { useState } from "react"

function CounterExample() {
    const[count, setCount] = useState(0)

  
    return (
      <div>
        <h1>
            {count}
        </h1>
        <h1 onClick={() => setCount(count + 1)}>
            Plus
        </h1>
        <h1 onClick={() => setCount(count - 1)}>
            Minus
        </h1>
        <h1 onClick={() => setCount(count * 2)}>
            Multiplier
        </h1>
        <h1 onClick={() => setCount(count / 2)}>
            Divide
        </h1>
      </div>
    )
  }
  
  export default CounterExample