import {useState} from 'react'
import './index.css'

const LettersCalculator = () => {
  const [text, setText] = useState('') // State to store user input
  const [letterCount, setLetterCount] = useState(0) // State to store the letter count

  // Handle input change
  const handleInputChange = event => {
    const {value} = event.target
    setText(value) // Update text state with user input
    setLetterCount(value.length) // Update letter count based on input length
  }

  return (
    <div className="letters-calculator-container">
      {/* Main Heading */}
      <h1 className="app-heading">Calculate the Letters you enter</h1>

      {/* Image */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
        className="calculator-image"
      />

      {/* Label and Input field */}
      <label htmlFor="inputText" className="input-label">
        Enter the phrase
      </label>
      <input
        id="inputText"
        type="text"
        value={text}
        onChange={handleInputChange}
        className="input-box"
        placeholder="Enter the text"
      />

      {/* Letter count display */}
      <p className="letter-count-text">No.of letters: {letterCount}</p>
    </div>
  )
}

export default LettersCalculator
