import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    navItems: [
      {url: "/class-list", name: "Class List"}, 
      {url: "/monster-list", name: "Scary Monsters"}, 
      {url: "/spell-search", name: "Search for Spells"}
    ]
  }
  render() { 
    return (
      <>
        <h1>APP.JS</h1>
      </>
    );
  }
}
 
export default App;