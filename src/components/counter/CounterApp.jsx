import React, { useState } from "react";
import './CounterApp.css'


function CounterApp() {

    const [count, setCount] = useState(0)

    return (
        <div className="app">
            <div className="counter">
                {count}
            </div>
            <div className="controls">
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>INC</button>
                <button className="btn btn-danger" onClick={() => setCount(count - 1)}>DEC</button>
               
            </div>
             <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
        </div>
    );
};




export default CounterApp