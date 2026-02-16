import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-lg">01.</span>
            About Me
            <span className="hidden md:block h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="mt-8 grid md:grid-cols-[3fr_2fr] gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full-Stack Developer who thrives on turning complex 
                problems into elegant, scalable web solutions. With deep expertise in 
                both backend and frontend technologies, I build applications that are 
                not only functional but performant and maintainable.
              </p>
              <p>
                My focus is on crafting{" "}
                <span className="text-foreground">clean architecture</span>,{" "}
                <span className="text-foreground">robust APIs</span>, and{" "}
                <span className="text-foreground">intuitive user interfaces</span>.
                I believe in writing code that other developers enjoy working with 
                and that scales as businesses grow.
              </p>
              <p>
                Whether it's building a RESTful API with Laravel, creating reactive 
                UIs with React, or architecting real-time systems with Node.js — I 
                bring the same commitment to quality and performance optimization.
              </p>
            </div>

            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <div className="text-6xl font-bold text-gradient opacity-60">{"</>"}</div>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-lg bg-primary/10 -z-10 blur-sm group-hover:blur-md transition-all" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
