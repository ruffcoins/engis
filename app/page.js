// import BlopenGraphArea from "@/components/BlopenGraphArea";
import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
// import PropertiesArea from "@/components/PropertiesArea";
// import Testimonial from "@/components/Testimonial";
import WorkArea from "@/components/WorkArea";
import Head from "next/head";

export const metadata = {
  metadataBase: new URL("https://engis.com.ng"),
  title: "ENGIS",
  description: "Enugu State GeopenGraphraphic Information Services",
  openGraph: {
    url: "https://engis.com.ng",
    type: "website",
    title: "ENGIS",
    description: "Enugu State GeopenGraphraphic Information Services",
    image: "/images/social-share.png",
  },
  twitter: {
    card: "summary_large_image",
    domain: "engis.com.ng",
    url: "https://engis.com.ng",
    title: "ENGIS",
    description: "Enugu State GeopenGraphraphic Information Services",
    image: "/images/social-share.png",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="openGraph:title" content={metadata.openGraph.title} />
        <meta
          property="openGraph:description"
          content={metadata.openGraph.description}
        />
        <meta property="openGraph:image" content={metadata.openGraph.image} />
        <meta property="openGraph:url" content={metadata.openGraph.url} />
        <meta property="openGraph:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:domain" content={metadata.twitter.domain} />
        <meta name="twitter:url" content={metadata.twitter.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.image} />
      </Head>

      <Hero />
      <WorkArea />
      <Counter />
      {/* <PropertiesArea /> */}
      <Feature />
      {/* <Testimonial /> */}
      {/* <BlopenGraphArea /> */}
    </>
  );
}
