import React,{useState} from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    const [messageState,setMessageState] = useState('Invalid')
    
    const textChangeHandler = (event) =>{
        if(event.target.value.trim().length<3){
            setMessageState('Invalid')
        }else{
            setMessageState('Valid')
        }
    }
    
    
    return (
        <form>
            <label>Your message</label>
            <input type="text"  onChange={textChangeHandler} />
            <p>{messageState} message</p>
        </form>
    );
}
