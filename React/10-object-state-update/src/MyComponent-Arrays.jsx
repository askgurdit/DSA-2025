import React, {useState} from 'react' 

function MyComponent2 () {

    const {foods, setFoods} = useState (["Apple", "Orange", "Banana"]);

    return (
        <div>
            <p>List of Food</p>
            
        </div>
    )


}

export default MyComponent2