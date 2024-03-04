import React, { createElement } from "react";

const Hello =()=>{
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Aslı</h1>
    //     </div>
    // )
    return React.createElement(
    'div',
    {id:'hello', className: 'dummyClass'},
    createElement('h1',null,'Hello Aslı'))
}
export default Hello