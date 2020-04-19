import * as React from 'react'
import "./menu.scss"
import MenuProps from "./menu-props"
import classNames from 'classnames';

const Menu = ({display, onClick}: MenuProps) => {
  const menuClasses = classNames({
    "menu": true,
    "show": display
  });

  const overlayClass = classNames({
    "overlay": display
  });

  return (
    <React.Fragment>
      <div className={overlayClass}/>
        <div className={menuClasses}>
            <button className={"button"} onClick={onClick}>Back to the game</button>
            <button className={"button"}>Exit game</button>
        </div>
    </React.Fragment>

  )
}

export default Menu