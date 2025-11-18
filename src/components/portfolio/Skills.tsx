import { motion } from "framer-motion";
import i18n from "@/lib/i18n";

interface SkillsProps {
  lang: "uz" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const txt = i18n[lang];

  const skills = [
    { name: "Python / Django", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "Django REST Framework", level: 85, color: "from-emerald-500 to-emerald-600" },
    { name: "PostgreSQL", level: 80, color: "from-purple-500 to-purple-600" },
    { name: "Celery / Redis", level: 70, color: "from-orange-500 to-orange-600" },
    { name: "Docker", level: 65, color: "from-cyan-500 to-cyan-600" },
    { name: "Git / Linux", level: 75, color: "from-pink-500 to-pink-600" },
  ];

  return (
    <section id="skills" className="py-24 bg-section-bg relative">
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {txt.skillsTitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            {lang === "uz" ? "Professional ko'nikmalarim va texnologiyalar" : "My professional skills and technologies"}
          </p>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <motion.span
                  className="text-2xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative w-full bg-muted rounded-full h-4 overflow-hidden shadow-inner">
                <motion.div
                  className={`h-4 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2, 
                    duration: 1, 
                    ease: "easeOut" 
                  }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
