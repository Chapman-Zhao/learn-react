import React from 'react'

const Personsform = ({ newName, newNumber, onNameChange, onNumberChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input 
                value={newName}
                onChange={onNameChange}
            />
                number: <input 
                value={newNumber}
                onChange={onNumberChange}
            />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
      </form>
    )
}

export default Personsform
