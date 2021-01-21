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

const App = () => {
  const [clicks, setClicks] = useState(
    {left: 0, right: 0}
  )

  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
  }
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
