import React, { Component } from 'react';
import './App.css';
import IndexCard from './Components/IndexCard';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <IndexCard />
      </div>
    );
  }
}