import React from 'react';  
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  };
  add = () => {
    this.setState(cur => ({count : cur.count+1}));
  };
  minus = () => {
    this.setState(cur => ({count : cur.count-1}));
  };
  render(){
  return(
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <br></br>
      <button onClick={this.minus}>Minus </button>
    </div>
    );
  }
 
}

export default App; 