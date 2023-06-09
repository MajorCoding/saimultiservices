import Image from "next/image"
import Container from "../containers/Container"
import styles from "../styles/Info.module.css"
import Link from "next/link"

const Info = ({ data, type }) => {
  return (
    <Container>
      {data && (
        <div className={styles.container} id={type == "marathi" ? styles.marathi : "english"}>
          <div className={styles.left}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.disc}>{data.disc}</p>
            <h2 className={styles.subTitle}>Eligibility</h2>
            <p className={styles.disc}>{data.eligiblity}</p>
            <h2 className={styles.subTitle}>Documents Required</h2>
            <ul className={styles.document}>
              {data.document.map((item) => {
                return (
                  <li key={item.title}>
                    {item.title} {item.options ? ":" : ""} <span>{item.options}</span>
                  </li>
                )
              })}
            </ul>

            <Link
              target="_blank"
              href="https://wa.me/message/LHM2SRWSWRGLD1"
              className={styles.button}
            >
              <i className="ph ph-whatsapp-logo"></i>
              <p>{type == "marathi" ? "अधिक माहिती जाणून घेण्यासाठी" : "For more details"} </p>
            </Link>
          </div>
          <div className={styles.right}>
            <Image
              src={"/certificate.jpg"}
              width={343}
              height={485}
              alt="certificate-sample"
              priority={true}
            />
          </div>
        </div>
      )}
    </Container>
  )
}

export default Info
