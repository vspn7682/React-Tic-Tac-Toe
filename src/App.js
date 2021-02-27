import React, { useState } from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Icon from "./Components/Icon";


import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsArray = new Array(9).fill('empty')
const box = document.querySelector('.box')

const App = () => {

  //States
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState('')

  //Methods
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemsArray.fill('empty',0, 9)
  }

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, {type: "success"})
    }

    if (itemsArray[itemNumber] === 'empty') {
      itemsArray[itemNumber] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    } else {
      return toast('Box already filled', {type: 'error'})
    }

    checkWinner();
  }

  const changeBg = (itemNumber) => {
    {itemsArray[itemNumber].style.background = 'red'}
  }

  const checkWinner = () => {
    if (itemsArray[0] === itemsArray[1] && itemsArray[0] === itemsArray[2] && itemsArray[0] !== 'empty') {
      setWinMessage(`${itemsArray[0]} wins`)
    } else if (itemsArray[3] === itemsArray[4] && itemsArray[3] === itemsArray[5] && itemsArray[3] !== 'empty') {
      setWinMessage(`${itemsArray[3]} wins`)
    } else if (itemsArray[6] === itemsArray[7] && itemsArray[6] === itemsArray[8] && itemsArray[6] !== 'empty') {
      setWinMessage(`${itemsArray[6]} wins`)
    } else if (itemsArray[0] === itemsArray[3] && itemsArray[0] === itemsArray[6] && itemsArray[0] !== 'empty') {
      setWinMessage(`${itemsArray[0]} wins`)
    } else if (itemsArray[1] === itemsArray[4] && itemsArray[1] === itemsArray[7] && itemsArray[1] !== 'empty') {
      setWinMessage(`${itemsArray[1]} wins`)
    } else if (itemsArray[2] === itemsArray[5] && itemsArray[2] === itemsArray[8] && itemsArray[2] !== 'empty') {
      setWinMessage(`${itemsArray[2]} wins`)
    } else if (itemsArray[0] === itemsArray[4] && itemsArray[0] === itemsArray[8] && itemsArray[0] !== 'empty') {
      setWinMessage(`${itemsArray[0]} wins`)
    } else if (itemsArray[2] === itemsArray[4] && itemsArray[2] === itemsArray[6] && itemsArray[2] !== 'empty') {
      setWinMessage(`${itemsArray[2]} wins`)
    } 
  }


  return (
    <Container>
      <h1 className="heading">Tic Tac Toe</h1>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={6}>
          {winMessage ? (
            <div>
              <h2 className="subheading">
                {winMessage}
              </h2>
              <button onClick={reloadGame} className="btn">Reload</button>
            </div>
          ) : (
              <div>
                <h2 className="subheading">
                  {isCross ? 'Cross' : 'Circle'} turn
                </h2>
              </div>
          )}
          <div className="board">
            {itemsArray.map((item, index) => {
              return (
                <Card onClick={()=>changeItem(index)}>
                   <CardBody className="box">
                      <Icon name={item}/>
                   </CardBody>
                </Card>
             )
            })}
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default App;