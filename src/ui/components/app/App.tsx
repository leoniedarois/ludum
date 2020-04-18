import * as React from 'react'
import './App.scss'
import Button from "../button/button";

const showShop = () => {
  console.log("shop open")
}

const showMenu = () => {
  console.log("menu open")
}

const App = () => {
  return (
    <React.Fragment>
      <div className={"wrapperFifty"}>
        <div className={"item"}>
          top left

        </div>
        <div className={"item"}>
          top right
          <Button title="menu" onClick={showMenu}/>
        </div>
      </div>
      <div className={"wrapperFifty"}>
        <div className={"item bottom"}>
          bottom left
        </div>
        <div className={"item bottom"}>
          bottom right
          <Button title="shop" onClick={showShop}/>
        </div>
      </div>
    </React.Fragment>

  )
}

export default App
