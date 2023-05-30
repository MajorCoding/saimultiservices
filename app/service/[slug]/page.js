"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Breadcrumb from "@/app/components/Breadcrumb"
import Info from "@/app/components/Info"
import services from "../../fixtures/services.json"

const page = () => {
  const params = useParams()
  const [data, setData] = useState({
    id: "1",
    slug: "income-certificate",
    english: {
      title: "Income Certificate",
      disc: "Income certificate is useful for various purposes like obtaining admissions in schools, getting a loan for education, saving your income from income tax, as well as to get various other certificates like Aadhar card, ration card, domicile certificate, caste certificate, etc.",
      eligiblity:
        "Any individual who is employed and a resident of Maharashtra is eligible to apply for a Maharashtra income certificate.",
      document: [
        {
          id: 1,
          title: "Age Proof",
          options: "Applicant Birth Certificate /School leaving Certificate/ Pan Card.",
        },
        {
          id: 2,
          title: "Address Proof",
          options:
            "Ration Card / Voter ID /Passport/ Driving License /Electricity bill/ Water bill / property tax receipt.",
        },
        {
          id: 3,
          title: "Photograph",
          options: "Applicant passport size photograph.",
        },
        {
          id: 4,
          title: "Identity Proof",
          options: "Aadhar Card / Voter ID /Driving License.",
        },
        {
          id: 5,
          title: "Proof of Income",
          options: "Form 16 if salaried, income tax return statement, salary slip.",
        },
      ],
    },
    marathi: {
      title: "उत्पन्नाचा दाखला",
      disc: "शाळांमध्ये प्रवेश मिळवणे, शिक्षणासाठी कर्ज घेणे, आयकरातून तुमचे उत्पन्न वाचवणे, तसेच आधार कार्ड, रेशनकार्ड, अधिवास प्रमाणपत्र, जातीचे प्रमाणपत्र इत्यादी विविध प्रमाणपत्रे मिळविण्यासाठी उत्पन्नाचे प्रमाणपत्र उपयुक्त आहे.",
      eligiblity:
        "नोकरदार आणि महाराष्ट्रातील रहिवासी असलेली कोणतीही व्यक्ती महाराष्ट्र उत्पन्न प्रमाणपत्रासाठी अर्ज करण्यास पात्र आहे.",
      document: [
        {
          id: 1,
          title: "वयाचा पुरावा",
          options: "अर्जदाराचा जन्म दाखला/शाळा सोडल्याचा दाखला/पॅन कार्ड.",
        },
        {
          id: 2,
          title: "पत्ता पुरावा",
          options:
            "रेशनकार्ड/मतदार ओळखपत्र/पासपोर्ट/ड्रायव्हिंग लायसन्स/वीज बिल/पाणी बिल/मालमत्ता कर पावती.",
        },
        {
          id: 3,
          title: "फोटो",
          options: "अर्जदाराचा पासपोर्ट आकाराचा फोटो.",
        },
        {
          id: 4,
          title: "ओळख पुरावा",
          options: "आधार कार्ड / मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स.",
        },
        {
          id: 5,
          title: "उत्पन्नाचा पुरावा",
          options: "पगारदार असल्यास फॉर्म 16, आयकर विवरणपत्र, पगार स्लिप.",
        },
      ],
    },
    whatsappLink: "",
    category: "certificate",
  })

  useEffect(() => {
    if (params.slug) {
      let filterData = services.filter((i) => i.slug === params.slug)
      setData(filterData[0])
    }
  }, [params.slug])

  return (
    <div>
      <Breadcrumb title={data.english.title} />
      <Info data={data.english} />
      <div className="divider"></div>
      <Info type="marathi" data={data.marathi} />
    </div>
  )
}

export default page
