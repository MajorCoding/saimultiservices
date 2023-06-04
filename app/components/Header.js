"use client"
import React, { useState } from "react"
import Image from "next/image"
import Container from "../containers/Container"
import styles from "../styles/Header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SideDrawer from "./SideDrawer"

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }
  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <SideDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.svg" width={200} height={60} alt="logo" />
            </Link>
          </div>
          <div className={styles.burger} onClick={handleDrawerOpen}>
            <i className="ph ph-list"></i>
          </div>
          <nav className={styles.nav}>
            <Link href="/services" id={pathname == "/services" ? styles.active : "noActive"}>
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
    </header>
  )
}

export default Header
