import React from "react"
import style from "../styles/Card.module.css"
import Link from "next/link"
const Card = ({ icon, text, to, ...rest }) => {
  return (
    <Link href={to ? to : "/"} className={style.container}>
      <div {...rest}>
        <div className={style.header}>
          <i className={icon ? icon : "ph-light ph-certificate"}></i>
        </div>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default Card
