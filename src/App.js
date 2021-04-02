
import './App.css';
import React, { Component, useState } from 'react'
import Person from './Person/Person';

// function App() {
//   const [personCurrState, setPersonData] = useState({
//     persons: [
//       { name: 'Aishwarya', age: 20 },
//       { name: 'Soundarya', age: 13 }
//     ],
//   })
//   const [data] = useState('Some other state')

//   console.log(personCurrState, data);

//   const switchName = () => {
//     setPersonData({
//       persons: [
//         { name: 'Aish', age: 20 },
//         { name: 'Soundarya', age: 13 }
//       ]
//     })
//   }

//   const nameChangedHandler = (event) => {
//     setPersonData({
//       persons: [
//         { name: event.target.value, age: 20 },
//         { name: 'Soundarya', age: 13 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1 className="title">Welcome to the react app</h1>
//       <button onClick={switchName}>Click Me!</button>
//       <Person name={personCurrState.persons[0].name}
//         age={personCurrState.persons[0].age} click={switchName}
//         changed={nameChangedHandler}>
//         My Target is: Uber, Microsoft, Amazon, Flipkart</Person>

//       <Person name={personCurrState.persons[1].name} age={personCurrState.persons[1].age} />
//     </div>
//   );
// }

// export default App;
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Sakshi Katkar'
  }

  manipulateState = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create Two new Components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paraphrase</li>
          <li>Output multiple UserOutput Component in the App Component</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App Component (the username) and pass the username to the UserOutput Component</li>
          <li>Add a method to manipulate the state(an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput Component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your Components/ elements in the Components - both with inline styles and stylesheets</li>
        </ol>
        <div>
          <UserInput changed={this.manipulateState} username={this.state.username} />
          <UserOutput name="Aishwarya Surwase" />
          <UserOutput name={this.state.username} />
        </div>
      </div>
    );
  }
}

export default App;
// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Aishwarya', age: 20 },
//       { name: 'Soundarya', age: 13 }
//     ],
//     otherState: 'Some other state'
//   }
//   switchName = () => {
//     console.log("Button clicked");
//     this.setState({
//       persons: [
//         { name: 'Aish', age: 20 },
//         { name: 'Soundarya', age: 13 }
//       ]
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1 className="title">Welcome to the react app</h1>
//         <button onClick={this.switchName}>Click Me!</button>
//         <h2>{this.state.otherState}</h2>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Target is: Uber, Microsoft, Amazon, Flipkart</Person>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//       </div>
//     );
//   }
// }
// export default App;
