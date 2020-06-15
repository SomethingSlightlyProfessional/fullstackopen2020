import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DisplayPerson = ({person}) => (<div>{person.name} {person.number}<br/></div>)

const DisplayAllPeople = ({persons}) => {
  return(
    <ul>
      {persons.map(person => 
        <li key={person.name}>
          <DisplayPerson person={person} />
        </li> 
      )}
    </ul>
  )
}

const App = () => {
  // Records name and number as an entity and displays stored values.

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    // Adds a person to the PERSONS state if the name was previously not added.
  
    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)){
      const duplicateMessage = `${newName} is already added to phonebook`
      window.alert(duplicateMessage)
    }else{
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  
    console.log('button clicked', event.target)
  }
  
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value) 
  }
  
  const handleNumberChange = (event) =>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNameChange} />
        </div>
  
        <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
    
        <div>
        <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <DisplayAllPeople persons={persons} />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))