import React from "react"
import styles from "../styles/Breadcrumb.module.css"
import Container from "../containers/Container"
import Link from "next/link"
const Breadcrumb = ({ title }) => {
  return (
    <div className={styles.container}>
      <Container>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{title}</li>
        </ul>
      </Container>
    </div>
  )
}

export default Breadcrumb
