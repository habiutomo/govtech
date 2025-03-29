import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("hero.title")}</h2>
          <p className="text-lg mb-6">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services">
              <a className="bg-white text-primary font-medium px-6 py-2 rounded-md hover:bg-neutral-lighter transition-colors">
                {t("hero.button.find")}
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-transparent border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-primary-light transition-colors">
                {t("hero.button.contact")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
