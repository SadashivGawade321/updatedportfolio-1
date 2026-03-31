import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Education.module.css'

const GraduationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6m0 0v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4m20 0H2m20 0l-8.97-7.23a2 2 0 0 0-2.06 0L2 16" />
        <path d="M2 10l10-8.23a2 2 0 0 1 2.06 0L22 10" />
    </svg>
)

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
)

const ChevronLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
)

const ChevronRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
)

const ParticleBackground = ({ color }) => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 3,
        left: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
        xOffset: Math.random() * 100 - 50
    }))

    return (
        <div className={styles.particleContainer}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={styles.particle}
                    style={{
                        left: `${particle.left}%`,
                        width: particle.size,
                        height: particle.size,
                        background: color,
                        opacity: particle.opacity
                    }}
                    animate={{
                        y: ['-100px', '100vh'],
                        x: [0, particle.xOffset]
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            ))}
        </div>
    )
}

const educationData = [
    {
        id: 0,
        type: 'Degree',
        degree: 'B.E in Information Technology',
        institution: 'Dr. Babasaheb Ambedkar Technological University',
        year: '2024 - 2027',
        cgpa: 'Pursuing',
        status: 'In Progress',
        color: '#6366f1',
        lightColor: 'rgba(99, 102, 241, 0.15)',
        highlights: [
            'Core Competencies',
            'Data Structures & Algorithms',
            'Web Development',
            'Database Management',
            'AI/ML Fundamentals',
            'Data Science'
        ],
        description: 'Pursuing an undergraduate degree with focus on software development and emerging technologies. Strong academic performance demonstrating commitment to excellence.'
    },
    {
        id: 1,
        type: 'Diploma',
        degree: 'Diploma in Electronics and Telecommunication',
        institution: 'Dr. Babasaheb Ambedkar Technological University',
        year: '2021 - 2024',
        cgpa: '9 / 10',
        status: 'Completed',
        color: '#8b5cf6',
        lightColor: 'rgba(139, 92, 246, 0.15)',
        highlights: [
            'Electronics Fundamentals',
            'Circuit Design',
            'Telecom Basics',
            'Hands-on Lab Work',
            'Industry-Ready Skills'
        ],
        description: 'Completed diploma with excellent academic performance (9/10 CGPA) providing strong foundational knowledge in electronics and telecommunications with practical lab experience.'
    }
]

const Education = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    const [activeEducation, setActiveEducation] = useState(0)
    const [autoRotate, setAutoRotate] = useState(true)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    // Auto-rotate education cards every 6 seconds
    useEffect(() => {
        if (!autoRotate) return
        const interval = setInterval(() => {
            setActiveEducation((prev) => (prev + 1) % educationData.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [autoRotate])

    const currentEducation = educationData[activeEducation]

    const handlePrev = () => {
        setAutoRotate(false)
        setActiveEducation((prev) => (prev - 1 + educationData.length) % educationData.length)
    }

    const handleNext = () => {
        setAutoRotate(false)
        setActiveEducation((prev) => (prev + 1) % educationData.length)
    }

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.4, delay: 0.1 }
        }
    }

    return (
        <section id="education" className={styles.educationSection} ref={ref}>
            {/* Animated Background Elements */}
            <div className={styles.backgroundGlow} style={{ background: currentEducation.lightColor }}></div>
            <div className={styles.floatingOrb} style={{ background: currentEducation.color }}></div>
            
            {/* Particle Background */}
            <ParticleBackground color={currentEducation.color} />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.titleWrapper}
                >
                    <h2 className={styles.sectionTitle}>
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className={styles.subtitle}>Building expertise through continuous learning</p>
                </motion.div>

                <div className={styles.carouselContainer}>
                    <div className={styles.carouselWrapper}>
                        {/* Left Navigation */}
                        <motion.button
                            className={styles.navButton}
                            onClick={handlePrev}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous education"
                        >
                            <ChevronLeftIcon />
                        </motion.button>

                        {/* Center Card with Mouse Tracking */}
                        <div
                            className={styles.cardContainer}
                            onMouseMove={handleMouseMove}
                            style={{
                                background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, ${currentEducation.lightColor}30, transparent 80%)`
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`education-${activeEducation}`}
                                    className={styles.educationCard}
                                    style={{ borderColor: currentEducation.color }}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {/* Decorative Background */}
                                    <div className={styles.cardBackground} style={{ background: `linear-gradient(135deg, ${currentEducation.color}20, transparent)` }}></div>

                                    {/* Status Badge */}
                                    <motion.div
                                        className={styles.statusBadge}
                                        style={{ borderColor: currentEducation.color, color: currentEducation.color }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className={styles.statusDot}></span>
                                        {currentEducation.status}
                                    </motion.div>

                                    {/* Card Header */}
                                    <motion.div className={styles.cardHeader} variants={itemVariants}>
                                        <motion.div
                                            className={styles.iconWrapper}
                                            style={{ background: `linear-gradient(135deg, ${currentEducation.color}, #ec4899)` }}
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                        >
                                            <GraduationIcon />
                                        </motion.div>
                                        <div className={styles.typeAndTitle}>
                                            <motion.span
                                                className={styles.type}
                                                style={{ color: currentEducation.color }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {currentEducation.type}
                                            </motion.span>
                                            <h3 className={styles.degree}>{currentEducation.degree}</h3>
                                        </div>
                                    </motion.div>

                                    <motion.div className={styles.institution} variants={itemVariants}>
                                        {currentEducation.institution}
                                    </motion.div>

                                    {/* Meta Information */}
                                    <motion.div className={styles.meta} variants={itemVariants}>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Duration</span>
                                            <span className={styles.metaValue}>{currentEducation.year}</span>
                                        </div>
                                        <div className={styles.metaDivider}></div>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>CGPA</span>
                                            <span className={styles.metaValue} style={{ color: currentEducation.color }}>
                                                {currentEducation.cgpa}
                                            </span>
                                        </div>
                                    </motion.div>

                                    <motion.p className={styles.description} variants={itemVariants}>
                                        {currentEducation.description}
                                    </motion.p>

                                    {/* Highlights */}
                                    <motion.div className={styles.highlights} variants={itemVariants}>
                                        <h4 className={styles.highlightsTitle}>
                                            <StarIcon /> Key Areas
                                        </h4>
                                        <div className={styles.highlightsList}>
                                            {currentEducation.highlights.map((highlight, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    className={styles.highlightTag}
                                                    style={{ borderColor: currentEducation.color }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                                >
                                                    {highlight}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Navigation */}
                        <motion.button
                            className={styles.navButton}
                            onClick={handleNext}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next education"
                        >
                            <ChevronRightIcon />
                        </motion.button>
                    </div>

                    {/* Indicators */}
                    <motion.div
                        className={styles.indicators}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {educationData.map((edu, index) => (
                            <motion.button
                                key={index}
                                className={`${styles.indicator} ${index === activeEducation ? styles.activeIndicator : ''}`}
                                onClick={() => {
                                    setAutoRotate(false)
                                    setActiveEducation(index)
                                }}
                                aria-label={`View ${edu.type}`}
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.8 }}
                                style={{
                                    backgroundColor: index === activeEducation ? educationData[index].color : 'rgba(255,255,255,0.2)'
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Education
