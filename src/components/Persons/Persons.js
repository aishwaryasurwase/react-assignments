import Person from './Person/Person';
const persons = (props) => props.persons.map((person) => {
    return <Person name={person.name} age={person.age} key={person.id}
        clicked={() => props.clicked(person.id)}
        changed={(event) => props.changed(event, person.id)}
    />
})

export default persons;