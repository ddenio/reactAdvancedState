import { useState } from 'react'
import './App.css'
import History from './history'
import Button from './button'

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
    console.log('left before', left)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    console.log('left after', updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
    // setRight(right + 1)
    // setTotal(left + right)
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
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      {/* <p>{allClicks.join(' ')}</p>
      <p>total {total}</p> */}
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
