import { motion } from "framer-motion";
import { Code2, Database, Rocket } from "lucide-react";
import i18n from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  lang: "uz" | "en";
}

export default function About({ lang }: AboutProps) {
  const txt = i18n[lang];

  const features = [
    {
      icon: Code2,
      title: lang === "uz" ? "Backend Development" : "Backend Development",
      desc: lang === "uz" ? "Django va REST API bo'yicha chuqur bilim" : "Deep expertise in Django and REST API",
    },
    {
      icon: Database,
      title: lang === "uz" ? "Database Management" : "Database Management",
      desc: lang === "uz" ? "PostgreSQL va Redis bilan murakkab tizimlar" : "Complex systems with PostgreSQL and Redis",
    },
    {
      icon: Rocket,
      title: lang === "uz" ? "Performance" : "Performance",
      desc: lang === "uz" ? "Tez va barqaror ilovalar yaratish" : "Building fast and reliable applications",
    },
  ];

  return (
    <section id="about" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {txt.header.about}
          </h2>
          <p className="max-w-3xl mx-auto text-foreground leading-relaxed text-lg">
            {txt.hero.aboutMe}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all shadow-md hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
