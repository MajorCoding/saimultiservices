import Image from "next/image"
import React from "react"
import styles from "../styles/Owner.module.css"
const Owner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image src={"/tanaji.jpg"} width={240} height={240} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>Owner</span>
        <h3 className={styles.name}>Parmeshwar Kshirsagar</h3>
        <div className={styles.social}>
          <i className="ph ph-whatsapp-logo"></i>
          <i className="ph ph-facebook-logo"></i>
          <i className="ph ph-instagram-logo"></i>
        </div>
      </div>
    </div>
  )
}

export default Owner
