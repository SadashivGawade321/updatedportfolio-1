import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import styles from './Hero.module.css'

// SVG Icons
const ArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)

const Terminal = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
)

const Shield = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)

const Lock = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

// Typewriter effect for roles
const roles = [
    "Web Developer",
    "AI/ML Specialist",
    "Data Science Enthusiast",
]

// Dynamic hero quotes - randomly selected on page load
const heroQuotes = [
    `AI Developer by passion, data scientist by curiosity. I build intelligent systems while constantly asking: "What patterns are hidden here?" — then I turn them into insights that matter.`,

    `The best intelligence comes from understanding data. I create models that learn — and analyze systems to push their limits. An AI enthusiast who builds with purpose and thinks in patterns.`,

    `Data is the new language. AI is its voice. Crafting intelligent solutions that inspire impact. I blend the art of data science with the power of machine learning — because smart systems shape the future.`,

    `Innovation doesn't wait for insights — it creates them. From raw data to intelligent predictions — I build with logic, train with precision, and deliver solutions that evolve.`,

    `In a world full of data, I choose to find meaning. Driven by curiosity, guided by algorithms. I transform raw information into intelligent decisions and ideas into scalable AI solutions.`,

    `Every model I build today improves decisions tomorrow. Born from curiosity, shaped by data. I'm a developer who asks "why?" and a data scientist who answers with evidence.`,

    `The line between data and intelligence is thin — I bridge it with AI. Building models that scale. Discovering patterns that matter. Where innovation meets intelligence, that's where you'll find me.`,

    `Some dream of intelligent systems. I'm building them — one model at a time. Data is my foundation. AI is my signature. Together, they create solutions worth trusting.`,

    `I am two minds in one — the analyst who explores and the engineer who builds. Data Scientist, AI Developer. Both perspectives in harmony. Creating systems that don't just run — they learn.`
];

// ============================================
// HOLOGRAPHIC CYBER TERMINAL - NEW DESIGN
// ============================================

// Animated typing terminal with real cursor
const HoloTerminal = () => {
    const [lines, setLines] = useState([])
    const [currentLine, setCurrentLine] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    const codeLines = [
        { text: '> Initializing system...', color: '#888', delay: 0 },
        { text: '> Target: sadashivgawade.dev', color: '#00ff88', delay: 100 },
        { text: '', color: '#fff', delay: 50 },
        { text: 'class AIMLinformed:', color: '#ff79c6', delay: 80 },
        { text: '    def __init__(self):', color: '#8be9fd', delay: 80 },
        { text: '        self.name = "Sadashiv"', color: '#f1fa8c', delay: 60 },
        { text: '        self.role = "AI/ML Student"', color: '#f1fa8c', delay: 60 },
        { text: '        self.status = "LEARNING"', color: '#50fa7b', delay: 60 },
        { text: '', color: '#fff', delay: 50 },
        { text: '> System initialized successfully.', color: '#00ff88', delay: 100 },
        { text: '> Ready to innovate ✓', color: '#50fa7b', delay: 150 },
    ]

    // Cursor blink
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)
        return () => clearInterval(cursorInterval)
    }, [])

    // Typing animation
    useEffect(() => {
        if (currentLine >= codeLines.length) return

        const line = codeLines[currentLine]

        if (currentChar < line.text.length) {
            const timeout = setTimeout(() => {
                setCurrentChar(prev => prev + 1)
            }, 30 + Math.random() * 20)
            return () => clearTimeout(timeout)
        } else {
            // Line complete, add to lines and move to next
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, { ...line, text: line.text }])
                setCurrentLine(prev => prev + 1)
                setCurrentChar(0)
            }, line.delay)
            return () => clearTimeout(timeout)
        }
    }, [currentLine, currentChar])

    return (
        <div className={styles.holoTerminal}>
            {/* Corner accents */}
            <div className={`${styles.cornerAccent} ${styles.topLeft}`} />
            <div className={`${styles.cornerAccent} ${styles.topRight}`} />
            <div className={`${styles.cornerAccent} ${styles.bottomLeft}`} />
            <div className={`${styles.cornerAccent} ${styles.bottomRight}`} />

            {/* Scan lines */}
            <div className={styles.holoScanlines} />

            {/* Glowing border */}
            <div className={styles.holoBorder} />

            {/* Header */}
            <div className={styles.holoHeader}>
                <div className={styles.holoHeaderLeft}>
                    <span className={styles.holoStatus} />
                    <span className={styles.holoTitle}>SYSTEM TERMINAL</span>
                </div>
                <div className={styles.holoHeaderRight}>
                    <span>v2.0.26</span>
                    <span className={styles.holoTime}>
                        {new Date().toLocaleTimeString('en-US', { hour12: false })}
                    </span>
                </div>
            </div>

            {/* Terminal body */}
            <div className={styles.holoBody}>
                {/* Completed lines */}
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        className={styles.holoLine}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className={styles.lineNumber}>{String(i + 1).padStart(2, '0')}</span>
                        <span style={{ color: line.color }}>{line.text}</span>
                    </motion.div>
                ))}

                {/* Currently typing line */}
                {currentLine < codeLines.length && (
                    <div className={styles.holoLine}>
                        <span className={styles.lineNumber}>
                            {String(lines.length + 1).padStart(2, '0')}
                        </span>
                        <span style={{ color: codeLines[currentLine].color }}>
                            {codeLines[currentLine].text.slice(0, currentChar)}
                        </span>
                        <span className={`${styles.holoCursor} ${showCursor ? styles.visible : ''}`}>█</span>
                    </div>
                )}
            </div>

            {/* Footer status bar */}
            <div className={styles.holoFooter}>
                <span className={styles.holoFooterItem}>
                    <span className={styles.pulsingDot} /> CONNECTED
                </span>
                <span className={styles.holoFooterItem}>ENCRYPTION: AES-256</span>
                <span className={styles.holoFooterItem}>FIREWALL: ACTIVE</span>
            </div>
        </div>
    )
}

