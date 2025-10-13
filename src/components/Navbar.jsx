import { useState } from "react";
import i18n from "../i18n";

export default function Navbar({ lang, setLang }) {
  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "certificates", href: "#certificates" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-blue-700">Asadbek.dev</h1>

        <ul className="hidden md:flex gap-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="hover:text-blue-700 font-medium transition"
              >
                {i18n[lang].header[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setLang(lang === "uz" ? "en" : "uz")}
          className="px-3 py-1 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition text-sm"
        >
          {i18n[lang].header.language}
        </button>
      </div>
    </nav>
  );
}
