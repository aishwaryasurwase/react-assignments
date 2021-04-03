
import './App.css';
import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
class App extends Component {

  state = {
    persons: [
      { id: "adfd324", name: 'Aishwarya', age: 23 },
      { id: "sdr3325", name: 'Soundarya', age: 20 },
      { id: "sfdhn25", name: 'Sakshi', age: 23 }
    ],
    showPerson: false
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePerson = (id) => {
    console.log(id);
    const persons = this.state.persons.slice();
    const updatedPersons = persons.filter((person) => person.id !== id);
    // console.log(updatedPersons);
    this.setState({ persons: updatedPersons })
  }

  changePersonName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    console.log(personIndex);

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    
    this.setState({ persons: persons })
  }
  render() {
    const buttonStyle = {
      backgroundColor: "green",
      color: 'white',
      padding: "8px",
      fontSize: "16px",
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.changePersonName}></Persons>
        </div>
      )
      buttonStyle.backgroundColor = 'red'
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1>Welcome to react </h1>
        {/* <p className={th
          is.state.persons.length < 2 ? classes : ''}>This is working</p> */}
        <p className={classes.join(' ')}>This is working</p>
        <button style={buttonStyle} onClick={this.togglePerson}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}
export default App;
