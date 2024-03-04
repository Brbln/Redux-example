import React from 'react'
// function Greet(){
//     return <h1>Hello Aslı</h1>
// }

const Greet = props =>{
console.log(props)
return(
    <div>
        <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
    {props.children}
    </div>
)
}
export default Greet

// export const Greet = () => <h1>Hello Aslı<h1> //(bunun içim {Greet} diye tanımlanmalı App.js sınıfında )

