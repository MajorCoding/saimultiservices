import Link from "next/link"
import Container from "../containers/Container"
import styles from "../styles/Breadcrumb.module.css"
import ContactOptions from "../components/ContactOptions"
import Owner from "../components/Owner"
import ContactStyle from "../styles/ContactUs.module.css"

export const metadata = {
  title: "Contact",
  description:
    "You are always welcome to contact us with questions and inquiries about our services.",
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
            <li>Contact</li>
          </ul>
        </Container>
      </div>
      <Info />
    </main>
  )
}

const Info = () => {
  return (
    <Container>
      <div className={ContactStyle.container}>
        <div className={ContactStyle.left}>
          <h1>Get in touch</h1>
          <p>24/7 will be answer your quetions and problems.</p>
          <p>
            You are always welcome to contact us with questions and inquiries about our services.
          </p>
          <h4>You can contact us directly at</h4>
          <ContactOptions />
        </div>
        <div className={ContactStyle.right}>
          <Owner />
        </div>
      </div>
    </Container>
  )
}

export default page
