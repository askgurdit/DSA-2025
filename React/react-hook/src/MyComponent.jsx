import React, {useState} from "react";

function MyComponent () {

    // let [name, setName] = useState();
    const [name, setName] = useState("Guest"); // here name is the stateful variable and setName is the setter function to update its value in the virtual DOM using rerendering. // "Guest" is the initial value

    const updateName = () => {
        setName("John Doe");

    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    );

}

export default MyComponent;