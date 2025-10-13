import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-10 bg-white dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-medium text-blue-700 dark:text-blue-400">Asadbek Abduolimov</span> — Backend Developer
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:asadbekabduolimov33@gmail.com"
            className="text-slate-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/Abduolimov03"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/abduolimov03/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
