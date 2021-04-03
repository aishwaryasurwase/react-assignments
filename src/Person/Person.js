import './Person.css'
const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.deletePerson}>I'm {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>)
}

export default person;