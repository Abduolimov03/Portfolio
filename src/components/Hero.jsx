import { motion } from "framer-motion";
import i18n from "../i18n";

export default function Hero({ lang }) {
  const txt = i18n[lang];

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800
                 px-6 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4"
      >
        {txt.hero.greeting.split("Asadbek").map((part, i) => (
          <span key={i}>
            {part}
            {i === 0 && (
              <span className="text-blue-800 dark:text-blue-300">Asadbek</span>
            )}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed"
      >
        {txt.hero.aboutMe}
      </motion.p>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://github.com/Abduolimov03"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
          className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abduolimov03/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile"
          className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          {txt.projectsTitle}
        </a>
        <a
          href="/Asadbek_Resume.pdf"
          download
          className="px-6 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition"
        >
          {txt.cvButton}
        </a>
      </motion.div>
    </section>
  );
}
