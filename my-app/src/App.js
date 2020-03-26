import React, {useState, useEffect} from "react"

/**
  <button onClick={() => console.log() calcWordCount(text))}>Start</button>
 */

function App() {
    const [text, setText] = useState("")
    const[timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function startClock(){
    setIsTimeRunning(true)
    setIsTimeRunning(5)
    setText("")
    }

   function endGame(){
        setIsTimeRunning(false)
        const numWords = calculateWordCount(text)
        setWordCount(numWords)
    }
    
    useEffect( () =>{
   if (timeRemaining  && isTimeRunning > 0){
       setTimeout(()=> {
           setTimeRemaining(time => time - 1)
       }, 1000)
    } else if (timeRemaining === 0) {
        endGame()
       }

    }, [timeRemaining, isTimeRunning])

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining:{timeRemaining}</h4>
            <button 
            onClick={startClock}
            disabled={isTimeRunning}
            >
                Start
            </button>
             <h1>Word count:{wordCount}</h1>
        </div>
    )
}

export default App
