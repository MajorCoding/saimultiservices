"use client"
import React, { useRef, useState } from "react"
import styles from "../styles/Carousel.module.css"
import Container from "../containers/Container"
import Link from "next/link"

const Carousel = ({ children }) => {
  const [isScrollToRight, setIsScrollToRight] = useState(0)
  let box = useRef()
  const rightbtn = () => {
    let width = box.current.clientWidth
    box.current.scrollLeft = box.current.scrollLeft + width
    setIsScrollToRight(isScrollToRight + 1)
  }
  const lefttbtn = () => {
    let width = box.current.clientWidth
    box.current.scrollLeft = box.current.scrollLeft - width
    setIsScrollToRight(isScrollToRight - 1)
  }

  return (
    <div className={styles.carousel}>
      <Container>
        <div className={styles.header}>
          <h2>
            Services <span>(Necessary Certificates)</span>
          </h2>
          <Link href={"/services"}>
            View All <i className="ph ph-arrow-right"></i>
          </Link>
        </div>
      </Container>
      <div className={styles.container}>
        <div ref={box} className={styles.wrapper}>
          {children}
          {Boolean(isScrollToRight) && (
            <span className={styles.leftArrow} onClick={lefttbtn}>
              <i className="ph ph-caret-left"></i>
            </span>
          )}
          <span className={styles.rightArrow} onClick={rightbtn}>
            <i className="ph ph-caret-right"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Carousel
