import { createContext, useState, useEffect, useCallback } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [mounted, setMounted] = useState(false)

    // Initialize theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
        setMounted(true)
    }, [])

    // Toggle theme and save to localStorage
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('portfolio-theme', newTheme)
            document.documentElement.setAttribute('data-theme', newTheme)
            return newTheme
        })
    }, [])

    // Prevent theme flash on initial load
    if (!mounted) {
        return children
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
