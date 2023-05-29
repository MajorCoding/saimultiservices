import React from "react"
import Container from "../containers/Container"
import styles from "../styles/Bar.module.css"
const TopBar = () => {
  return (
    <div className={styles.bar}>
      <Container>
        <div className={styles.barContent}>
          <div className={styles.left}>
            <div className={styles.item}>
              <i className="ph ph-megaphone"></i>
              <p className="text-slate-400 text-sm font-medium">
                महाकृषि ऊर्जा अभियान कुसुम सौर कृषी पंप अर्ज नोंदणी - दिनांक: १६-०७-२०२३
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <i className="ph ph-envelope"></i>
              <p className="text-slate-400 text-sm font-medium">info@shreesaimultiservices.in</p>
            </div>
            <div className={styles.item}>
              <i className="ph ph-phone"></i>
              <p className="text-slate-400 text-sm font-medium">9545170763</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
