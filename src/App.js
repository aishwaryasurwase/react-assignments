
import './App.css';
import React, { Component } from 'react'
import Person from './Person/Person';
class App extends Component {
  style = {
    backgroundColor: "white",
    padding: "8px",
    border: "1px solid black",
  }

  state = {
    persons: [
      { id: 'adfd23', name: 'Aishwarya', age: 20 },
      { id: 'adf3242', name: 'Soundarya', age: 13 }
    ],
    showPerson: false
  }

  showPersons = () => {
    console.log("Button clicked");
    const doesShow = this.state.showPerson;
    console.log(doesShow)
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePerson = (ind) => {
    const persons = this.state.persons;
    persons.splice(ind, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    // console.log(event, id);
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1 className="title">Welcome to the react app</h1>
  //       <button onClick={this.showPersons} style={this.style}>Show Persons!</button>
  //       {this.state.showPerson ?
  //         <div>
  //           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}   >My Target is: Uber, Microsoft, Amazon, Flipkart</Person>
  //           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
  //         </div> : null
  //       }
  //     </div>
  //   );
  // }
  render() {
    let persons = null
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}>
                My Target is: Uber, Microsoft, Amazon, Flipkart
              </Person>
            })
          }
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}   >My Target is: Uber, Microsoft, Amazon, Flipkart</Person> */}
          {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> */}
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className="title">Welcome to the react app</h1>
        <button onClick={this.showPersons} style={this.style}>Show Persons!</button>
        {persons}
      </div>
    );
  }
}
export default App;
