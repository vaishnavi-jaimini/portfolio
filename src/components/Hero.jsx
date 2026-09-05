import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import "./Hero.css";

const rotatingWords = ["APIs", "interfaces", "automations", "AI integrations"];

const codeLines = [
  { indent: 0, text: "const vaishnavi = {" },
  { indent: 1, text: 'role: "Full-Stack Developer",' },
  { indent: 1, text: 'stacks: [".NET", "React", "Python"],' },
  { indent: 1, text: 'focus: "shipping things that work",' },
  { indent: 0, text: "};" },
];

const floatingBadges = ["React", "Angular", ".NET", "Python", "SQL"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Hero() {
  const heroRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };

    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__blob hero__blob--one" aria-hidden="true" />
      <div className="hero__blob hero__blob--two" aria-hidden="true" />
      <div className="hero__blob hero__blob--three" aria-hidden="true" />

      <div className="container hero__layout">
        <motion.div
          className="hero__inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__eyebrow" variants={item}>
            <span className="hero__wave">👋</span> Hi, I'm{" "}
            {profile.name.split(" ")[0]}
          </motion.p>

          <motion.h1 className="hero__title" variants={item}>
            <span className="gradient-text">{profile.title}</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={item}>
            {profile.yearsOfExperience} years building{" "}
            <span className="hero__rotator">
              <span key={wordIndex} className="hero__rotator-word">
                {rotatingWords[wordIndex]}
              </span>
            </span>{" "}
            across .NET, Java, Python and React — the occasional enterprise
            app nobody wants to touch included.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>·</span>
            <a href={`mailto:${profile.email}`}>Email</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {floatingBadges.map((badge, i) => (
            <span
              key={badge}
              className={`hero__badge hero__badge--${i}`}
            >
              {badge}
            </span>
          ))}

          <div className="hero__code-card">
            <div className="hero__code-topbar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__code-filename">profile.js</span>
            </div>
            <div className="hero__code-body">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line.text}
                  className="hero__code-line"
                  style={{ paddingLeft: `${line.indent * 18}px` }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.15 }}
                >
                  {line.text}
                </motion.div>
              ))}
              <span className="hero__code-cursor" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span />
      </motion.a>
    </section>
  );
}
