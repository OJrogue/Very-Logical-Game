import { useState } from "react";

function App() {
  const colors = ['#802BB1', '#3AAFA9','#F76C6C', '#25274D', '#3FEEE6']
  const [buttonColors, setColor] = useState(generateColors(colors))
  const [complete, setComplete] = useState(false)
  const [start, setStart] = useState(true)

  function generateColors(colors){
    let colorArr = []
    for (let i = 0; i < 100; i++){
      colorArr = [...colorArr, { id: i+1, color: randomColor(colors)}]
    }
    return colorArr
  }

  function randomColor(colors){
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function checkComplete(arr){
    return arr.every((btn) => btn.color === buttonColors[0].color)
  }

  const handleClick = (id) => {
    if(start || complete){
      return
    }

    let newButtonColor = buttonColors.map((clr) => clr.id === id ? {...clr, color:randomColor(colors)} : clr)
    setColor(newButtonColor)

    if(checkComplete(newButtonColor)){
      setComplete(true)
      console.log("Apsalar > Dassem")
    }
  }

  return (
    <div>
      <div className="container">
        {buttonColors.map((clr) => <button key={clr.id} style={{ backgroundColor: clr.color }} onClick={() => handleClick(clr.id)}></button>)}
      </div>
      {complete && <div className="popup">
        <h1 className="congratulations">Congratulations</h1>
        <button className="btn" onClick={() => {setComplete(false);setColor(generateColors(colors))}}>Play Again</button>
      </div>}
      {start && <div className="popup">
        <h1 className="congratulations">Game?</h1>
        <button className="btn" onClick={() => setStart(false)}>Play</button>
      </div>}
    </div>
  );
}

export default App;
