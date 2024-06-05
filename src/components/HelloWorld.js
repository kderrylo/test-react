import React from 'react'

const css = {
    backgroundColor:'yellow', 
    border: 'none', 
    borderRadius:'15px',
    padding:'10px',
    width:'auto'
};

function HelloWorld({name2, name0}){
    const greeting = "Hello";
    const name = "Derryl";
    const github = "https://github.com/kderrylo";


    return (
        <div style={css}>
            <div>{greeting},</div>
            <div>my name is {name0} {name} {name2}</div>
            <a href={github}>Here's my github</a>


        </div>
        
    )
}

export default HelloWorld