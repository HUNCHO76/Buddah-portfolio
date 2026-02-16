import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Layout, Plug } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust server-side applications with Laravel and Node.js, featuring secure authentication, optimized databases, and clean REST APIs.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces with React. Focus on performance, accessibility, and delightful user experiences.",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "Design and implementation of scalable RESTful APIs with comprehensive documentation, versioning, and security best practices.",
  },
  {
    icon: Code2,
    title: "Full-Stack Solutions",
    description: "End-to-end web application development from database design to deployment, with a focus on scalable architecture and clean code.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-lg">04.</span>
            Services
            <span className="hidden md:block h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-6 rounded-lg border border-border hover:border-primary/30 transition-colors group"
              >
                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
