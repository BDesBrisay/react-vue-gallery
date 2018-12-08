import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    count: 0
  }
  
  render() {
    return (
      <div className="counter">
        <p>{this.state.count}</p>
        <button onClick={() => {this.setState({ count: this.state.count + 1 })}}>Increment</button>
      </div>
    )
  }
}

export default Counter;