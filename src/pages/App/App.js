import React, { Component } from 'react';
import './App.css'
import NavBar from '../../components/NavBar/NavBar'

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
        <NavBar 
          navItems={this.state.navItems}
        />
      </>
    );
  }
}
 
export default App;