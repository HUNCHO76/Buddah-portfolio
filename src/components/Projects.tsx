import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system for managing patient records, appointments, billing, and staff coordination. Streamlines hospital operations with an intuitive interface.",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    github: "https://github.com/HUNCHO76/Hospital-management-10",
    live: "#",
  },
  {
    title: "Crime Reporting System",
    description:
      "A web-based platform for citizens to report crimes and track investigation progress. Features incident mapping, real-time notifications, and secure data handling.",
    tech: ["Laravel", "React", "PostgreSQL", "Maps API"],
    github: "https://github.com/HUNCHO76/CrimeReportingSystem",
    live: "#",
  },
  {
    title: "Afya Nyumbani",
    description:
      "A mobile and web health care delivery platform connecting patients with healthcare services. Includes appointment booking, telemedicine, and prescription management features.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/HUNCHO76/Afya-Nyumbani",
    live: "#",
  },
  {
    title: "Tanzania Blood Connect",
    description:
      "A blood donation management platform connecting donors with hospitals. Features blood inventory tracking, urgent request notifications, and donor management dashboard.",
    tech: ["Laravel", "React", "MySQL", "WebSocket"],
    github: "https://github.com/HUNCHO76/tanzania-blood-connect",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-lg">03.</span>
            Projects
            <span className="hidden md:block h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
