import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";
import i18n from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface ContactProps {
  lang: "uz" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const txt = i18n[lang];

  return (
    <section id="contact" className="py-24 px-6 bg-section-bg relative">
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex p-4 bg-primary/10 rounded-full mb-6"
          >
            <Mail className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {txt.contactTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {txt.contactText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="p-8 shadow-2xl border-2">
            <form
              action="mailto:asadbekabduolimov33@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Input
                  name="name"
                  placeholder={txt.placeholderName}
                  required
                  className="h-12 text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder={txt.placeholderEmail}
                  required
                  className="h-12 text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Textarea
                  name="message"
                  placeholder={txt.placeholderMessage}
                  rows={6}
                  required
                  className="text-base resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 shadow-primary group"
                >
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  {txt.sendMessage}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="flex-1 group/tg"
                >
                  <a
                    href="https://t.me/asadbek101"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageSquare size={18} className="mr-2 group-hover/tg:scale-110 transition-transform" />
                    Telegram
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <Button 
                  variant="ghost" 
                  size="lg" 
                  asChild
                  className="text-muted-foreground hover:text-primary"
                >
                  <a
                    href="https://github.com/Abduolimov03"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
