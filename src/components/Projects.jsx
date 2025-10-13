import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Student Payment Bot",
      desc: "Telegram bot to manage student payments, generate reports and statistics.",
      tech: "Aiogram, Django, PostgreSQL",
      github: "https://github.com/asadbek/student-payment-bot",
      demo: "#",
    },
    {
      title: "SSL & Port Scanner",
      desc: "Web app that checks SSL certificate validity, issuer and open ports.",
      tech: "Django, socket, ssl",
      github: "https://github.com/asadbek/ssl-port-scanner",
      demo: "#",
    },
    {
      title: "Mini CMS Blog",
      desc: "Simple CMS with authentication, posts, categories and comments.",
      tech: "Django, DRF, JWT",
      github: "https://github.com/asadbek/mini-cms",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">
          {t("projectsTitle") || "My Projects"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-400 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                {p.desc}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-semibold">Tech:</span> {p.tech}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border rounded-md text-sm border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
                {p.demo !== "#" ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 transition"
                  >
                    Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-3 py-1 bg-gray-300 text-gray-600 dark:bg-slate-700 dark:text-slate-400 rounded-md text-sm cursor-not-allowed"
                  >
                    No Demo
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
