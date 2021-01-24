import React from 'react'

const Part = ({ parts }) => {
    return (
      parts.map((item, index) => (
        <div key={item.id}>
          <p>{item.name} {item.exercises}</p>
        </div>
      ))
    )
}

const Total = ({ parts }) => {
    var initialValue = 0
    var total = parts.reduce((accumulator, currentValue) => {
      console.log('what is happening', accumulator, currentValue)
      return accumulator + currentValue.exercises
    }, initialValue)
  
    return (
      <p>totle of {total} exercises</p>
    )
}

const Course = ({ courses }) => {
    return (
      courses.map((item, index) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Part parts={item.parts} />
          <Total parts={item.parts} />
        </div>
      ))
    )
}

export default Course