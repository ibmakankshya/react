// import React from 'react'


// function Developer()
// {
//     return (
//         <div >
//             <h1>Developer Component</h1>

//         </div>
//     )
// }
// export default Developer
import React, {useState} from 'react';
function Developer(){
   // const [enteredInput,setUserInput] = useState('');
    // const inputHandler = (event) =>{
    //     setUserInput(event.target.value);
    //     console.log(enteredInput);
    // };
    // const submitHandler =() =>{
    //     alert(enteredInput);
    // }
    const submitHandler =() =>{
             //alert(enteredInput);
             
         }
    
    function showUp()
{
    return(
        <h1>Magic  Happens</h1>
    )
}
    return(
        <form>
            {/* <div>
                <h1>Hello {enteredInput}</h1>
                <input type="text" onChange={inputHandler}></input>
            </div> */}
            <div>
            {showUp()}
            </div>
            <div>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </form>
       
    )
}
export default Developer;