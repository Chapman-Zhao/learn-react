import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject ={
      name: newName
    }
    let flag = 0
    persons.forEach((item, index) => {
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
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)