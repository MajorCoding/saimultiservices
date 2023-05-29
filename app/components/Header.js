import React from "react"
import Image from "next/image"
import Container from "../containers/Container"
import styles from "../styles/Header.module.css"
import Link from "next/link"

const Header = ({ setIsDrawerOpen }) => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={"/logo.svg"} width={200} height={60} alt="logo" />
            </Link>
          </div>
          <div className={styles.burger} onClick={setIsDrawerOpen}>
            <i className="ph ph-list"></i>
          </div>
          <nav className={styles.nav}>
            <Link href="/service">
              <span>Services</span>
            </Link>
            <span>Contact</span>
            <div className={styles.button}>
              <i className="ph ph-whatsapp-logo"></i>
              <p>Whatsapp</p>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Header
