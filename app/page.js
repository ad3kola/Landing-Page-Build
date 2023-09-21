import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Thanks from "@/components/Thanks";

export default function Home() {
  return (
    <main className = 'overflow-hidden'>
      <Navbar />
      <HeroPage />
      <Services />
      <Stats />
      <Pricing />
      <Newsletter />
      <Thanks />
    </main>
  );
}
