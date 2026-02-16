import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Express.js", "REST APIs", "Authentication", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "MVC Architecture", "API Integration", "Scalable Systems", "Docker", "CI/CD"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-lg">02.</span>
            Skills & Technologies
            <span className="hidden md:block h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <h3 className="font-mono text-primary text-sm mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-secondary-foreground transition-colors"
                    >
                      <span className="text-primary text-xs">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
