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
            Backend dasturchi sifatida web-ilovalarni tezkor, barqaror va ishonchli qilishni o‘z oldimga maqsad qilganman. Django, REST API va PostgreSQL asosida ishlaydigan kompleks tizimlarni loyihalash, ishlab chiqish va optimallashtirish bo‘yicha tajribaga egaman.
        </p>

    </motion.section>
  );
}
