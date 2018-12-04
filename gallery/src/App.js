import React, { Component } from 'react';
import { VueWrapper } from 'vuera';

import './App.css';
import VueSide from './Vue/VueSide';
import ReactSide from './React/ReactSide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="react">
          <ReactSide />
        </div>
        <div className="vue">
          <VueWrapper
            component={VueSide}
          />
        </div>
      </div>
    );
  }
}

export default App;
