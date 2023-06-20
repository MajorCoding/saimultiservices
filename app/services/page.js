import Section from "../containers/Section"
import SubSection from "../containers/SubSection"
import Card from "../components/Card"
import Link from "next/link"
import Container from "../containers/Container"
import styles from "../styles/Breadcrumb.module.css"
import HeroCard from "../components/HeroCard"
import services from "../fixtures/services.json"
import Grid from "../containers/Grid"
export const metadata = {
  title: "Services",
  description: "Income Certificate, Cast Certificate, Non Creamy Lyer",
}

const page = () => {
  return (
    <main>
      <div className={styles.container}>
        <Container>
          <ul className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Services</li>
          </ul>
        </Container>
      </div>
      <Section title={"Services"}>
        <div className="flex">
          {services.map((item) => {
            return (
              <HeroCard
                type={"link"}
                icon="ph-light ph-note"
                title={item.english.title}
                to={`/services/${item.slug}`}
              />
            )
          })}
        </div>
      </Section>
    </main>
  )
}

export default page
