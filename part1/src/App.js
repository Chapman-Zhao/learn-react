import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countriesList, setCountriesList] = useState([])
  const [ filterList, setFilterList] = useState([])

  const effectHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountriesList(response.data)
      })
  }

  useEffect(effectHook, [])

  const handleChange = (event) => {
    const search = event.target.value
    search ? (
      setFilterList(
        countriesList.filter(name => name.includes(search))
      )
    ) : countriesList
  }

  return (
    <div>
      Find Countries: <input 
        onChange={handleChange}
      />
      <ul>
        {filterList.map(country =>
          <li key={country.name}>{country.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App