import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Code2, Cpu, Globe } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import Particles from './Particles';
import './App.css';

const App = () => {
  const name = "Alexander Eriksson";

  // --- SCROLL MOTOR (LENIS) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const projects = [
    {
      title: "Modern E-Commerce Store",
      description: "En högpresterande butik byggd i React med fokus på prestanda. Implementerade ett smart filtersystem och dynamisk bildhantering.",
      tech: ["React", "Node.js", "Framer Motion", "REST API"],
      link: "https://din-e-handel.vercel.app",
      github: "https://github.com/din-github",
      image: "/screenshots/E-commerceHomeScreen.png"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="portfolio">
      <Particles />
      <div className="bg-glow"></div>

      <nav className="navbar">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="logo">
          {name.toUpperCase()}<span className="dot">.</span>
        </motion.div>
        <div className="nav-links">
          <a href="#about">Om</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.span className="hero-tag">Tillgänglig för uppdrag</motion.span>
          <motion.h1>
            Hej, mitt namn är <br />
            <span className="gradient-text">{name}</span>
          </motion.h1>
          <motion.p className="hero-p">
            Fullstack-utvecklare som skapar digitala upplevelser med precision och passion.
          </motion.p>
          <motion.div className="hero-actions">
            <a href="#projects" className="btn-main">Se mina projekt</a>
            <div className="hero-socials">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="scroll-indicator">
          <ChevronDown />
        </motion.div>
      </section>

      <section id="about" className="section">
        <motion.h2 className="section-title" {...fadeInUp}>Om mig</motion.h2>
        <div className="about-wrapper">
          <motion.div 
            className="about-profile-img"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/profile-pic.jpg" alt={name} />
            <div className="img-border-decoration"></div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-bio">
              Jag är en mångsidig fullstack-utvecklare med en bred teknisk verktygslåda från <strong>.NET</strong> till <strong>React</strong>.
            </p>
            <p className="about-bio">
              Expertis inom <strong>WordPress</strong> och <strong>SEO</strong> för att skapa synliga resultat.
            </p>
            <div className="tech-stack-display">
              <div className="tech-card">
                <Code2 className="tech-icon" />
                <h3>Frontend</h3>
                <p>React, TypeScript, Vue, Angular</p>
              </div>
              <div className="tech-card">
                <Cpu className="tech-icon" />
                <h3>Backend</h3>
                <p>.NET, C#, PHP, Node.js, SQL</p>
              </div>
              <div className="tech-card">
                <Globe className="tech-icon" />
                <h3>CMS & SEO</h3>
                <p>WordPress, SEO, Performance Tuning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section">
        <motion.h2 className="section-title" {...fadeInUp}>Utvalda Projekt</motion.h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div key={index} className="project-row" {...fadeInUp}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-cta">
                  <a href={project.link} className="link-icon"><ExternalLink /> Live</a>
                  <a href={project.github} className="link-icon"><Github /> Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer section">
        <motion.div className="contact-card" {...fadeInUp}>
          <h2>Låt oss skapa något nytt</h2>
          <a href="mailto:alexander@mail.com" className="email-link">
            <Mail /> alexander@mail.com
          </a>
        </motion.div>
        <div className="footer-bottom">
          <p>© 2026 {name} — Byggd med React & Passion</p>
        </div>
      </footer>
    </div>
  );
};

export default App;