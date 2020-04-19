import * as React from 'react'
import "./shop.scss"
import classNames from "classnames";
import ShopProps from "./shop-props"

const Shop = ({display}: ShopProps) => {

  const shopClass = classNames({
    "shop": true,
    "show": display
  });

  const overlayClass = classNames({
    "overlay": display
  });

  return (
    <React.Fragment>
      <div className={overlayClass}/>
      <div className={shopClass}>
        <img src={'assets/graphics/raw/convoy.png'} alt={"convoy"} />
      </div>
    </React.Fragment>
  )
}

export default Shop