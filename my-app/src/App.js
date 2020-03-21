import React, {useState} from "react"

/**
  <button onClick={() => console.log() calcWordCount(text))}>Start</button>
 */

function App() {
    const [text, setText] = useState("")
    const[timeRemaining, setTimeRemaining] = useState(5)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calcWordCount (text) { 
    const wordsArray = text.trim().split(" ") 
    const filterwords = wordsArray.filter(word => word !== "")
    console.log(wordsArray)
     return filterwords.length
    }
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining:{timeRemaining}</h4>
            <button onClick={() => calcWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
