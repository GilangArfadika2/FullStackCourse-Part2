
import { useState } from 'react'
import Note from './components/Note'
import PersonForm from './components/PersonForm'
import PersonData from './components/PersonData'
import FilterForm from './components/FilterForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber , setNewPhoneNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')

  const personShow = filterInput === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase()))

  const handleFilterInput = (event) => {

    const filterInput = event.target.value;
    setFilterInput(filterInput);

  }

  const handleInputName= (event) => {
    const inputValue = event.target.value;
    setNewName(inputValue);
  } 
  const handleInputPhoneNumber= (event) => {
    const inputValue = event.target.value;
    setNewPhoneNumber(inputValue);
  } 
  const addPerson = (event) => {
    event.preventDefault()
    for (let person of  persons){
      console.log(person)
      if (newName === person.name){
        console.log("enter")
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    const newPersonsObject = {
      "id" : persons.length + 1,
      "name" : newName,
      "number" : newPhoneNumber
    }
    const newArray = persons.concat(newPersonsObject)
    console.log("data : ", newArray)
    setPersons(newArray);
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filterInput={filterInput} handleFilterInput={handleFilterInput}></FilterForm>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson}
       handleInputName={handleInputName} 
      handleInputPhoneNumber={handleInputPhoneNumber} 
      newName={newName} 
      newPhoneNumber={newPhoneNumber}></PersonForm>
      
      <h2>Numbers</h2>
      
       {/* {persons.map((person) => <p key={person.id}>{person.name}  {person.number}</p>)} */}
       <PersonData persons={personShow}></PersonData>
    </div>
  )
}

export default App 