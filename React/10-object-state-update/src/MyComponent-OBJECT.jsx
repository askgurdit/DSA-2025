import React, {useState} from 'react';

function MyComponent () {
    const [car, setCar] = useState ({year: 2024, 
                                     make: "BYD", 
                                     model: "Seal"});

    function handleYearChange(event) {
        // setCar ({year: 2025}); not correct method - it replaces other values of object
        // setCar({...car, year: event.target.value}); explained in next line        
        // // setCar({year: 2024, make: "BYD, model: "Seal", year: 2025}); Means here we ahve spread the js object like this -- it uses the latest value for update

        // setCar({...car, year: event.target.value}); //we do not want ot updatee the current state rather refer to the previous state -- allows for safe updates

        // setCar(car => {...car, year: event.target.value}); JS thinks we are writing multi line code--but that iss not the case

        // setCar(car => ({...car, year: event.target.value})); //car before => must be renamed as per prev state name rule

        setCar(c => ({...c, year: event.target.value}));



    }

    function handleMakeChange(event) {

        setCar ( c => ({...c, make: event.target.value}));
        
    }

    function handleModelChange(event) {

        setCar ( c => ({...c, model: event.target.value}));
        
    }

    return (
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        
        </div>
    )


}

export default MyComponent