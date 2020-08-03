import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import '../App.css';
import styled from "styled-components";

let rowNum = 25
let colNum = 50

const possibleNeighbours = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

const initRows = []
for (let i = 0; i < rowNum; i++) {
  initRows.push(Array.from(Array(colNum), () => 0))
}

const Cgol = () => {

    const Orden = styled.div`
    margin: 0 auto;
    width: 860px;
    `
    const Tittle = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;
    `
    
    const Buttons = styled.div`
    margin: 0 auto;
    width: 70%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 200px;
    `
    
    const Button = styled.button`
    width: 100px; 
    height: 40px;
    border: 1px solid grey;
    background: #f5f5f5;
    color: black;
    border-radius: 5px;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 1px;

    `
 
  const randomRows = []
for (let i = 0; i < rowNum; i++) {
  randomRows.push(Array.from(Array(colNum), () => Math.random() > 0.75 ? Math.random() : 0))
}

  const [nest, setNest] = useState(() => {
    return initRows
  })

  const [speed, setSpeed] = useState(1000)

  const [running, setRunning] = useState(false)

  const runningRef = useRef(running)
  runningRef.current = running

  const speedRef = useRef(speed)
  speedRef.current = speed

  const resetStuff = () =>{
    setNest(initRows)
    setSpeed(1000)
  }
  console.log(speedRef.current)

  const simulate = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setNest(n => {
      return produce(n, nestCopy => {
        for (let i = 0; i < rowNum; i++) {
          for (let j = 0; j < colNum; j++) {
            let neighbours = 0;
            possibleNeighbours.forEach(([x,y]) => {
              const neigI = i + x;
              const neigJ = j + y;
              if (neigI >= 0 && neigI < rowNum && neigJ >= 0 && neigJ < colNum){
                if(n[neigI][neigJ] > 0){
                neighbours += 1} 
              }
            })
            if (neighbours < 2 || neighbours > 3){
              nestCopy[i][j] = 0;
            }
            else if (n[i][j] === 0 && neighbours === 3){
              nestCopy[i][j] = Math.random();
            }
          }
        }
      })
    })
    setTimeout(simulate, speedRef.current)

  }, [])




return (
  <Orden> 
      
     <Tittle>
          <h1>C</h1><h1>O</h1><h1>N</h1><h1>W</h1><h1>A</h1><h1>Y</h1><h1>'</h1><h1>S</h1>
      <h1>G</h1><h1>A</h1><h1>M</h1><h1>E</h1>    <h1>O</h1><h1>F</h1>
      <h1>L</h1><h1>I</h1><h1>F</h1><h1>E</h1>
     </Tittle>
    <div className="grid">

      {nest.map((row, ix1) => (

        <div className="rows">
          {row.map((cell, ix2) => (

            <div key={`${ix1}-${ix2}`}
              onClick={!running ? () => {
                const newNest = produce(nest, nestCopy => {
                  if (nest[ix1][ix2] === 0) {
                    nestCopy[ix1][ix2] = Math.random()
                    console.log(cell)
                  }
                  else {
                    nestCopy[ix1][ix2] = 0
                  }
                })
                setNest(newNest)
              } : null} className={cell === 0 ? "dead" : cell > 0.8 ? "bro" : cell > 0.6 ? "color": cell > 0.4 ? "wtf" : cell > 0.2? "alive" : "ble"} />
                
          ))}
        </div>

      )
      )}
    </div>
    <Buttons className="buttons">
      <Button
        onClick={() => {
          setRunning(!running)
          runningRef.current = true
          simulate()
        }
          }>
        {running ? "Stop" : "Start"}
      </Button>
      <Button onClick={() => resetStuff()} >Reset</Button>
      <Button onClick={() => setNest(randomRows)}>Azar</Button>
      <Button onClick={() => speed > 4000 ? null : setSpeed(speed + 200)}>+ Lento</Button>
      <Button onClick={() => speed < 300 ? null : setSpeed(speed - 200)}>+ Rapido</Button>
    </Buttons>

  </Orden>

)
            }

export default Cgol;


