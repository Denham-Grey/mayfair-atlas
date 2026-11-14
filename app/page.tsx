import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Firm from "@/components/Firm";
import Hero from "@/components/Hero";
import InvestmentLens from "@/components/InvestmentLens";
import RevealObserver from "@/components/RevealObserver";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Firm />
        <Approach />
        <InvestmentLens />
        <Contact />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
