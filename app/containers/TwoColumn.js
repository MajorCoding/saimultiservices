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
            <h2 className={styles.title}>महत्वाचे दस्तऐवज दुरुस्ती</h2>
            <p>
              आम्ही अचूक आणि कार्यक्षम कायदेशीर दस्तऐवज दुरुस्ती सेवा प्रदान करण्यात माहिर आहोत.
              आमची तज्ञ टीम कागदपत्रांची विस्तृत श्रेणी हाताळण्यात निपुण आहे, सर्व आवश्यक
              दुरुस्त्या अचूकपणे आणि तपशीलाकडे लक्ष देऊन केल्या गेल्या आहेत. तुमच्या आधार कार्डमधील
              त्रुटी सुधारणे असो, वैयक्तिक माहिती अपडेट करणे असो किंवा इतर कायदेशीर कागदपत्रांच्या
              समस्यांचे निराकरण असो, आम्ही तुम्हाला मदत करण्यासाठी आम्ही येथे आहोत.
            </p>
            <p>
              तुमचा वेळ आणि मेहनत वाचवून प्रक्रियेच्या गुंतागुंतीमधून मुक्त करण्यासाठी तयार आहोत.
            </p>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TwoColumn
