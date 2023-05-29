import React from "react"
import styles from "../styles/Footer.module.css"
import Container from "../containers/Container"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <Image src="/footer-logo.svg" width={180} height={60} alt="footer-logo" />
            </div>
            <div className={styles.right}>
              <div className={styles.box}>
                <h4>Timing</h4>
                <div className={styles.links}>
                  <i className="ph ph-clock"></i>
                  <span>All Day - 09am to 7pm</span>
                  <span>Sunday Closed</span>
                </div>
              </div>
              <div className={styles.box}>
                <h4>Address</h4>
                <div className={styles.links}>
                  <i className="ph ph-map-trifold"></i>
                  <span>Juna pedgao road, Near pariharclasses, parbhani - 431-401</span>
                </div>
              </div>
              <div className={styles.box}>
                <h4>Partner</h4>
                <div className={styles.links}>
                  <Image src="/digital-india.svg" width={150} height={80} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>© 2021 Shree Sai Multiservices Pvt. All rights reserved.</p>
            <p>
              Made with <i className="ph-fill ph-heart"></i> By Vinay
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
