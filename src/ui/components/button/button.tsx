import * as React from 'react'
import "./button.scss"
import ButtonProps from "./button-props"

const Button = ({onClick, title}: ButtonProps) => {
  return <button className={"test"} onClick={onClick}>{title}</button>
}

export default Button