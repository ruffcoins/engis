import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import WorkArea from "@/components/WorkArea";
import Head from "next/head";

export const metadata = {
  title: "ENGIS",
  description: "Enugu State Geographic Information Services",
  openGraph: {
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
        <meta
          property="og:image"
          content="https://engis.com.ng/images/social-share.png"
        />
        <meta
          property="twitter:image"
          content="https://engis.com.ng/images/social-share.png"
        />
      </Head>

      <Hero />
      <WorkArea />
      <Counter />
      <Feature />
    </>
  );
}
