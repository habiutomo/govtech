import { useTranslation } from "react-i18next";
import { Link } from "wouter";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 bg-white z-50 p-4 md:hidden overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <a className="flex items-center" onClick={onClose}>
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
                <h1 className="text-xl font-bold text-primary">GovTech</h1>
                <p className="text-sm text-neutral-medium">Government Services Portal</p>
              </div>
            </div>
          </a>
        </Link>
        
        <button 
          onClick={onClose}
          aria-label="Close menu"
          className="p-2"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <nav className="mb-6">
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <a className="block py-2 text-lg font-medium" onClick={onClose}>
                {t("nav.home")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a className="block py-2 text-lg font-medium" onClick={onClose}>
                {t("nav.services")}
              </a>
            </Link>
            <ul className="pl-4 mt-2 space-y-2">
              <li>
                <Link href="/categories/benefits-assistance">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.benefits")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/health-insurance">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.health")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/housing-community">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.housing")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/taxes-finance">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.taxes")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/jobs-education">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.jobs")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/travel-transportation">
                  <a className="block py-1 text-neutral-medium" onClick={onClose}>
                    {t("categories.travel")}
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">
              <a className="block py-2 text-lg font-medium" onClick={onClose}>
                {t("nav.about")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="block py-2 text-lg font-medium" onClick={onClose}>
                {t("nav.contact")}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="border-t border-neutral-light pt-4">
        <a href="#" className="flex items-center py-2 text-neutral-medium">
          <i className="fas fa-user-circle mr-2"></i>
          <span>Sign In / Register</span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
