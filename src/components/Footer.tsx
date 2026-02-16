import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built with precision
      </p>
    </footer>
  );
};

export default Footer;
