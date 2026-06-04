import { useState } from 'react'

function Header() {
  return <h1>Give feedback</h1>
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>
}

function StatisticLine({ text, value }) {
  return ( 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

function Statistics({ good, neutral, bad, total, average, positive }) {
  return (
    <div>
      <h1>Statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={`${positive}%`} />
          </tbody>
        </table>
      )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  const handleReviews = (type) => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1)
        break
      case 'neutral':
        setNeutral(prev => prev + 1)
        break
      case 'bad':
        setBad(prev => prev + 1)
        break
      default:
        break
    }
  }

  return (
    <div>
      <Header />

      <Button onClick={() => handleReviews('good')} text="good" />
      <Button onClick={() => handleReviews('neutral')} text="neutral" />
      <Button onClick={() => handleReviews('bad')} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App