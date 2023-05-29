import React from "react"
import style from "../styles/Card.module.css"
const Card = ({ icon, text, ...rest }) => {
  return (
    <div className={style.container} {...rest}>
      <div className={style.header}>
        <i className={icon ? icon : "ph-light ph-certificate"}></i>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Card
