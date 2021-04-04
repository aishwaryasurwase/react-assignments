import Person from './Person/Person';
import React, { Component } from 'react';
// const persons = (props) => {
//     console.log("Persons.js rendering...")
//     return (
//         props.persons.map((person) => {
//             return <Person name={person.name} age={person.age} key={person.id}
//                 clicked={() => props.clicked(person.id)}
//                 changed={(event) => props.changed(event, person.id)}
//             />
//         })
//     )
// }
// export default persons;
class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("Get derived state from props in PERSONS", props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js should component update", nextProps, nextState);
        if (nextProps.persons != this.props.persons) {
            return true
        } else {
            return false
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons.js getsnapshot before update props and state", prevProps, prevState);
        return null;
    }

    componentDidUpdate() {
        console.log("Persons.js component did update");
    }

    componentWillUnmount() {
        console.log("[Persons.js] componenet will unmount");
    }

    render() {
        console.log("Persons.js rendering...")
        return (
            this.props.persons.map((person) => {
                return <Person name={person.name} age={person.age} key={person.id}
                    clicked={() => this.props.clicked(person.id)}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            })
        )
    }
}
export default Persons;
