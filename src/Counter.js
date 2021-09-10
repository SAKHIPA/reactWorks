import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const[counter,setCounter]=useState(0)

    return (
        <div className="counter">
            
            <h1 className="h1">{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>ClickHere!!</button>
            <button onClick={()=>setCounter(0)}>Reset!!</button>

        </div>
    )
}

export default Counter
