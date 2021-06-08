import React, { useState } from 'react';


const Use = () => {
    const State = useState();
    //console.log(State);
    const [count, setCount] = useState(0) //array destructuring



    const IncNum = () => {
        setCount(count + 1); //updated value of count, count value increased by 1 after every click

        // console.log('clicked  ' + count++);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me!</button>
        </>
    );
}
export default Use;


