import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState("uz");

  const navItems = {
    uz: [
      { name: "Bosh sahifa", href: "#home" },
      { name: "Men haqimda", href: "#about" },
      { name: "Ko‘nikmalar", href: "#skills" },
      { name: "Loyihalar", href: "#projects" },
      { name: "Sertifikatlar", href: "#certificates" },
      { name: "Aloqa", href: "#contact" },
    ],
    en: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Certificates", href: "#certificates" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-blue-700">Asadbek.dev</h1>

        <ul className="hidden md:flex gap-6 text-gray-700">
          {navItems[lang].map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-blue-700 font-medium transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setLang(lang === "uz" ? "en" : "uz")}
          className="px-3 py-1 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition text-sm"
        >
          {lang === "uz" ? "EN" : "UZ"}
        </button>
      </div>
    </nav>
  );
}
