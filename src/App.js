import React, { Component } from 'react';
import './App.scss';
import CategoryMenuDropdown from './components/CategoryMenuDropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
          <CategoryMenuDropdown label='Categories'/>
      </div>
    );
  }
}

export default App;
