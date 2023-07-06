import "./globals.css"
import Script from "next/script"
import Header from "./components/Header"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
import Link from "next/link"

export const metadata = {
  metadataBase: new URL("https://saimultiservices.vercel.app"),
  title: {
    default: "Sai Multiservices",
    template: `%s | Sai Multiservices`,
  },
  description: "Income Certificate, Cast Certificate, Non Creamy Lyer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://unpkg.com/@phosphor-icons/web" />
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />

        <Link target="_blank" href="https://wa.me/message/LHM2SRWSWRGLD1" className="whatsapp">
          <img src="/whatsapp.png" alt="whatsapp-logo" />
        </Link>
      </body>
    </html>
  )
}
