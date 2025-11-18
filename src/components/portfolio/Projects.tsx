import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import i18n from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectsProps {
  lang: "uz" | "en";
}

export default function Projects({ lang }: ProjectsProps) {
  const txt = i18n[lang];

  const projects = [
    {
      title: txt.projects.smartFinance.title,
      desc: txt.projects.smartFinance.desc,
      tech: txt.projects.smartFinance.tech.split(", "),
      github: "https://github.com/Abduolimov03/smart-finance-MVT",
      demo: null,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: txt.projects.onlineShop.title,
      desc: txt.projects.onlineShop.desc,
      tech: txt.projects.onlineShop.tech.split(", "),
      github: "https://github.com/Abduolimov03/Online-Shop-API",
      demo: null,
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: txt.projects.socialNetwork.title,
      desc: txt.projects.socialNetwork.desc,
      tech: txt.projects.socialNetwork.tech.split(", "),
      github: "https://github.com/Abduolimov03/Social-Network",
      demo: null,
      gradient: "from-orange-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-section-alt relative">
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {txt.projectsTitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            {lang === "uz" ? "Mening eng yaxshi ishlarim" : "My featured work"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full flex flex-col border-2 hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl overflow-hidden group">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="relative">
                    <div className="absolute top-4 right-4 p-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    
                    <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.desc}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-3 pt-4 border-t">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo ? (
                      <Button size="sm" asChild className="flex-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" disabled className="flex-1">
                        {lang === "uz" ? "Demo yo'q" : "No Demo"}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
