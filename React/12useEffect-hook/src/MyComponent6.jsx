// useEffect (function, [dependencies])

import React, {useState, useEffect} from 'react';

function MyComponent6 () {

    const [width,  setWidth] = useState(window.innerWidth)
    const [height,  setHeight] = useState(window.innerHeight)

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   

    //window.addEventListener("resize", handleResize); //(event, function)
    //console.log("EVENT LISTENER ADDED");

     useEffect (() => {
        window.addEventListener("resize", handleResize); //(event, function)
        console.log("EVENT LISTENER ADDED");

        //important to unamount our component, to prevent unwanted behaviour
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
     }, []);

     useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
     }, [width, height])

    return (
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    )

}

export default MyComponent6;