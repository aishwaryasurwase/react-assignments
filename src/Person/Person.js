
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
            <div className="person">
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <h1 onClick={this.props.click}>Person details</h1>
                <p>Author - {this.props.name}</p>
                <p>Age - {this.props.age}</p>
                <p>{Math.floor(Math.random() * 10)}</p>
                <p>{this.props.children}</p>
            </div>)
    }
}
export default person;