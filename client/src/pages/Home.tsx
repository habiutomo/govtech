import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import ServiceCategories from "@/components/home/ServiceCategories";
import LifeEvents from "@/components/home/LifeEvents";
import ContactAndFAQ from "@/components/home/ContactAndFAQ";
import NewsAndUpdates from "@/components/home/NewsAndUpdates";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceHighlights />
      <ServiceCategories />
      <LifeEvents />
      <ContactAndFAQ />
      <NewsAndUpdates />
    </>
  );
};

export default Home;
