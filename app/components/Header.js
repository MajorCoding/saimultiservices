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
          <div className={styles.contact}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <i className="ph ph-map-pin-line"></i>
              </div>
              <div className="content">
                <h3>Address</h3>
                <Link target="_blank" href="https://goo.gl/maps/4GLmBaeA9tyTabCVA">
                  <p>Near pariharclasses, Parbhani</p>
                </Link>
              </div>
            </div>
            <span></span>
            <div className={styles.item}>
              <div className={styles.icon}>
                <i className="ph ph-phone-call"></i>
              </div>
              <div className="content">
                <h3>Call us now</h3>
                <Link href="tel:9545170763">
                  <p>+91-9545170763</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
