
import './Person.css'
import React, { Component } from 'react';
// const person = (props) => {
//     return (
//         <div className="person">
//             <h1>Person details</h1>
//             <p>Author - {props.name}</p>
//             <p>Age - {props.age}</p>
//             <p>{Math.floor(Math.random() * 10)}</p>
//         </div>)
// }
// function person(props) {
//     return (
//         <div className="person">
//             <h1>Person details</h1>
//             <p>Author - {props.name}</p>
//             <p>Age - {props.age}</p>
//             <p>{Math.floor(Math.random() * 10)}</p>
//         </div>)
// }

class person extends Component {
    render() {
        return (
            <div className="person" >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed} />
            </div>)
    }
}
export default person;