import React from "react"
import Container from "./Container"
import section from "../styles/Section.module.css"

const Section = ({ title, desc, sub, children }) => {
  return (
    <section className={section.container}>
      <Container>
        <div className={section.wrapper}>
          <div className={section.header}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{sub}</p>
          </div>
          <div className={section.body}>{children}</div>
        </div>
      </Container>
    </section>
  )
}

export default Section
