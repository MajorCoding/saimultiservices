"use client"
import Head from "next/head"
import { useParams } from "next/navigation"
import Breadcrumb from "@/app/components/Breadcrumb"
import Info from "@/app/components/Info"
import services from "../../fixtures/services.json"
import NotFound from "../../components/NotFound"

async function getData() {
  const params = useParams()
  const { slug } = params
  let data = services.filter((i) => i.slug === slug)
  return data[0]
}

export default async function page() {
  const data = await getData()
  return (
    <div>
      <Head>
        <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      {Boolean(data) && data.english.title ? (
        <>
          <Breadcrumb title={data.english.title} />
          <Info data={data.english} />
          <div className="divider"></div>
          <Info type="marathi" data={data.marathi} />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}