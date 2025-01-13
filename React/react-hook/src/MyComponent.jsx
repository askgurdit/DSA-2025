import React, {useState} from "react";

function MyComponent () {

    // let [name, setName] = useState();
    const [name, setName] = useState("Guest"); // here name is the stateful variable and setName is the setter function to update its value in the virtual DOM using rerendering. // "Guest" is the initial value

    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("John Doe");

    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);

    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

        </div>
    );

}

export default MyComponent;