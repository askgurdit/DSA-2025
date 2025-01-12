/*function List () {
    const fruits = ["apple", "orange", "banana", "coconut", "pinenapple"];

    fruits.sort()

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (<ol>{listItems}</ol>);

}

export default List;*/

// function List () {
    
    /*const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pinenapple", calories: 37}]; */

    // fruits.sort((a, b) => a.name.localeCompare(b.name))  //Alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name))  //REVERSE Alphabetically

    // fruits.sort((a, b) => a.calories - b.calories)  //Numerically
     // fruits.sort((a, b) => b.calories - a.calories)  //REVERSE Numerically

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

     

    /*const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                               <b>{fruit.calories} </b> </li>); //each child in a list should ahave a unique "key" prop */

/*const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                {lowCalFruit.name}: &nbsp;
                                               <b>{lowCalFruit.calories} </b> </li>);   */

/*const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                {highCalFruit.name}: &nbsp;
                                               <b>{highCalFruit.calories} </b> </li>); */
import PropTypes from 'prop-types';

function List (props) {       
const category = props.category;                           
const itemList = props.items;
const listItems = itemList.map(item =>  <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.calories} </b> </li>); 



    return (<>
             <h3 className='list-category'>{category}</h3>
             <ol className='list-items'>{listItems}</ol>
            </>);

}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                 calories: PropTypes.number})),
    }

List.defaultProps = {
    category: "Category",
    items: [],
}



export default List;