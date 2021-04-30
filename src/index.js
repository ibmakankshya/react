import  React from "react";
import ReactDOM from "react-dom";
//import AppMy from "./csshow";
//import './styles.css'

//ReactDOM.render(<Head />,document.getElementById('root'));

 //ReactDOM.render(<input />,document.getElementById('root'));
//ReactDOM.render(<foot />,document.getElementById('foot'));
// class Bike extends React.Component{//inheritance
//     constructor(){
//         super();
//         this.state ={colour:"red"};//class based component
//     }
//     render(){
//     return(<p>This Bike  is {this.state.colour
//     } in colour</p>)
//     }
// }
//calling two components together we can put in different files and use import
// class Home extends React.Component{
//     render(){
//     return (<h3> Hello {this.props.name} <Data /></h3>)
//     }
// }
// class Data extends React.Component{
//     render(){
//         const myname="Akankshya";
//     return (
//         <div>
//             <h4>Who will live here?: {myname}</h4>
//         </div>
//      )
//     }
// }
//using component
// const nam = <Home name = "All"/>;


//using functional component
    // ReactDOM.render(<Props brand= 
    // 'Car'/>,document.getElementById('root'));
  //  ReactDOM.render(nam, document.getElementById('root'));

   //using constructor
//  class Header extends React.Component{
//       constructor(props){
//           super(props);//constructor has position, colour, font size etc
//       }
//         render(){
//         return (<h3 className="navbar"> Hello {this.props.name} <Foooter /></h3>)
//         }
//     }

    // class Foooter extends React.Component{
    //     constructor(props){
    //         super(props);//constructor has position, colour, font size etc
    //     }
    //       render(){
    //           const mystyle={
    //               backgroundColor: "yellow"

    //           };
    //       return <h3 style={mystyle}> How have you been?</h3>;
    //       }
    //   }

    class App extends React.Component { 
        constructor(props){ 
          super(props) ;
              
          // Set initial state 
          this.state = {fruit : 
                "Apple"} ;
              
          // Binding this keyword 
          //this.updateState = this.updateState.bind(this) 
        } 
          
        // updateState(){ 
        //   // Changing state 
        //   this.setState({fruit : 
        //                'Mango'}) 
        // } 
        //simplest static derived
        // static getDerivedStateFromProps(props,state){
        //     return {fruit:props.favcol};
        // }
            componentDidMount(){
                setTimeout(()=>{
                    this.setState=({fruit:"Grapes"})
                },1000)
            }
        render(){ 
          return (  <div> 
            <h2>This is a:</h2>   
            <p>{this.state.fruit}</p>
           
             {/* Set click handler */} 
             {/* <button onClick={this.updateState}> 
               Click me!
             </button>  */}
           </div> 
         ) 
       } 
     } 
    ReactDOM.render(<App  favcol="Litchi"/>, document.getElementById('root'));