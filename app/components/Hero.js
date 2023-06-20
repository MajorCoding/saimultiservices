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
            Welcome to <br /> <span>Shree Sai Multiservices</span>
          </h1>
          <p>
            Where we provide a comprehensive range of services to cater to your various
            requirements. From income certificates to caste certificates and residential
            certificates, we are here to assist you with efficiency and expertise. Simplify your
            paperwork and save time with our reliable solutions. Explore our diverse services and
            experience convenience at its best.
          </p>
        </div>
      </Container>
      <Carousel>
        {services.map((item) => {
          return (
            <HeroCard
              icon="ph-light ph-note"
              title={item.english.title}
              to={`/services/${item.slug}`}
            />
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero
