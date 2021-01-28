import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import Personsform from './components/Personsform'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filterPersons, setFilterPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log(response.data)
      setPersons(response.data)
    })
  } 

  useEffect(hook, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterPersons([])
    console.log(event.target.value)
    setNewFilter(event.target.value)
    persons.forEach((item1) => {
      let temp = 0
      if (item1.name.includes(newFilter)) {
        filterPersons.forEach((item2) => {
          if (item1 === item2) temp = 1
        })
        if (temp === 1) temp = 0
        else setFilterPersons(filterPersons.concat(item1))
      }
    })
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject ={
      name: newName,
      number: newNumber
    }
    let flag = 0
    persons.forEach((item) => {
      if (item.name === nameObject.name) flag = 1
    })
    console.log(nameObject)
    if (flag !== 1) {
      setPersons(persons.concat(nameObject))
    } else {
      flag = 0
      window.alert(nameObject.name + " is already added to phonebook")
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onchange={handleFilterChange} />
      <h2>Add a New</h2>
      <Personsform 
        onSubmit={addName} 
        newName={newName} 
        newNumber={newNumber} 
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons}/>
    </div>
  )
}

export default App