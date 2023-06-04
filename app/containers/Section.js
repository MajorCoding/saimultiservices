import React from "react"
import Container from "./Container"
import section from "../styles/Section.module.css"

const Section = ({ title, children }) => {
  return (
    <Container>
      <div className={section.container}>
        <div className={section.header}>
          <h1>{title}</h1>
        </div>
        <div className={section.body}>{children}</div>
      </div>
    </Container>
  )
}

export default Section
