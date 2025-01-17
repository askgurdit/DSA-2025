// useState() = Re-Renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus,  Animations and Transitions
// 3. Managing Timers and Intervals

import React, { useState, useEffect } from "react"
import { useRef } from "react";


function MyComponent() {

    // let [number, setNumber] = useState(0); // component is rendering as it's value is changing
 
    const ref = useRef(0); // value is changing definitely now but compnent is not re-rendring

    console.log(ref); // in console you can see ref is object with one value

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    }
    )

    function handleClick() {
        // setNumber(n => n + 1); // with useState()
       ref.current++ ;
        console.log(ref.current); 
    }




    return (
        <button onClick={handleClick}>
            Click Me!        
        </button>
    )

}

export default MyComponent