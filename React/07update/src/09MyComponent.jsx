// updater function = A fucntion passed as an argumnet to setState() usually ex. setyear(arrow fucntion)
// Allow for safe updates based on the previous state used with multipl state updates and asynchronous fucntions 
// Good practice to use updater functions

import React, {useState} from "react";

function MyComponent () {
    const [count, setCount] = useState(0);

    function increment () {
        //Uses the CURRENT state to calculate the NEXT state
        // set fucntions do not trigger an update
        // React batches together state updates for performance reasons
        // NEXT state becomes the CURRENT after an update

       /* setCount(count + 1) // setCount(0 + 1);
       setCount(count + 1) // setCount(0 + 1);
       setCount(count + 1) // setCount(0 + 1);
        //UPDATE */

       //setCount(count => count + 1) //VALID
       //setCount(prevCount => prevCount + 1) //VALID
       //setCount(c => c + 1) //VALID
       // By conventioon,  it's common to name the pennding state argumnet for the first letter of the state variable name, like a for age. However, you may also use prevAge
       setCount(c => c + 1);
       setCount(c => c + 1); // future proofes code --> even if updating just one time
       setCount(c => c + 1);

       //Takes the PENDING state to calculatee NEXT state
       // React puts your updater function in a queue (waiting in line)
       // During the next render, it will call them in the same order

    }

    function decrement (){
        setCount (c => c - 1);
    }

    function reset () {
        // setCount (c => c = 0); unnecessary
        setCount (0);
    }

    return (
        <div> 
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent