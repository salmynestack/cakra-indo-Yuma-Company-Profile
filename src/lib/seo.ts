import { company, fullAddress, siteUrl } from "@/data/company";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/hero-ruang-rapat.jpg`,
    description: company.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phoneHref,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${siteUrl}/images/hero-ruang-rapat.jpg`,
    "@id": `${siteUrl}#business`,
    url: siteUrl,
    telephone: company.phoneHref,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.street}, ${company.address.district}`,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.7028, // Estimasi Cilacap Utara
      longitude: 109.0322,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}
