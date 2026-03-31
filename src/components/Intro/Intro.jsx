import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Intro.module.css'

const Intro = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true)

    const codeSnippets = [
        'import numpy as np',
        'from tensorflow import keras',
        'model = Sequential()',
        'x = tf.constant([[1, 2], [3, 4]])',
        'def train(epochs):',
        'neural_network.fit()',
        'loss = mean_squared_error',
        'optimizer = Adam()',
        'activation = relu',
        'layers.Dense(128)',
    ]

    useEffect(() => {
        // Total intro duration: 4 seconds
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onComplete) onComplete()
        }, 4000)
        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.intro}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Animated Code Background */}
                    <div className={styles.codeBackground}>
                        {codeSnippets.map((code, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.codeSnippet}
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                    x: Math.random() * 200 - 100
                                }}
                                animate={{
                                    y: window.innerHeight + 100,
                                    opacity: [0, 0.6, 0.3, 0]
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 2,
                                    delay: idx * 0.3,
                                    ease: 'linear'
                                }}
                                style={{
                                    left: `${15 + (idx % 3) * 30}%`
                                }}
                            >
                                {code}
                            </motion.div>
                        ))}
                    </div>

                    {/* ASCII Neural Network Background */}
                    <motion.div
                        className={styles.networkContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.3, duration: 1.5 }}
                    >
                        <svg className={styles.neuralNetwork} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                            {/* Input Layer */}
                            {[0, 1, 2].map(i => (
                                <motion.g key={`input-${i}`}>
                                    <motion.circle
                                        cx="50"
                                        cy={50 + i * 100}
                                        r="8"
                                        fill="none"
                                        stroke="#FFA116"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                    />
                                </motion.g>
                            ))}

                            {/* Hidden Layer 1 */}
                            {[0, 1, 2, 3].map(i => (
                                <motion.g key={`hidden1-${i}`}>
                                    <motion.circle
                                        cx="150"
                                        cy={40 + i * 70}
                                        r="8"
                                        fill="none"
                                        stroke="#FFD60A"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                    />
                                </motion.g>
                            ))}

                            {/* Hidden Layer 2 */}
                            {[0, 1, 2, 3].map(i => (
                                <motion.g key={`hidden2-${i}`}>
                                    <motion.circle
                                        cx="250"
                                        cy={40 + i * 70}
                                        r="8"
                                        fill="none"
                                        stroke="#FF6B35"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.1 + i * 0.1 }}
                                    />
                                </motion.g>
                            ))}

                            {/* Output Layer */}
                            {[0, 1].map(i => (
                                <motion.g key={`output-${i}`}>
                                    <motion.circle
                                        cx="350"
                                        cy={75 + i * 100}
                                        r="8"
                                        fill="none"
                                        stroke="#FFA116"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.4 + i * 0.1 }}
                                    />
                                </motion.g>
                            ))}

                            {/* Connections - Input to Hidden1 */}
                            {[0, 1, 2].map(i =>
                                [0, 1, 2, 3].map(j => (
                                    <motion.line
                                        key={`conn1-${i}-${j}`}
                                        x1="58"
                                        y1={50 + i * 100}
                                        x2="142"
                                        y2={40 + j * 70}
                                        stroke="#FFA116"
                                        strokeWidth="0.5"
                                        opacity="0.4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 1.8, duration: 1 }}
                                    />
                                ))
                            )}

                            {/* Connections - Hidden1 to Hidden2 */}
                            {[0, 1, 2, 3].map(i =>
                                [0, 1, 2, 3].map(j => (
                                    <motion.line
                                        key={`conn2-${i}-${j}`}
                                        x1="158"
                                        y1={40 + i * 70}
                                        x2="242"
                                        y2={40 + j * 70}
                                        stroke="#FFD60A"
                                        strokeWidth="0.5"
                                        opacity="0.4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 2.2, duration: 1 }}
                                    />
                                ))
                            )}

                            {/* Connections - Hidden2 to Output */}
                            {[0, 1, 2, 3].map(i =>
                                [0, 1].map(j => (
                                    <motion.line
                                        key={`conn3-${i}-${j}`}
                                        x1="258"
                                        y1={40 + i * 70}
                                        x2="342"
                                        y2={75 + j * 100}
                                        stroke="#FF6B35"
                                        strokeWidth="0.5"
                                        opacity="0.4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 2.6, duration: 1 }}
                                    />
                                ))
                            )}
                        </svg>
                    </motion.div>

                    {/* Lightning Flash - Accelerated */}
                    <motion.div
                        className={styles.lightning}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0, 0.3, 0, 0.1, 0]
                        }}
                        transition={{
                            delay: 1.0,
                            duration: 0.5,
                            times: [0, 0.1, 0.2, 0.4, 0.5, 0.7, 1],
                            ease: "easeOut"
                        }}
                    />

                    {/* Cyan Edge Glow */}
                    <motion.div
                        className={styles.edgeGlow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    />

                    {/* Vertical Grid Lines */}
                    <div className={styles.gridLines}>
                        {[...Array(15)].map((_, i) => (
                            <motion.span
                                key={i}
                                className={styles.line}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.05 + i * 0.01, duration: 0.4 }}
                            />
                        ))}
                    </div>

                    {/* Name - Staggered Letter Animation (No Blur for Speed) */}
                    <motion.h1
                        className={styles.name}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.04,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                    >
                        {Array.from("SADASHIV GAWADE").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                        scale: 1.2
                                        // Removed blur for mobile performance
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    }
                                }}
                                className={styles.gradientChar}
                                style={{
                                    display: 'inline-block',
                                    whiteSpace: 'pre',
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Role - Fade in after name settles */}
                    <motion.p
                        className={styles.role}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                    >
                        AI/ML STUDENT — BUILDING INTELLIGENT SYSTEMS.
                        <br />
                        CRAFTING NEURAL NETWORKS: INNOVATIVE, PRECISE, IMPACTFUL.
                    </motion.p>

                    {/* Pulsing Dot */}
                    <motion.div
                        className={styles.dot}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.4, type: 'spring' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Intro
