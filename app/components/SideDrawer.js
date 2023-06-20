"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const SideDrawer = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false)

  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  const handleClose = () => {
    setIsActive(!isActive)
    onClose()
  }
  return (
    <div className={`backdrop ${isOpen ? "active" : ""}`} onClick={handleClose}>
      <div className="sidebar" onClick={handleContentClick}>
        <div className="">
          <Link href="/" onClick={onClose}>
            <Image src={"/logo.svg"} width={140} height={60} alt="logo" />
          </Link>
        </div>
        <nav className="sidebar-nav">
          <Link href="/services" onClick={onClose}>
            <span>Services</span>
          </Link>
          <Link target="_blank" href={"https://wa.me/message/LHM2SRWSWRGLD1"} className="button">
            <i className="ph ph-whatsapp-logo"></i>
            <p>Whatsapp</p>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default SideDrawer
