import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/HUNCHO76" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/abdulrahim-hussein-665a88336/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/b_u_d_d_a_h/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5" />
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
