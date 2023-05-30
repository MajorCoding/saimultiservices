"use client"
import React from "react"
import Breadcrumb from "@/app/components/Breadcrumb"
import Info from "@/app/components/Info"
import services from "../../fixtures/services.json"

async function getData(slug) {
  let data = services.filter((i) => i.slug === slug)
  return data[0]
}

export default async function page({ params: { slug } }) {
  const data = await getData(slug)
  return (
    <div>
      <Breadcrumb title={data.english.title} />
      <Info data={data.english} />
      <div className="divider"></div>
      <Info type="marathi" data={data.marathi} />
    </div>
  )
}
