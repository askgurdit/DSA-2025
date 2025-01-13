// React hook = Special fucntion that aallows fucntional components to use react features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A react hook that allows the creation of a stateful variable and a setter fucntion to update its value in the virtual DOM. [name, setName]

import Counter from './Counter';
import MyComponent from './MyComponent';

function App() {
  

  return (
    <>
      <Counter />
    </>
  )
}

export default App
