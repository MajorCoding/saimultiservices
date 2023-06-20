import React from "react"
import Container from "../containers/Container"
import styles from "../styles/ContactUs.module.css"
import Link from "next/link"
const ContactUs = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>Contact us</h2>
            <p>Have a question or need assistance?</p>
            <p>Feel free to get in touch with our team. We are here to help you.</p>
            <div className={styles.source}>
              <Link target="_blank" href="tel:9545170763" className={styles.item}>
                <i className="ph ph-phone-call"></i>
                <span>+91-9545170763</span>
              </Link>
              <Link
                target="_blank"
                href="mailto:info@saimultiservices.com"
                className={styles.item}
              >
                <i className="ph ph-envelope"></i>
                <span>info@saimultiservices.com</span>
              </Link>
              <Link
                target="_blank"
                href="https://goo.gl/maps/4GLmBaeA9tyTabCVA"
                className={styles.item}
              >
                <i className="ph ph-map-pin"></i>
                <span>Near pariharclasses, Parbhani</span>
              </Link>
              <Link
                target="_blank"
                href="https://wa.me/message/LHM2SRWSWRGLD1"
                className={styles.item}
              >
                <i className="ph ph-whatsapp-logo"></i>
                <span>+91-9545170463</span>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mapouter}>
              <div>
                <iframe
                  className={styles.frame}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=parihar classes parbhani&t=&z=16&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
