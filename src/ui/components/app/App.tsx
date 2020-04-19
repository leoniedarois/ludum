import * as React from "react"
import {useState} from "react";
import "./App.scss"
import Button from "../button/button";
import Menu from "../menu/menu";
import HealthBar from "../healthBar/healthBar";

const App = () => {
  const [show, setShow] = useState(false);

  const showShop = () => {
    console.log("shop open");
  };

  const hideShop = () => {
    console.log("shop hide");
  };

  const showMenu = () => {
    setShow(true);
  };

  const hideMenu = () => {
    setShow(false)
  };

  return (
    <React.Fragment>
      <div className={"wrapperFifty"}>
        <div className={"item"}>
        </div>
        <div className={"item"}>
          <Button title={'assets/graphics/raw/home.png'} onClick={showMenu}/>
          <Menu display={show} onClick={hideMenu}/>
        </div>
      </div>
      <div className={"wrapperFifty"}>
        <div className={"item bottom"}>
          <div>
            <img src={"assets/graphics/raw/coin.png"} alt="coin"/>
            42
          </div>
          <HealthBar/>
        </div>
        <div className={"item bottom"}>
          <Button title={'assets/graphics/raw/rocket.png'} onClick={showShop}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
