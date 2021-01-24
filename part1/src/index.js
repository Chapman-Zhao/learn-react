import React from 'react'
import ReactDOM from 'react-dom'

// App
//   Course
//     Header
//     Content
//       Part
//       Part
//       ...
// ...
const Part = ({ parts }) => {
  return (
    parts.map((item, index) => (
      <div>
        <p>{item.name} {item.exercises}</p>
      </div>
    ))
  )
}

const Course = ({ courses }) => {
  return (
    courses.map((item, index) => (
      <div>
        <h1>{item.name}</h1>
        <Part parts={item.parts} />
        <Total parts={item.parts} />
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

    return <Course courses={courses} />
 
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)