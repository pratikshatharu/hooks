//digital clock by using usestate hook
import React, { useState } from 'react';

const Clock = () => {
    let newTime = new Date().toLocaleTimeString(); //for current time

    const [ctime, setCtime] = useState(newTime); //array destructuring
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );

}
export default Clock;
