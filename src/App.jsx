import { useState } from 'react'
import './App.css'

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
    // <div>
    //   {left}
    //   <button onClick={() => setLeft(left + 1)}>
    //     left
    //   </button>
    //   <button onClick={() => setRight(right + 1)}>
    //     right
    //   </button>
    //   {right}
    // </div>
  )
}

export default App
