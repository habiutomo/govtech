import { useState, FormEvent } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className="relative" role="search" onSubmit={handleSubmit}>
      <input 
        type="search" 
        placeholder={t("search.placeholder")} 
        className="w-full py-2 px-4 pr-10 border border-neutral-light rounded-md"
        aria-label={t("search.placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        type="submit" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2" 
        aria-label={t("search.button")}
      >
        <i className="fas fa-search text-neutral-medium"></i>
      </button>
    </form>
  );
};

export default SearchBar;
