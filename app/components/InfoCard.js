import React from "react"
import styles from "../styles/InfoCard.module.css"
const InfoCard = ({ title, icon, list }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <i className={`ph ${icon ? icon : "ph-identification-badge"}`}></i>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>
        <span>Correction :</span>
        <ul>
          {list &&
            list.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default InfoCard
