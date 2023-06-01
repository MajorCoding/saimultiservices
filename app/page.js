import "normalize.css/normalize.css"
import Section from "./containers/Section"
import News from "./components/News"
import Card from "./components/Card"
import SubSection from "./containers/SubSection"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div>
      <Tranding />
      <Services />
      <Contact />
    </div>
  )
}

const Tranding = () => {
  return (
    <Section title="Tranding">
      <News text="Pradhan Mantri Kisan Urja Suraksha-evam-UtthaanMahabhiyan (PM-KUSUM) Scheme of MEDA" />
      <News text="MH-CET Registration - 2023" />
      <News text="Urja Suraksha-evam-UtthaanMahabhiyan (PM-KUSUM) Scheme of MEDA" />
    </Section>
  )
}

const Services = () => {
  return (
    <Section title="Services">
      <SubSection title={"Necessary Certificates"}>
        <Card text="Income Certificate" to="/services/income-certificate" />
        <Card icon="ph-light ph-note" text="Caste Certificate" to="/services/caste-certificate" />
        <Card text="Caste Validity" to="/services/caste-validity-certificate" />
        <Card
          icon="ph-light ph-house-line"
          text="Residential Certificate"
          to="/services/residential-certificate"
        />
        <Card
          icon="ph-light ph-globe-hemisphere-east"
          text="Nationality and Domacile"
          to="/services/nationality-and-domacile"
        />
        <Card icon="ph-light ph-siren" text="Non Creamy Layer" to="/services/non-creamy-layer" />
        <Card text="EWS Certificate" to="/services/ews-certificate" />
        <Card text="EWS Certificate" />
        <Card text="Nationality and Domacile" />
        <Card icon="ph-light ph-siren" text="Non Creamy Layer" />
      </SubSection>
      <SubSection title={"Legal Document Correction"}>
        <Card icon="ph-light ph-identification-card" text="Aadhar Card" />
        <Card icon="ph-light ph-identification-card" text="Pan Card" />
        <Card icon="ph-light ph-identification-card" text="Voting Card" />
        <Card icon="ph-light ph-identification-badge" text="Passport" />
        <Card icon="ph-light ph-identification-card" text="Reshan Card" />
      </SubSection>
      <div className="two-col">
        <SubSection title={"Travel"}>
          <Card icon="ph-light ph-train" text="Railway Ticket" />
          <Card icon="ph-light ph-bus" text="Bus" />
          <Card icon="ph-light ph-airplane" text="Air Plane" />
          <Card icon="ph-light ph-car" text="Car Rent" />
        </SubSection>
        <SubSection title={"Bills"}>
          <Card icon="ph-light ph-device-mobile" text="Mobile Recharge" />
          <Card icon="ph-light ph-television" text="Dish Recharge" />
          <Card icon="ph-light ph-lightning" text="Electricity Bill" />
          <Card icon="ph-light ph-identification-card" text="Reshan Card" />
        </SubSection>
      </div>
    </Section>
  )
}
