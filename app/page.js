import BlogArea from "@/components/BlogArea";
import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import PropertiesArea from "@/components/PropertiesArea";
import Testimonial from "@/components/Testimonial";
import WorkArea from "@/components/WorkArea";

// <title>Karple</title>
// <meta name="description" content="Discover the ultimate carpooling experience with Karple! Our user-friendly platform helps you save money, reduce traffic, and make new friends while sharing the ride. Sign up now and join the carpool revolution. #Carpool #RideSharing #Karple">

// <!-- Facebook Meta Tags -->
// <meta property="og:url" content="https://karple.com">
// <meta property="og:type" content="website">
// <meta property="og:title" content="Karple">
// <meta property="og:description" content="Discover the ultimate carpooling experience with Karple! Our user-friendly platform helps you save money, reduce traffic, and make new friends while sharing the ride. Sign up now and join the carpool revolution. #Carpool #RideSharing #Karple">
// <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/karple.appspot.com/o/social%2Fsocial-share.jpg?alt=media&token=ee834658-b2b4-45ac-ba21-c961c83992ff">

// <!-- Twitter Meta Tags -->
// <meta name="twitter:card" content="summary_large_image">
// <meta property="twitter:domain" content="karple.com">
// <meta property="twitter:url" content="https://karple.com">
// <meta name="twitter:title" content="Karple">
// <meta name="twitter:description" content="Discover the ultimate carpooling experience with Karple! Our user-friendly platform helps you save money, reduce traffic, and make new friends while sharing the ride. Sign up now and join the carpool revolution. #Carpool #RideSharing #Karple">
// <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/karple.appspot.com/o/social%2Fsocial-share.jpg?alt=media&token=ee834658-b2b4-45ac-ba21-c961c83992ff">

export const metadata = {
  title: "ENGIS",
  description: "Enugu State Geographic Information System",
};

export default function Home() {
  return (
    <>
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
