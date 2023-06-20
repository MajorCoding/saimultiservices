import React from "react"
import styles from "../styles/TwoColumn.module.css"
import Container from "./Container"
const TwoColumn = ({ title, desc, children }) => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.right}>
            <img src="/fill-out.png" alt="logo" />
          </div>
          <div className={styles.left}>
            <h2>Important Document Correction</h2>
            <p>
              We specialize in providing accurate and efficient legal document correction services.
              Our expert team is well-versed in handling a wide range of documents, ensuring that
              all necessary corrections are made with precision and attention to detail. Whether
              it's rectifying errors in your Aadhar Card, updating personal information, or
              resolving any other legal document issues, we are here to assist you.
            </p>
            <p>
              Trust us to navigate through the complexities of the process, saving you time and
              effort.
            </p>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TwoColumn
