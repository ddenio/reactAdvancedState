import { useState } from 'react'
import './App.css'

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  // const handleLeftClick = () =>
  //   setClicks({ ...clicks, left: clicks.left + 1 })
  
  // const handleRightClick = () =>
  //   setClicks({ ...clicks, right: clicks.right + 1 })
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  // const handleLeftClick = () => {
  //   const newClicks = { 
  //     ...clicks, 
  //     left: clicks.left + 1 
  //   }
  //   setClicks(newClicks)
  // }
  
  // const handleRightClick = () => {
  //   const newClicks = { 
  //     ...clicks, 
  //     right: clicks.right + 1 
  //   }
  //   setClicks(newClicks)
  // }
  
  // const handleLeftClick = () => {
  //   const newClicks = { 
  //     left: clicks.left + 1, 
  //     right: clicks.right 
  //   }
  //   setClicks(newClicks)
  // }

  // const handleRightClick = () => {
  //   const newClicks = { 
  //     left: clicks.left, 
  //     right: clicks.right + 1 
  //   }
  //   setClicks(newClicks)
  // }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
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
