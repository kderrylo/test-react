import React from 'react'

function Greetings() {
    function sayHi(name1,name2){
        alert("Hi"+" "+name1+" "+name2);
    }
  return (
    <div>
        <button onClick={() => sayHi('Deerryl','Odja')}>Say Hi!</button>
    </div>
  )
}

export default Greetings