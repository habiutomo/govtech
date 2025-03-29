import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";
import SearchBar from "../common/SearchBar";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Official Government Banner */}
      <div className="bg-primary-dark text-white text-sm py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <span className="font-bold mr-2">{t("official.website")}</span>
              <button aria-label={t("official.learn.more")} className="text-xs underline focus:outline-none">
                {t("official.learn.more")}
              </button>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Header with Navigation */}
      <header className="bg-white border-b border-neutral-light">
        <div className="container mx-auto">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4 px-4">
            <Link href="/">
              <a className="flex items-center">
                <div className="flex items-center">
                  <svg 
                    className="h-10 mr-3 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 6V8H22V6L12 2Z" />
                    <path d="M4 10V20H20V10H4ZM16 14H8V12H16V14Z" />
                    <path d="M2 22H22V20H2V22Z" />
                  </svg>
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-primary">GovTech</h1>
                    <p className="text-sm text-neutral-medium">Government Services Portal</p>
                  </div>
                </div>
              </a>
            </Link>
            
            {/* Search Form */}
            <div className="hidden md:block flex-grow max-w-md mx-6">
              <SearchBar />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              aria-expanded={isMenuOpen} 
              aria-controls="navigation" 
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          {/* Main Navigation */}
          <nav 
            id="navigation" 
            className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-neutral-lighter`} 
            aria-label="Main Navigation"
          >
            <ul className="flex flex-col md:flex-row">
              <li className="group relative">
                <Link href="/">
                  <a className="block py-3 px-4 font-medium hover:bg-neutral-lighter md:hover:text-secondary md:hover:border-b-2 md:hover:border-secondary md:hover:py-[10px]">
                    {t("nav.home")}
                  </a>
                </Link>
              </li>
              <li className="group relative">
                <div className="relative">
                  <Link href="/services">
                    <a className="flex items-center py-3 px-4 font-medium hover:bg-neutral-lighter md:hover:text-secondary w-full text-left md:hover:border-b-2 md:hover:border-secondary md:hover:py-[10px]">
                      {t("nav.services")}
                      <i className="fas fa-chevron-down ml-1 text-xs"></i>
                    </a>
                  </Link>
                  <ul className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-white border border-neutral-light shadow-lg z-10">
                    <li>
                      <Link href="/categories/benefits-assistance">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.benefits")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/health-insurance">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.health")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/housing-community">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.housing")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/taxes-finance">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.taxes")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/jobs-education">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.jobs")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/travel-transportation">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.travel")}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a className="block py-2 px-4 hover:bg-neutral-lighter">
                          {t("categories.view.all")}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <Link href="/about">
                  <a className="block py-3 px-4 font-medium hover:bg-neutral-lighter md:hover:text-secondary md:hover:border-b-2 md:hover:border-secondary md:hover:py-[10px]">
                    {t("nav.about")}
                  </a>
                </Link>
              </li>
              <li className="group relative">
                <Link href="/contact">
                  <a className="block py-3 px-4 font-medium hover:bg-neutral-lighter md:hover:text-secondary md:hover:border-b-2 md:hover:border-secondary md:hover:py-[10px]">
                    {t("nav.contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Search (visible on mobile only) */}
          <div className="md:hidden px-4 py-3 border-t border-neutral-lighter">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay when menu is open */}
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </>
  );
};

export default Header;
