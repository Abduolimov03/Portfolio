import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-700 mb-4"
      >
        Salom, men Asadbekman 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600 max-w-2xl mb-6"
      >
        Backend dasturchi va axborot xavfsizligi mutaxassisi.
        Django, PostgreSQL va xavfsiz web ilovalar yaratishda tajribaga egaman.
      </motion.p>

      <div className="flex gap-6">
        <a
          href="https://github.com/asadbek"
          target="_blank"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <Github size={30} />
        </a>
        <a
          href="https://linkedin.com/in/asadbek"
          target="_blank"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <Linkedin size={30} />
        </a>
      </div>
    </section>
  );
}
