import * as React from 'react'
import "./button.scss"
import ButtonProps from "./button-props"

const Button = ({onClick, title}: ButtonProps) => {
  return (
    <button className={"buttonCircle"} onClick={onClick}>
       <div>
         <img src={title} alt={"img"} />
       </div>
    </button>
  )
}

export default Button