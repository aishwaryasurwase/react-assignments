import React, { Component, Fragment } from 'react'; // Fragment
// import React, { Component } from 'react'; // React.Fragment
import './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/WithClass';
// const person = (props) => {
//     console.log("Person.js rendering");
//     return (
//         <div className="person">
//             <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
//             <input type="text" onChange={props.changed} />
//         </div>)
// }

// export default person;
class Person extends Component {
    render() {
        console.log("Person.js rendering");
        // return (
        //     <div className="person">
        //         <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old.</p>
        //         <input type="text" onChange={this.props.changed} />
        //     </div>)
        // return [
        //     <p onClick={this.props.clicked} key="i1">I'm {this.props.name} and I am {this.props.age} years old.</p>,
        //     <input type="text" onChange={this.props.changed} key="i2"/>
        // ]
        // return (
        //     <Auxilliary>
        //         <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old.</p>
        //         <input type="text" onChange={this.props.changed} key="i2" />
        //     </Auxilliary>
        // )
        // return (
        //     <React.Fragment>
        //         <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old.</p>
        //         <input type="text" onChange={this.props.changed} key="i2" />
        //     </React.Fragment>
        // )
        return (
            <Auxilliary>
                <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <input type="text" onChange={this.props.changed} key="i2" />
            </Auxilliary>
        )
        // return (
        //     <Fragment>
        //         <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old.</p>
        //         <input type="text" onChange={this.props.changed} key="i2" />
        //     </Fragment>
        // )
    }
}

export default withClass(Person, 'person');