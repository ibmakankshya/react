// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import  React from "react";
import ReactDOM from "react-dom";

import Footer from "./funcrion2";
function MyIBM(){

   return(<div><h1>Akankshya Bhattacharyaa </h1>
    <ul>
        <li>US <input type="checkbox"></input></li>
        <li>Santorini <input type="checkbox"></input></li>
        <li>Paris <input type="checkbox"></input></li>
    </ul>
    <main><p>Heyya</p></main>
    <Footer/>
   </div> 
  
    )
  }
  
export default MyIBM