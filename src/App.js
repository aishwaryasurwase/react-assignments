
import './App.css';
import React, { Component } from 'react'
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {
  state = {
    userInput: ''
  }

  changeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  removeCharFromText = (event, ind) => {
    console.log("Remove char index", ind);
    // const userInput = [...this.state.userInput.split('')];
    // const newUserInput = userInput.filter((input, indx) => indx !== ind)
    // console.log(newUserInput);
    
    const userInput = this.state.userInput.split('');
    userInput.splice(ind, 1)

    this.setState({
      userInput: userInput.join('')
    })
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, ind) => {
      return <Char character={ch} key={ind} removeChar={(event) => this.removeCharFromText(event, ind)} />
    })
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App Component) with a change listener which outputs the length of the entered text below it (e.g in a paragraph).</li>
          <li>Create an new Component(ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g take 5 as a minimum length)</li>
          <li>Create another Component (CharComponent) and style it as an inline box(display: inline-block, padding: 16px, text-align: center, margin 16px, border: 1px solid black)</li>
          <li>Render a list of CharComponent where each CharComponent receives a different letter of the entered text(in the initial input field) as a prop</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that javascript strings are basically arrays!</p>

        <hr />
        <input type="text" onChange={this.changeHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation lengthOfText={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}
export default App;
