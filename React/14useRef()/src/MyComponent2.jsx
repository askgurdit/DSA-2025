
import React, { useState, useEffect } from "react"
import { useRef } from "react";


function MyComponent2() {

    // let [number, setNumber] = useState(0); // component is rendering as it's value is changing
 
    const inputRef1 = useRef(null); // value is changing definitely now but compnent is not re-rendring

    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    
    useEffect(() => {
        console.log("COMPONENT RENDERED")
    }
    )

    function handleClick1() {
        // setNumber(n => n + 1); // with useState()
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
   
    }

    function handleClick2() {
        // setNumber(n => n + 1); // with useState()
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
   
    }


    function handleClick3() {
        // setNumber(n => n + 1); // with useState()
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
   
    }



    return (
        <div>
        <button onClick={handleClick1}>
            Click Me1!        
        </button>
        <input ref= {inputRef1} />

        <button onClick={handleClick2}>
            Click Me2!        
        </button>
        <input ref= {inputRef2} />

        <button onClick={handleClick3}>
            Click Me3!        
        </button>
        <input ref= {inputRef3} />


        </div>
    )

}

export default MyComponent2

// still component only rendered once