import React from "react"
import styles from "../styles/Item.module.css"
const Item = ({ icon, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <i className={icon}></i>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Item
