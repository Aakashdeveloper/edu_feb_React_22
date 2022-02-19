import React,{useState} from 'react';

function HookComponent(props){
    const [title] = useState('React App');
    const [count] = useState(0);

    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
        </>
    )
}


export default HookComponent;