// Radar/Network visualization behind terminal - NEURAL NETWORK VERSION
const NetworkRadar = () => {
    const nodes = [
        // Input layer (left)
        { x: 20, y: 25, layer: 'input' },
        { x: 20, y: 50, layer: 'input' },
        { x: 20, y: 75, layer: 'input' },
        // Hidden layer 1 (middle-left)
        { x: 40, y: 20, layer: 'hidden' },
        { x: 40, y: 50, layer: 'hidden' },
        { x: 40, y: 80, layer: 'hidden' },
        // Hidden layer 2 (middle-right)
        { x: 60, y: 30, layer: 'hidden' },
        { x: 60, y: 50, layer: 'hidden' },
        { x: 60, y: 70, layer: 'hidden' },
        // Output layer (right)
        { x: 80, y: 40, layer: 'output' },
        { x: 80, y: 60, layer: 'output' },
    ]

    // Create simple connections
    const connections = []
    
    // Input to Hidden1
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            connections.push([i, 3 + j])
        }
    }
    
    // Hidden1 to Hidden2
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            connections.push([3 + i, 6 + j])
        }
    }
    
    // Hidden2 to Output
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            connections.push([6 + i, 9 + j])
        }
    }

    return (
        <div className={styles.radarContainer}>
            {/* SVG for neural network connections */}
            <svg
                className={styles.neuralConnections}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}
            >
                <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA116" />
                        <stop offset="50%" stopColor="#FFD60A" />
                        <stop offset="100%" stopColor="#FF6B35" />
                    </linearGradient>
                </defs>
                
                {/* Draw connections between nodes */}
                {connections.map((conn, idx) => {
                    const fromNode = nodes[conn[0]]
                    const toNode = nodes[conn[1]]
                    return (
                        <line
                            key={`conn-${idx}`}
                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            stroke="url(#neuralGradient)"
                            strokeWidth="0.3"
                            opacity="0.3"
                        />
                    )
                })}

                {/* Draw nodes */}
                {nodes.map((node, idx) => (
                    <circle
                        key={`node-${idx}`}
                        cx={node.x}
                        cy={node.y}
                        r="1"
                        fill={node.layer === 'input' ? '#FFA116' : node.layer === 'output' ? '#FFD60A' : '#FF6B35'}
                        opacity="0.7"
                    />
                ))}
            </svg>
        </div>
    )
}

