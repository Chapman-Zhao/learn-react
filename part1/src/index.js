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
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <Part parts={course.parts} />
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }
    return <Course course={course} />
 
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)