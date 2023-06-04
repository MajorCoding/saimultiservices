import styles from "../styles/Option.module.css"
const Option = ({ icon, title, info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className={`ph ${icon}`}></i>
      </div>
      <div className={styles.content}>
        <p>{title}</p>
        <span>{info}</span>
      </div>
    </div>
  )
}

export default Option
