import React, { useState } from 'react'

export const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <>
        <p>Clicked {count} times.</p>
        <button onClick={handleClick}>Increment</button>
    </>
    
  )
}
