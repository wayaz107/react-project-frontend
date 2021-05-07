import React from 'react';

class Button extends React.Component{

 state = {
     count: 0
 }

 handleClick = () => {
     this.setState((prevState) => {
         return {
             count: prevState.count + 1
         }
     })
 }

 render() {
     return (
      <div className="countButton">
          <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
     )
 }

}

export default Button;
