import services from "./fixtures/services.json"
export default function sitemap() {
  const baseUrl = "https://saimultiservices.vercel.app"
  // Get all services
  let servicesUrls = services.map((service) => {
    return {
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...servicesUrls,
  ]
}
