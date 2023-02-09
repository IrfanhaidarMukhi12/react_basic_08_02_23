import React,{useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    // let count=0
    const [count,setCountIncrement]=useState(0)
    
    const clickHandler=()=>{
        setCountIncrement(count+1)
    }
    
    return (
      <div>
        <p id="counter">{count}</p>
        <button onClick={clickHandler} >Increment</button>
      </div>
    );
}
