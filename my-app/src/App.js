import React, { usestate } from 'react';


function App() {
    const [count, setcount] = usestate(0)

    return (
        <div>

            <h1>Title</h1>
            <textarea />
            <h4>Display Time</h4>
            <button>Start</button>
            <h1>Display</h1>

        </div>

    )
}




export default App;
