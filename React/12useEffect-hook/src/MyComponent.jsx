// useEffect() = React hook that hells React DO SOME CODE WHEN  (PICK ONE) :
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs only on mount
// 3. useEffect(() => {}, [value]) //Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptionns (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react';

function MyComponent5 () {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

   /* useEffect (() => {
    document.title = `Count: ${count}`;
    }) */ // Updates every time

    /*useEffect (() => {
        document.title = `Count: ${count}`;
        }, []); //Updates only once */

        useEffect (() => {
            document.title = `Count: ${count} ${color}`;

            return () => {
                // SOME CLEANUP CODE
            }

            }, [count, color]); //Only updates when this dependency updates



    function addCount () {
        setCount (c => c + 1);
    }

    function substractCount () {
        setCount (c => c - 1);
    }

    function changeColor () {
        setColor (c => c === "green" ? "red" : "green");
    }

    return (
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button>
        <button onClick={changeColor}>Change Color</button>
        
        </>
    )


}

export default MyComponent5