import React from "react"
import Container from "../containers/Container"
import styles from "../styles/Bar.module.css"
import Link from "next/link"
const TopBar = () => {
  return (
    <div className={styles.bar}>
      <Container>
        <div className={styles.barContent}>
          <div className={styles.left}>
            <div className={styles.item}>
              <p className="text-slate-400 text-sm font-medium">
                Want urgent any legal certificate? <span>Nikal Jayega.</span>
              </p>
              <i className="ph ph-thumbs-up"></i>
            </div>
          </div>
          <div className={styles.right}>
            <p>Stay connected </p>
            <div className={styles.social}>
              <Link target="_blank" href={"https://www.facebook.com/"}>
                <i className="ph ph-facebook-logo"></i>
              </Link>
              <Link target="_blank" href={"https://www.instagram.com/"}>
                <i className="ph ph-instagram-logo"></i>
              </Link>
              <Link target="_blank" href={"https://www.twitter.com/"}>
                <i className="ph ph-twitter-logo"></i>
              </Link>
              <Link target="_blank" href="https://wa.me/message/LHM2SRWSWRGLD1">
                <i className="ph ph-whatsapp-logo"></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
