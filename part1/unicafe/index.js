import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistic = (prop) => (
    <div>
        {prop.text} {prop.value}
    </div>
)

const Statistics = (prop) => {
    const sum = prop.good + prop.bad + prop.neutral
    const avg = (prop.good - prop.bad) / sum
    const positivePercent = prop.good / sum 
    
    if (sum === 0){
        return(
            <div>
            No feedback given
            </div>
        )
    }
    
    return(     
        <div>
            <Statistic text='good' value={prop.good} />
            <Statistic text='neutral' value={prop.neutral} />
            <Statistic text='bad' value={prop.bad} />
            <Statistic text='all' value={sum} />
            <Statistic text='average' value={avg} />
            <Statistic text='positive' value={positivePercent} />
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>give feedback</h1>
        
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />

        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)