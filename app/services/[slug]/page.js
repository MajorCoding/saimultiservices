import Head from "next/head"
import Breadcrumb from "@/app/components/Breadcrumb"
import Info from "@/app/components/Info"
import services from "../../fixtures/services.json"
import NotFound from "../../components/NotFound"

export async function generateMetadata({ params }) {
  try {
    let data = services.filter((i) => i.slug === params.slug)
    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      }
    }

    return {
      title: data[0].english.title,
      description: data[0].english.disc,
      alternates: {
        canonical: `/services/${params.slug}`,
      },
    }
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }
}
async function getData(params) {
  let data = services.filter((i) => i.slug === params.slug)
  return data[0]
}

export default async function page({ params }) {
  const data = await getData(params)
  return (
    <>
      <Head>
        <title>Sling Academy</title>
        <meta name="description" content="I hope this tutorial is helpful for you" />
      </Head>
      <main>
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
      </main>
    </>
  )
}
