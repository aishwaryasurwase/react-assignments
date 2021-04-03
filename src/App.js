
import './App.css';
import React, { Component } from 'react'
import Person from './Person/Person'
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
        <div> {
          this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} key={person.id}
              deletePerson={() => this.deletePerson(person.id)} />
          })
        }
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
