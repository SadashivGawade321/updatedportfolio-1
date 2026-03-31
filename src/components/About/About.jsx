import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

// SVG Icons
// SVG Icons
const Target = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
)

const Award = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
)

const Shield = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)

const Code = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
)

const Download = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
)


const highlights = [
    {
        icon: <Target />,
        title: 'Problem Solver',
       
        color: 'primary'
    },
   
    {
        icon: <Code />,
        title: 'Software Developer',
        description: 'Python, C++, JavaScript, ',
        color: 'warning'
    }
]


function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="hex-grid"></div>
            <div className="container">
                <motion.div
                    ref={ref}
                    className={styles.aboutGrid}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Terminal Side */}
                    <motion.div
                        className={styles.terminalWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className={`terminal ${styles.aboutTerminal}`}>
                            <div className="terminal-header">
                                <span className="terminal-dot red"></span>
                                <span className="terminal-dot yellow"></span>
                                <span className="terminal-dot green"></span>
                                <span className="terminal-title">~/about-me</span>
                            </div>
                            <div className="terminal-body">
                                <span className="terminal-line">
                                    <span className="terminal-prompt">$ </span>
                                    <span className="terminal-command"> profile.txt</span>
                                </span>
                                <br /><br />
                                <span className={styles.outputSection}>
                                    <span className={styles.outputKey}>Name:</span> Sadashiv Gawade<br />
                                    <span className={styles.outputKey}>Role:</span> AIML DEVELOPER<br />
                                    <span className={styles.outputKey}>Education:</span> B.E. IT<br />
                                    <span className={styles.outputKey}>College:</span> Dr. Babasaheb Ambedkar Technological university<br />
                                    <span className={styles.outputKey}>CGPA:</span> 8.5 / 10<br />
                                    <span className={styles.outputKey}>Batch:</span> 2024 - 2027<br />
                                </span>
                                <br />
                                <span className="terminal-line">
                                    <span className="terminal-prompt"> </span>
                                    <span className="terminal-command"></span>
                                </span>
                                <br /><br />
                                <span className="terminal-output">
  "The future belongs to those<br />
  who build intelligent systems."<br />
  — Me
</span>
                            </div>
                        </div>

                       {/* Experience Badge */}
                        <motion.div
                            
                        >
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: '12px' }}>
                            <span className="section-tag">
                                <Shield />
                                About Me
                            </span>
                            <h2 className="section-title">
                                <span className="gradient-text"><br />Software Developer</span>
                            </h2>
                        </div>

                        <motion.div
                            className={styles.bioFloatingCard}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className={styles.bio}>
                                I'm Sadashiv Gawade — an Information Technology student with a strong proficiency in web development and an evolving expertise in Artificial Intelligence and Machine Learning. I have engineered multiple dynamic, responsive web applications using HTML, CSS, and JavaScript, with a focus on delivering intuitive user experiences and scalable solutions. I am deeply interested in integrating intelligent systems into modern web platforms to create data-driven and impactful applications. My objective is to advance as a software engineer and AI specialist.
                            </p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <div className={styles.highlightsGrid}>
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className={`${styles.highlightCard} ${styles[item.color]}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className={styles.highlightIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.highlightContent}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                            <motion.a
                                href="https://drive.google.com/file/d/17Cbw1KEREQJJ8mdxXONiqh7PlQW6z0V8/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Download Full Resume"
                            >
                                <Download />
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}

export default About


