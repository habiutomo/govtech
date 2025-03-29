import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "ko", name: "한국어" }
  ];
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        id="langSelector" 
        className="flex items-center text-white text-sm" 
        aria-haspopup="true" 
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span>{currentLanguage.name}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-1 text-xs`}></i>
      </button>
      
      {isOpen && (
        <div 
          id="langDropdown" 
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10" 
          role="menu" 
          aria-labelledby="langSelector"
        >
          <ul>
            {languages.map(language => (
              <li key={language.code}>
                <button
                  className={`block w-full text-left px-4 py-2 ${language.code === i18n.language ? 'bg-neutral-lighter font-medium' : 'text-neutral-dark hover:bg-neutral-lighter'}`}
                  role="menuitem"
                  onClick={() => changeLanguage(language.code)}
                >
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
