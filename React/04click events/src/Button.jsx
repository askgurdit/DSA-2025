///////////////////// 1st way ///////////////////////

/* function Button () {
    const handleClick = () => console.log("Button clicked");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    // return (<button onClick={handleClick2("Bro")}>Click me</button>) //self calling 
    return (<button onClick={() => handleClick2("Bro")}>Click me</button>) 
}

export default Button; */

//////////////////////// 2nd way ///////////////////////

/*function Button () {

    let count = 0;
    const handleClick = (name) => { 
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else {
            console.log(`${name} you clicked me ${count} time/s. Stop clicking me`)
        }

    }

  
    return (<button onClick={() => handleClick("Bro")}>Click me</button>) 
} 

export default Button; */

//////////////////////// 3rd way - Event parameter ///////////////////////
// event parameter is passed by default in the function
function Button () {
    //const handleclick = (e) => console.log(e);
    const handleclick = (e) => e.target.textContent = "OUCh!";
  
    // return (<button onClick={(e) => handleclick(e)}>Click me</button>) 
     return (<button onDoubleClick={(e) => handleclick(e)}>Click me</button>)
} 

export default Button;