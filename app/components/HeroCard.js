import React from "react"
import styles from "../styles/HeroCard.module.css"
import Link from "next/link"
const HeroCard = ({ icon, type, title, to }) => {
  return (
    <Link href={to} className={type == "link" ? styles.cardLink : styles.card}>
      <div className={styles.poster}>
        <span></span>
        <span></span>
        <div className={styles.content}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <img src="/maha-gov.png" alt="satyamev-jayte" />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <span>By Maharashtra Gov.</span>
      </div>
    </Link>
  )
}

export default HeroCard
