import { FiGlobe } from "react-icons/fi";
import { useTranslation } from "./TranslationContext";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "bn", name: "Bangla" },
  { code: "hi", name: "Hindi" },
];

const LanguageSelector = () => {
  const { changeLanguage } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <FiGlobe className="text-lg" />
        <span>Language</span>
      </button>

      <div className="absolute -right-3 mt-3 w-40 bg-[#ce6e19] rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 dark:border-gray-700">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="w-full text-left px-4 py-2 "
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
