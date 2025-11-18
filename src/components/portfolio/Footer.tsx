import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-primary">Asadbek Abduolimov</span> —
          Backend Developer
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:asadbekabduolimov33@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/Abduolimov03"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/abduolimov03/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
