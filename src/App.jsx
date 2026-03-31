import { useState, useEffect, lazy, Suspense } from 'react'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'

// Lazy Load heavy components below the fold
const About = lazy(() => import('./components/About/About'))
const Education = lazy(() => import('./components/Education/Education'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function App() {
    const [introComplete, setIntroComplete] = useState(false)
    const [showContent, setShowContent] = useState(false)

    // Delay showing Hero after Intro completes
    useEffect(() => {
        if (introComplete) {
            const timer = setTimeout(() => {
                setShowContent(true)
            }, 1500) // 1.5 second delay
            return () => clearTimeout(timer)
        }
    }, [introComplete])

    // Handle hash-based URL navigation after intro + lazy load complete
    useEffect(() => {
        if (showContent && window.location.hash) {
            // Delay to ensure lazy-loaded components have rendered
            const timer = setTimeout(() => {
                const id = window.location.hash.substring(1)
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [showContent])

    return (
        <div className={styles.app}>
            {/* Full-Screen Intro Animation */}
            {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

            {showContent && (
                <>
                    <div className="bg-glow"></div>
                    <Navbar />
                    <main>
                        <Hero />

                        {/* Defer loading of non-critical sections */}
                        <Suspense fallback={<div style={{ height: '100px' }}></div>}>
                            <About />
                            <Education />
                            <Experience />
                            <Skills />
                            <Projects />
                            <Contact />
                        </Suspense>
                    </main>

                    <Suspense fallback={null}>
                        <Footer />
                    </Suspense>
                </>
            )}
        </div>
    )
}

export default App
