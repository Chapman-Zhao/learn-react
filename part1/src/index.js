import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Select = (props) => {
  for (let i = 0; i < vote.length; i ++)
    if (vote[i] > max) {
      max = vote[i]
      most = i
    }
  return (
    <p>{props.anecdotes[most]}</p>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)

  const handleSelectedClick = () => {
    let num = Math.floor(Math.random()*10)
    if (num < anecdotes.length)
      setSelected(num)
  }

  const handleVoteClick = () => {
    vote[selected] += 1
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]}
      <p>has {props.vote[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleSelectedClick}>next</button>
      <h1>Anecdotes with most vote</h1>
      <Select anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const vote = [0, 0, 0, 0, 0, 0]

let most = 0
let max = 0

ReactDOM.render(
  <App anecdotes={anecdotes} vote={vote} />,
  document.getElementById('root')
)