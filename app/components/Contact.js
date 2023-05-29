import React from "react"
import styles from "../styles/Contact.module.css"
import Container from "../containers/Container"
import Item from "./Item"
const Contact = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Contact</h3>
          <div className={styles.data}>
            <Item icon={"ph ph-phone-call"} text={"+91-9545170763"} />
            <Item icon={"ph ph-envelope"} text={"info@shrimultiservices.in"} />
            <Item icon={"ph ph-map-pin"} text={"Juna Pedgaon road, Parbhani"} />
          </div>
        </div>
        <div className={styles.map}>
          <div className={styles.mapouter}>
            <div className={styles.mapouter.gmap_canvas}>
              <iframe
                className={styles.frame}
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=parihar classes parbhani&t=&z=16&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://2yu.co">2yu</a>

              <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
