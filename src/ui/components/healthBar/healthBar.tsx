import * as React from 'react'
import "./healthBar.scss"

const HealthBar = () => {
  return (
    <div className={"healthBar"}>
      <img src={'assets/graphics/raw/heart.png'} alt={"red heart"}/>
      <img src={'assets/graphics/raw/heart.png'} alt={"red heart"}/>
      <img src={'assets/graphics/raw/heart.png'} alt={"red heart"}/>
      <img src={'assets/graphics/raw/heart.png'} alt={"red heart"}/>
    </div>
  )
}

export default HealthBar