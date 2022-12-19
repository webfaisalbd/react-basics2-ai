import React, { useState } from 'react'
import Message from './Message';

const MemoPage = () => {
    const [count, setCount] = useState(0);
    console.log("rendering......");
  return (
    <div>
        <h2>MemoPage</h2>
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount((count)=> count+1)}>Increment</button>
    
        {/* <Message numberOfMsg={numberOfMsg} /> */}
        <Message numberOfMsg={count} />

    </div>
  )
}

export default MemoPage