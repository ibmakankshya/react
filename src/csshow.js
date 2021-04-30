import React from 'react';
import ("./math").then(math=>{
    console.log(math.add(4,90));
})
class AppMy extends React.Component{
    
      render(){
          const mystyle={
              backgroundColor: "yellow"

          };
      return (
        <div>
             <ol style={mystyle}>
                 <li>One</li>
                 <li>One</li></ol>
        </div>
      )
      }
  }
  export default AppMy