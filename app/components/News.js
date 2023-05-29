import React from "react"
import news from "../styles/News.module.css"
const News = ({ text }) => {
  return (
    <div className={news.container}>
      <i className="ph ph-newspaper"></i>
      <p className={news.text}>{text}</p>
    </div>
  )
}

export default News
