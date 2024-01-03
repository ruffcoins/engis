// import BlogArea from "@/components/BlogArea";
import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
// import PropertiesArea from "@/components/PropertiesArea";
// import Testimonial from "@/components/Testimonial";
import WorkArea from "@/components/WorkArea";
import Head from "next/head";

export const metadata = {
  title: "ENGIS",
  description: "Enugu State Geographic Information Services",
  og: {
    url: "https://engis.com.ng",
    type: "website",
    title: "ENGIS",
    description: "Enugu State Geographic Information Services",
    image: "https://engis.com.ng/images/social-share.png",
  },
  twitter: {
    card: "summary_large_image",
    domain: "engis.com.ng",
    url: "https://engis.com.ng",
    title: "ENGIS",
    description: "Enugu State Geographic Information Services",
    image: "https://engis.com.ng/images/social-share.png",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:domain" content={metadata.twitter.domain} />
        <meta name="twitter:url" content={metadata.twitter.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>

      <Hero />
      <WorkArea />
      <Counter />
      {/* <PropertiesArea /> */}
      <Feature />
      {/* <Testimonial /> */}
      {/* <BlogArea /> */}
    </>
  );
}
