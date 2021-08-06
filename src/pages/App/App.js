import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'

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
        <Route 
          exact path="/class-list"
          render={()=> 
            <ClassList />
          }
        />
        <Route
          exact path="/class"
          render={({ location })=>
            <ClassDetails
              location={location}
            />
          }
        />
      </>
    );
  }
}
 
export default App;