import  React from "react";
import ReactDOM from "react-dom";

// import input from "./input";

//ReactDOM.render(<Head />,document.getElementById('root'));

 //ReactDOM.render(<input />,document.getElementById('root'));
//ReactDOM.render(<foot />,document.getElementById('foot'));
class Bike extends React.Component{//inheritance
    constructor(){
        super();
        this.state ={colour:"red"};//class based component
    }
    render(){
    return(<p>This Bike  is {this.state.colour
    } in colour</p>)
    }
}

    ReactDOM.render(<Bike />,document.getElementById('root'));
