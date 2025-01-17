import React, { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA () {

    const [user, setUser] = useState("askgurdit")

    return (
        <div className="box">
            <h1>COmponent A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
            <ComponentB user={user}/>
            </UserContext.Provider>
            

        </div>
    )

}

export default ComponentA


// props drilling is passing props to each level down as required
// better way to do thsi is with useContext() hook