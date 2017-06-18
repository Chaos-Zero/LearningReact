import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to React';
    var username, surname
    var people = [];
    var homer = [];
    var bart = [];
    homer.push("Homer", "Simpson");
    bart.push("Bart", "Simpson")
    people.push(0, homer);
    people.push(1, bart);
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>{people[0]} {people[1]}</p>
      </div>
    );
  }
}

export default App;
