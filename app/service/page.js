import React from "react"
import Section from "../containers/Section"
import SubSection from "../containers/SubSection"
import Card from "../components/Card"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <Services />
    </div>
  )
}

const Services = () => {
  return (
    <Section title="Services">
      <SubSection title={"Necessary Certificates"}>
        <Link href="/service/income-certificate">
          <Card text="Income Certificate" />
        </Link>
        <Link href="/service/caste-certificate">
          <Card icon="ph-light ph-note" text="Caste Certificate" />
        </Link>
        <Link href="/service/caste-validity-certificate">
          <Card text="Caste Validity" />
        </Link>
        <Link href="/service/residential-certificate">
          <Card icon="ph-light ph-house-line" text="Residential Certificate" />
        </Link>
        <Link href="/service/nationality-and-domacile">
          <Card icon="ph-light ph-globe-hemisphere-east" text="Nationality and Domacile" />
        </Link>
        <Link href="/service/non-creamy-layer">
          <Card icon="ph-light ph-siren" text="Non Creamy Layer" />
        </Link>
        <Link href="/service/ews-certificate">
          <Card text="EWS Certificate" />
        </Link>
        <Card text="EWS Certificate" />
        <Card text="EWS Certificate" />
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

export default page
