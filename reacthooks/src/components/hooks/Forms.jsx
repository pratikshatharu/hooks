import React, { useState } from 'react'


const Form = () => {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState();
    let value

    const InputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
        value = { name }
    }
    const onSubmit = () => {
        setFullName(name);
    }
    return (
        <>
            <h1>hello {fullName}</h1>
            <input type='text' placeholder='ENTER YOUR NAME' onChange={InputEvent}></input>
            <button onClick={onSubmit}>click me</button>
        </>

    );
}
export default Form;
