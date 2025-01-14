import React, {useState} from 'react';

function MyComponent3() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear);
    const[carMake, setCarMake ] = useState("");
    const[carModel, setCarModel ] = useState("");

    function handleAddCar () {

    }

    function handleRemoveCar (index) {

    }

    function handleYearChange (event) {

    }

    function handleMakeChange (event) {

    }

    function handleModelChange (event) {

    }



    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>

            </ul>

        
        </div>
    )



}

export default MyComponent3;