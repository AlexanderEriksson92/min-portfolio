import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Code2, Cpu, Globe } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import Particles from './Particles';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';


const App = () => {
  const name = "Alexander Eriksson";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      title: "Fullstack E-Commerce Solution",
      description: "En modern webbutik med fokus på prestanda och användarupplevelse. Utvecklad med React och Vite, med en robust backend via Supabase för autentisering och databashantering. Innehåller full CRUD-funktionalitet, smart kundvagn och avancerad filtrering.",
      tech: ["React", "Vite", "Supabase", "CRUD"],
      link: "https://e-commerce-eight-ebon-76.vercel.app/",
      github: "https://github.com/AlexanderEriksson92/E-commerce",
      image: "/screenshots/E-commerceScreen.png"
    },
    {
      title: "SkyCast Weather Hub",
      description: "En väderapplikation med en 'Glassmorphism'-design. Använder OpenWeather API för realtidsdata och väderprognoser. Innehåller autocomplete-sökning, geolokalisering och dynamiska bakgrunder som skiftar beroende på aktuellt väderförhållande.",
      tech: ["React", "Vite", "OpenWeather API", "Glassmorphism", "CSS"],
      link: "https://weatherapp-theta-livid.vercel.app/",
      github: "https://github.com/AlexanderEriksson92/weatherapp",
      image: "/screenshots/WeatherScreen.png"
    },
    {
      title: "Retro Snake Classic",
      description: "Ett klassiskt arkadspel utvecklat i C# som fokuserar på logik och objektorienterad programmering. Spelet har ett integrerat high-score system, paus-funktion och skalbara svårighetsgrader för en autentisk spelupplevelse i .NET-miljö.",
      tech: ["C#", ".NET", "Visual Studio", "OOP"],
      link: "#",
      github: "https://github.com/AlexanderEriksson92/SnakeProject",
      image: "/screenshots/SnakeScreen.png"
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
        <div className="navbar-container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="logo">
            {name.toUpperCase()}<span className="dot">.</span>
          </motion.div>

          <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Om</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projekt</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          {/* Grön badge för status */}
          <motion.div className="status-badge">
            <span className="status-dot"></span>
            Tillgänglig för nya uppdrag
          </motion.div>

          <motion.h1>
            Fullstack-utvecklare som gillar att bygga<br />
            <span className="gradient-text-alt">moderna och responsiva lösningar</span>
          </motion.h1>

          <motion.p className="hero-p">
            Jag heter <span className="highlight-text">{name}</span> och fokuserar på att skapa webbsidor och applikationer som är snabba, tydliga och lätta att använda.
          </motion.p>

          <motion.div className="hero-actions">
            <a href="#projects" className="btn-main">Se mina projekt</a>
            <div className="hero-socials">
              <a href="https://github.com/AlexanderEriksson92"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/alexander-eriksson92/"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="scroll-indicator"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
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
            <img src="/about-profile-img.jpg" alt={name} />
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
              Jag är en utvecklare som gillar att bygga egna projekt och förstå hur allt hänger ihop. Jag har jobbat en del med <span className="highlight-text">C#</span> och <span className="highlight-text">.NET</span> på backend-sidan och tycker det är kul att koppla det till snygga och tydliga gränssnitt.
            </p>

            <p className="about-bio">
              Medan min vardag oftast kretsar kring <span className="highlight-text">React</span>, är jag även bekväm med ramverk som <span className="highlight-text">Angular</span> och <span className="highlight-text">Vue</span>. Det gör att jag snabbt kan sätta mig in i olika miljöer och välja rätt verktyg för varje unikt projekt.
            </p>

            <p className="about-bio">
              Förutom ren kodning har erfarenhet inom <span className="highlight-text">WordPress</span> och <span className="highlight-text">SEO</span>. Här ligger mitt fokus på prestanda och struktur – jag bygger webbplatser som inte bara ser bra ut, utan som också laddar snabbt och rankar högt på Google.
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
        <div className="footer-content">
          <motion.div className="contact-card" {...fadeInUp}>
            <h2>Låt oss skapa något nytt</h2>
            <a href="mailto:alexander@mail.com" className="email-link">
              <Mail /> AlexanderE1992@hotmail.com
            </a>
          </motion.div>
          <div className="footer-bottom">
            <p>© 2026 {name} — Byggd med React</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;