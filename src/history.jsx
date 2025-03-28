// const History = ({allClicks}) => {
//     if ({allClicks}.length === 0) {
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
//     return (
//       <div>
//         button press history: {allClicks.join(' ')}
//       </div>
//     )
//   }

const History = (props) => {
    console.log(props)
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

export default History