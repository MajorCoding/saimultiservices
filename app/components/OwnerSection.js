import React from "react"
import Container from "../containers/Container"
import styles from "../styles/OnwerSection.module.css"

const OwnerSection = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.gallary}>
            <figure className="item">
              <img src="/shop-2.png" alt="shop" />
            </figure>
            <figure className="item">
              <img src="/shop-1.jpg" alt="shop" />
            </figure>
            <figure className="item">
              <img src="/shop-3.jpg" alt="shop" />
            </figure>
          </div>
          <div className={styles.left}>
            <h2 className={styles.title}>आमच्या संस्थापक आणि मालकास भेटा</h2>
            <p>
              {" "}
              साई मल्टीसर्व्हिसेसमध्ये, आमचे दूरदर्शी संस्थापक,{" "}
              <span>श्री. परमेश्वर क्षीरसागर</span> उत्कृष्ट सेवा प्रदान करण्याची आणि ग्राहकांच्या
              अपेक्षा ओलांडण्याची तीव्र उत्कट इच्छा असलेले एक दूरदर्शी वेवस्थापक आहे. १०+ वर्षांहून
              अधिक अनुभव आणि अटूट समर्पणासह, श्री. क्षीरसागर सातत्याने ग्राहकांच्या अपेक्षांपेक्षा
              अधिक असाधारण सेवा देण्यासाठी वचनबद्ध आहेत.
            </p>
            <p>
              ग्राहक-केंद्रिततेवर सशक्त लक्ष केंद्रित करून, श्री. क्षीरसागर व्यवसायाच्या प्रत्येक
              पैलूमध्ये उत्कृष्टता प्रदान करण्याचा प्रयत्न करतात
            </p>
            <div className={styles.professor}>
              <div className={styles.photo}>
                <img src="/owner-photo.jpeg" alt="owner-photo" />
              </div>
              <div className="content">
                <h2>श्री. परमेश्वर क्षीरसागर</h2>
                <p>संस्थापक</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OwnerSection
