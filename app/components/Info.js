import Image from "next/image"
import Container from "../containers/Container"
import styles from "../styles/Info.module.css"

const Info = ({ data, type }) => {
  console.log("Data: ", data)
  return (
    <Container>
      {data && (
        <div className={styles.container} id={type == "marathi" && styles.marathi}>
          <div className={styles.left}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.disc}>{data.disc}</p>
            <h4 className={styles.subTitle}>Eligibility</h4>
            <p className={styles.disc}>{data.eligiblity}</p>
            <h4 className={styles.subTitle}>Documents Required</h4>
            <ul className={styles.document}>
              {data.document.map((item) => {
                return (
                  <li key={item.title}>
                    {item.title} {item.options ? ":" : ""} <span>{item.options}</span>
                  </li>
                )
              })}
            </ul>
            <div className={styles.button}>
              <i className="ph ph-whatsapp-logo"></i>
              <p>{type == "marathi" ? "अधिक जाणून घेण्यासाठी" : "To Know more"} </p>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={"/certificate.jpg"} width={343} height={485} alt="certificate-sample" />
          </div>
        </div>
      )}
    </Container>
  )
}

export default Info
