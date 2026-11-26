import type { Metadata } from "next";

export const site = {
  name: "常石工程科技",
  legalName: "常石工程科技有限公司",
  url: "https://changstone.vercel.app",
  phone: "0988-157-517",
  phoneHref: "tel:0988157517",
  email: "changstonetech@gmail.com",
  line: "https://lin.ee/UqhmIYE",
  facebook: "https://www.facebook.com/changstonetech/",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [{ url: "/images/brand/social-cover.png", width: 1200, height: 630, alt: "常石工程科技｜土木工程・排水改善・防潮石膏磚" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/brand/social-cover.png"],
    },
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/images/brand/mark.png`,
  telephone: "+886-988-157-517",
  email: site.email,
  areaServed: "臺灣北部地區",
  sameAs: [site.facebook, site.line],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+886-988-157-517",
    email: site.email,
    contactType: "工程諮詢",
    availableLanguage: "zh-Hant",
  },
};
