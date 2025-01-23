import React, { useState } from 'react';

function MyComponent2() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        // setFoods([...foods,newFood]);
        setFoods (f =>[...f, newFood]);

    }

    function handleRemoveFood(index) {
        //setFoods(foods.filter((element, i) => i !== index)); // i is index
        setFoods(foods.filter((_, i) => i !== index)); // _ represents ignored element

    }

    return (
        <div>
            <p>List of Food</p>
            <ol>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li>)}
            </ol>
            <input type="text" id="foodInput" placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent2;