import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import "./Skills.css";

const icons = {
  Languages: "💻",
  Frontend: "🎨",
  "Backend & Data": "⚙️",
  "Tools & Platforms": "🛠️",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-tag">Skills</span>
        <h2 className="section-heading">What I build with</h2>
        <motion.div
          className="skills__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              className="skills__card"
              variants={item}
              whileHover={{ y: -8, rotate: -0.5 }}
            >
              <span className="skills__icon">{icons[group.label]}</span>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
