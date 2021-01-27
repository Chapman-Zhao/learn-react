import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ filterPersons, setFilterPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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
      filer shown with<input 
        onChange={handleFilterChange}
      />
      <h2>Add a New</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filterPersons.map(person => 
          <li key={person.name}>{person.name}: {person.number}</li>
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)