import React from "react"
import Container from "../containers/Container"
import styles from "../styles/Hero.module.css"
import HeroCard from "./HeroCard"
import services from "../fixtures/services.json"
import Carousel from "./Carousel"
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1>
            आपले स्वागत आहे
            <br /> <span>श्री साई मल्टिसर्विसेस</span>
          </h1>
          <p>
            मध्ये, आपल्या विविध आवश्यकतांसाठी आम्ही एक व्यापक सेवा वितरण प्रदान करतो. उत्पन्नाच्या
            प्रमाणपत्रांपासून ते जात प्रमाणपत्रांपर्यंत आणि निवासी प्रमाणपत्रांपर्यंत, आपल्याला
            परिपूर्णता आणि विशेषज्ञतेने मदत करण्यासाठी आम्ही येथे आहोत . आपल्या कागदपत्रांची सुलभता
            आणि वेळ बचावा आमच्या विश्वसनीय उपायांद्वारे सोप्या करा. आमच्या विविध सेवांची तपासा करा
            आणि सुविधेचे अनुभव करा.
          </p>
        </div>
      </Container>
      <Carousel>
        {services.map((item) => {
          return (
            <HeroCard
              icon="ph-light ph-note"
              title={item.marathi.title}
              to={`/services/${item.slug}`}
            />
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero
