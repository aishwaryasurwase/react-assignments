import './Cockpit.css';
import React, { useEffect } from 'react'
const Cockpit = (props) => {
    // useEffect(() => {
    //     console.log('[Cockpit] useEffect');
    //     setTimeout(() => {
    //         alert("Data saved on cloud");
    //     }, 10);
    //     return () => {
    //         console.log("[Cockpit] cleanup work in useEffect");
    //     }
    // }, [])

    const buttonStyle = {
        backgroundColor: "green",
        color: 'white',
        padding: "8px",
        fontSize: "16px",
    }
    if (props.showPerson) {
        buttonStyle.backgroundColor = 'red'
    }

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }
    return (
        <div>
            <h1>Welcome to react </h1>
            <p className={classes.join(' ')}>This is working</p>
            <button style={buttonStyle} onClick={props.togglePerson}>Toggle Person</button>
        </div>
    )
}

export default Cockpit