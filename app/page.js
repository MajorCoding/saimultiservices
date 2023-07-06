import Hero from "./components/Hero"
import TwoColumn from "./containers/TwoColumn"
import InfoCard from "./components/InfoCard"
import ContactUs from "./components/ContactUs"
import OwnerSection from "./components/OwnerSection"

export const metadata = {
  title: "Sai Multiservices",
  description: "Income Certificate, Cast Certificate, Non Creamy Lyer",
}

export default function Home() {
  return (
    <>
      <Hero />
      <TwoColumn>
        <div className="flex">
          <InfoCard
            title={"Aadhar Card"}
            list={[{ name: "Name" }, { name: "Address" }, { name: "phone number" }]}
          />
          <InfoCard
            title={"Voter Id"}
            list={[{ name: "Name" }, { name: "Address" }, { name: "phone number" }]}
          />
          <InfoCard
            icon={"ph-identification-card"}
            title={"Pan card"}
            list={[{ name: "Name" }, { name: "Address" }, { name: "phone number" }]}
          />
          <InfoCard
            title={"Passport"}
            list={[{ name: "Name" }, { name: "Address" }, { name: "phone number" }]}
          />
        </div>
      </TwoColumn>
      <ContactUs />
      <OwnerSection />
    </>
  )
}
