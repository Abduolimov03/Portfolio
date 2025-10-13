import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Men haqimda</h2>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Men — backend dasturchiman. Axborot xavfsizligi yo‘nalishida tahsil olganman va web-ilovalarni
          xavfsiz, tezkor hamda barqaror qilishga intilaman. Django, REST API va PostgreSQL asosida
          ishlaydigan tizimlarni loyihalash va optimallashtirish bilan shug‘ullanaman.
        </p>

    </motion.section>
  );
}
