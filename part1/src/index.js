// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const bornYear = () => {
    const now = new Date().getFullYear()
    return now - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Ander'
  const age = 21
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Bell' age={32 + 2} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
