import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import HomePage from './Component/HomePage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1 style={{color: "blue",padding: "10px",textAlign:"center",
      fontFamily: "Arial"}}>Exploding Kitten Game</h1>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
