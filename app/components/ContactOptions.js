import React from "react"
import Option from "./Option"
import styles from "../styles/ContactOption.module.css"
const ContactOptions = () => {
  return (
    <div data-aos="fade-left" className={styles.container}>
      <Option icon="ph-phone" title="Phone" info="+91-9545170763" />
      <Option icon="ph-phone-disconnect" title="Telephone" info="02452-242077" />
      <Option
        data-aos="fade-up"
        icon="ph-map-trifold"
        title="Address"
        info="Sector seven, Pradhikarn, Nigdi"
      />
      <Option icon="ph-envelope-simple" title="Email" info="info@shreesaimultiservices.in" />
    </div>
  )
}

export default ContactOptions
