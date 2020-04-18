import * as React from 'react'
import "./menu.scss"
import MenuProps from "./menu-props"
import classNames from 'classnames';

const Menu = ({display, onClick}: MenuProps) => {
  const menuClasses = classNames({
    "menu": true,
    "show": display
  });

  return (
    <div className={menuClasses}>
      <button className={"button"} onClick={onClick}>Back to the game</button>
      <button className={"button"}>Exit game</button>
    </div>
  )
}

export default Menu