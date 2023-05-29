import React from "react"
import Grid from "./Grid"
import style from "../styles/Sub.module.css"

const SubSection = ({ title, children }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h4>{title}</h4>
      </div>
      <Grid>{children}</Grid>
    </div>
  )
}

export default SubSection
