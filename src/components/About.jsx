import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Counter from "./Counter";
import "./About.css";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "10", label: "Shipped projects" },
  { value: "5+", label: "Core stacks" },
];

const quickFacts = [
  { icon: "📍", label: "Location", value: profile.location },
  { icon: "💼", label: "Experience", value: `${profile.yearsOfExperience} years` },
  { icon: "🟢", label: "Status", value: "Open to opportunities" },
  { icon: "🧰", label: "Core stack", value: ".NET · React · Python" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-tag">About</span>
        <motion.div
          className="about__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about__text" variants={item}>
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.div className="about__facts" variants={item}>
            {quickFacts.map((fact) => (
              <div key={fact.label} className="about__fact-row">
                <span className="about__fact-icon">{fact.icon}</span>
                <div>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about__stats"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="about__stat-card"
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="about__stat-value">
                <Counter value={stat.value} />
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
