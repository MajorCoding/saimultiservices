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
        <Card text="Income Certificate" to="/service/income-certificate" />
        <Card icon="ph-light ph-note" text="Caste Certificate" to="/service/caste-certificate" />
        <Card text="Caste Validity" to="/service/caste-validity-certificate" />
        <Card
          icon="ph-light ph-house-line"
          text="Residential Certificate"
          to="/service/residential-certificate"
        />
        <Card
          icon="ph-light ph-globe-hemisphere-east"
          text="Nationality and Domacile"
          to="/service/nationality-and-domacile"
        />
        <Card icon="ph-light ph-siren" text="Non Creamy Layer" to="/service/non-creamy-layer" />
        <Card text="EWS Certificate" to="/service/ews-certificate" />
        <Card text="Nationality and Domacile" />
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
