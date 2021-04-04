import './App.css';
import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';
import Auxilliary from '../hoc/Auxilliary';
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor"); 
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props ", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js should component update", nextProps);
    return true;
  }

  componentDidMount() {
    console.log("App.js component did mount");
  }

  componentDidUpdate() {
    console.log("App.js component did update");
  }

  // componentWillUnmount() {
  //   console.log("[Persons.js] componenet will unmount");
  // }
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
    const persons = this.state.persons.slice();
    const updatedPersons = persons.filter((person) => person.id !== id);
    this.setState({ persons: updatedPersons })
  }

  changePersonName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({ persons: persons })
  }

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.changePersonName}></Persons>
        </div>
      )
    }

    return (
      // <div className="App">
      //   <Cockpit togglePerson={this.togglePerson} persons={this.state.persons} showPerson={this.state.showPerson} />
      //   {persons}
      // </div>

      // <WithClass classes="App">
      //   <Cockpit togglePerson={this.togglePerson} persons={this.state.persons} showPerson={this.state.showPerson} />
      //   {persons}
      // </WithClass>

      <Auxilliary>
        <Cockpit togglePerson={this.togglePerson} persons={this.state.persons} showPerson={this.state.showPerson} />
        {persons}
      </Auxilliary>

    );
  }
}
// export default App;
export default withClass(App, 'App');
