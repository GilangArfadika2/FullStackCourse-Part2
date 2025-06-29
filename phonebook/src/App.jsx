
import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonData from './components/PersonData'
import FilterForm from './components/FilterForm'
import phonebookServices from './services/phonebookServices'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ]) 
  const [persons,setPersons] = useState([])
  const hook = () => {
    console.log('effect')
    phonebookServices.getAll().then(initialPhoneData => {
      console.log('promise fulfilled')
      setPersons(initialPhoneData)
    })
  }
  
  useEffect(hook, [])

  
  const [newName, setNewName] = useState('')
  const [newPhoneNumber , setNewPhoneNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')

  const personShow = filterInput === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase()))

  const handleFilterInput = (event) => {

    const filterInput = event.target.value;
    setFilterInput(filterInput);

  }

  const handleToggleDelete = (id,name) => {
     if ( window.confirm(`Delete ${name} ?`)){
        phonebookServices.deletePhoneNumber(id)
        .then( editedPhoneData=> {
          alert(`deleting ${editedPhoneData} was succesfull`)
          const newArray = persons.filter(n => n.id != id)
          setPersons(newArray);
        })
      } else {
        console.log("delete abort");
      }
    
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
        if (window.confirm(`${person.name} is already added to phonebook, replace the old one with new one ?`)){

              const updatedPerson = { ...person, number : newPhoneNumber}
            
              phonebookServices
                .update(person.id, updatedPerson)
                .then(returnedPerson => {
                  setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
                })
                .catch(error => {
                  alert(
                    `${newName} was already deleted from server`
                  )
                })
              setNewName('');
              setNewPhoneNumber('');
              return;
          
        } else {
          alert("create aborted");
          setNewName('');
          setNewPhoneNumber('');
          return;
        }
      }
    }
    const newPersonsObject = {
      "name" : newName,
      "number" : newPhoneNumber
    }
  
    phonebookServices
    .create(newPersonsObject)
    .then( returnedPhoneData => 
      {setPersons(persons.concat(returnedPhoneData));
      setNewName('');
      setNewPhoneNumber('');})
   
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
      <li>
       {personShow.map(person => {
        return (  <PersonData id="deletteButton" key={person.id} person={person} handleToggleDelete={() => handleToggleDelete(person.id,person.name)}></PersonData> 
      )
        
       } )}
        </li>
    </div>
  )
}

export default App 