const PersonData = props => props.persons.map((person) => <p key={person.id}>{person.name}  {person.number}</p>)

export default PersonData;