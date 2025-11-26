import { useState } from "react";
import { Menu, X } from "lucide-react";
import i18n from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  lang: "uz" | "en";
  setLang: (lang: "uz" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const txt = i18n[lang];

  const navItems = [
    { key: "home" as const, href: "#home" },
    { key: "about" as const, href: "#about" },
    { key: "skills" as const, href: "#skills" },
    { key: "projects" as const, href: "#projects" },
    { key: "certificates" as const, href: "#certificates" },
    { key: "contact" as const, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md shadow-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">Asadbek.dev</h1>

        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {txt.header[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "uz" ? "en" : "uz")}
            className="font-medium"
          >
            {txt.header.language}
          </Button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col py-4 px-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block text-foreground hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {txt.header[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
