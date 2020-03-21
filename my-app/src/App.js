import React, {useState, useEffect} from "react"

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
     return filterwords.length
    }
    
    useEffect( () =>{
   if (timeRemaining > 0){
       setTimeout(()=> {
           setTimeRemaining(time = time - 1)
       }, 1000)
   }
    }, [timeRemaining])

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
