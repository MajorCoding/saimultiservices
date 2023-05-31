import Container from "./containers/Container"
import Image from "next/image"
import styles from "./styles/NotFound.module.css"

export default function NotFound() {
  return (
    <Container>
      <div className={styles.container}>
        <Image src="/notfound.png" width={400} height={400} alt="404 error" />
        <h3>Ooops!! Page Not Found</h3>
        <p>This page does't exist Or is unavalable.</p>
      </div>
    </Container>
  )
}
