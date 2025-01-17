
import React, {useState, useContext} from 'react'
import { UserContext } from './ComponentA'

function ComponentD () {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>

        </div>
    )

}

export default ComponentD

// props drilling is passing props to each level down as required
// better way to do thsi is with useContext() hook