import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
    <Card />
    <Button />
    <Student name="Spongebob" age="30" isStudent={true}/>
    <Student name="Patrick" age={25} isStudent={false}/>
    <Student name="Squidward" age={35} isStudent={true}/>
    <Student name="Mr. Krabs" age={50} isStudent={false}/>
    <Student />
    <UserGreeting isLoggedIn={true} username="askgurdit"/>
    <UserGreeting isLoggedIn={false} username="askditman"/>
    </>
  )
}

export default App

//props = read-only properties that are passed from parent to child components
//state = mutable data that is managed by the component itself
//useState = hook that allows you to add state to functional components
//useEffect = hook that allows you to add side effects to functional components
//useContext = hook that allows you to subscribe to React context without introducing nesting
//useReducer = hook that allows you to manage state with a reducer function
//useRef = hook that allows you to create a mutable ref object
//useMemo = hook that allows you to memoize a value
//useCallback = hook that allows you to memoize a callback function
//useLayoutEffect = hook that allows you to perform side effects after the browser has painted
//useImperativeHandle = hook that allows you to customize the instance value that is exposed to parent components when using ref
// props example = <Button color="red" size="large" />
// state example = const [count, setCount] = useState(0)
// useEffect example = useEffect(() => { console.log('Hello') }, [])
// useContext example = const value = useContext(MyContext)
// useReducer example = const [state, dispatch] = useReducer(reducer, initialState)
// useRef example = const inputRef = useRef()
// useMemo example = const value = useMemo(() => computeExpensiveValue(a, b), [a, b])

//Conditional Rendering in React = allows you to render different components or elements based on a condition (show or hide or change the elements)

