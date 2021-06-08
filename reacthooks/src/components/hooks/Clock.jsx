//digital clock bye using useState hook
import React, { useState } from 'react'

const Clock2 = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);
    return (
        <>
            <h1>{ctime}</h1>

        </>
    );

}
export default Clock2;
