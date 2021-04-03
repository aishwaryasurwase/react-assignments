import './Person.css'
const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed} />
        </div>)
}

export default person;