// Data stream effect
const DataStream = () => {
    return (
        <div className={styles.dataStream}>
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className={styles.streamLine}
                    style={{ left: `${10 + i * 15}%` }}
                    animate={{
                        y: ['-100%', '100%'],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 2 + Math.random(),
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            ))}
        </div>
    )
}

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0 })

    // Random quote selected once on page load
    const [quoteIndex] = useState(() => Math.floor(Math.random() * heroQuotes.length))

    // Typewriter effect for quote (Option E)
    const [typedQuote, setTypedQuote] = useState('')
    const [quoteTypingComplete, setQuoteTypingComplete] = useState(false)
    const [typingStarted, setTypingStarted] = useState(false)

    // Start typing after card animation completes (1s delay)
    useEffect(() => {
        const startDelay = setTimeout(() => {
            setTypingStarted(true)
        }, 1000)
        return () => clearTimeout(startDelay)
    }, [])

    // Typewriter animation
    useEffect(() => {
        if (!typingStarted) return
        const quote = heroQuotes[quoteIndex]
        if (typedQuote.length < quote.length) {
            const timeout = setTimeout(() => {
                setTypedQuote(quote.slice(0, typedQuote.length + 1))
            }, 25) // Speed: 25ms per character
            return () => clearTimeout(timeout)
        } else {
            setQuoteTypingComplete(true)
        }
    }, [typedQuote, quoteIndex, typingStarted])

    const firstName = "Sadashiv"
    const lastName = "Gawade"

    // Fetch GitHub stats
    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Use Token if available to avoid Rate Limits (60 vs 5000 req/hr)
                const token = import.meta.env.VITE_GITHUB_TOKEN
                const headers = {
                    'Accept': 'application/vnd.github.v3+json'
                }
                if (token) {
                    headers['Authorization'] = `token ${token}`
                }

                const response = await fetch('https://api.github.com/users/Karthigaiselvam-R-official', { headers })

                if (response.ok) {
                    const data = await response.json()
                    setGithubStats(prev => ({ ...prev, repos: data.public_repos }))
                } else {
                    console.error('GitHub API Error:', response.status)
                }
            } catch (err) {
                console.error('Error fetching GitHub stats:', err)
            }
        }
        fetchGitHubStats()
    }, [])

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const speed = isDeleting ? 50 : 100

        if (!isDeleting && displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000)
            return
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
            return
        }

        const timeout = setTimeout(() => {
            setDisplayText(prev =>
                isDeleting
                    ? prev.slice(0, -1)
                    : currentRole.slice(0, prev.length + 1)
            )
        }, speed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section id="home" className={styles.hero}>
            {/* Background Effects */}
            <div className={styles.matrixBg}></div>
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>
            <div className="scanline"></div>

            <div className={`container ${styles.heroContainer}`}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Status Badge */}
                    <motion.div
                        className={styles.statusBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.statusDot}></span>
                        <span>Available for Work</span>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        className={styles.nameWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className={styles.name}>
                            <span className={styles.firstName}>{firstName}</span>
                            <span className={styles.lastName}>{lastName}</span>
                        </h1>
                    </motion.div>

                    {/* Typewriter Role */}
                    <motion.div
                        className={styles.roleContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className={styles.rolePrefix}>{'>'} </span>
                        <span className={styles.role}>{displayText}</span>
                        <span className={styles.cursor}></span>
                    </motion.div>

                    {/* Description - COMBO: Neon Border + Typewriter + Glitch */}
                    <motion.div
                        className={styles.comboWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className={styles.comboCard}>
                            {/* Invisible placeholder to reserve full space */}
                            <p className={styles.comboPlaceholder} aria-hidden="true">
                                {heroQuotes[quoteIndex]}
                            </p>
                            {/* Visible typed text */}
                            <p
                                className={`${styles.comboText} ${quoteTypingComplete ? styles.comboGlitch : ''}`}
                                data-text={typedQuote}
                            >
                                {typedQuote}
                                {!quoteTypingComplete && <span className={styles.comboCursor}>|</span>}
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.a
                            href="#projects"
                            className={`btn ${styles.btnPrimary}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Terminal />
                            View Projects
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get In Touch
                            <ArrowRight />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* ====== NEW HOLOGRAPHIC TERMINAL VISUAL ====== */}
                <motion.div
                    className={styles.heroVisual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                >
                    {/* Background radar effect */}
                    <NetworkRadar />

                    {/* Data streams */}
                    <DataStream />

                    {/* Main holographic terminal */}
                    <HoloTerminal />

                    {/* === CREATIVE FLOATING ELEMENTS === */}

                    {/* Floating Terminal Commands */}
                    <motion.div
                        className={`${styles.floatingCmd} ${styles.cmdTop}`}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        $ nmap -sV
                    </motion.div>

                    <motion.div
                        className={`${styles.floatingCmd} ${styles.cmdBottom}`}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        $ sudo ./exploit
                    </motion.div>

                    {/* Port Badge - Left Side */}
                    <motion.div
                        className={styles.portBadge}
                        initial={{ opacity: 1 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <span className={styles.portLabel}>PORT</span>
                        <span className={styles.portNumber}>443</span>
                        <span className={styles.portStatus}>OPEN</span>
                    </motion.div>



                    {/* CVE Badge */}
                    <motion.div
                        className={styles.cveBadge}
                        animate={{
                            y: [-3, 3, -3],
                            boxShadow: [
                                '0 0 15px rgba(255,0,100,0.3)',
                                '0 0 25px rgba(255,0,100,0.5)',
                                '0 0 15px rgba(255,0,100,0.3)'
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <span className={styles.cveText}>CVE-2026</span>
                    </motion.div>

                    {/* Circuit Lines */}
                    <svg className={styles.circuitLines} viewBox="0 0 100 100">

                        <motion.circle
                            cx="180"
                            cy="-5"
                            r="3"
                            fill="#00ff88"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle
                            cx="200"
                            cy="-5"
                            r="3"
                            fill="#00d4ff"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                        />
                    </svg>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className={styles.scrollLine}></div>
                <span>Scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero
