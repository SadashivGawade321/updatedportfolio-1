# 🤖 Sadashiv Gawade - AI/ML Portfolio

> **AI/ML Student & Full Stack Developer**  
> *Building intelligent systems with neural networks, data science, and modern web technologies.*

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![AI/ML](https://img.shields.io/badge/Theme-AI%2FML-FFA116?style=for-the-badge)

A highly interactive, modern portfolio website built to showcase AI/ML projects, machine learning expertise, full-stack development skills, and educational background.

**🌐 Live Portfolio**: [updatedportfolio-1.vercel.app](https://updatedportfolio-1.vercel.app)

---

## ✨ Key Features

- **🎨 Modern Theme**: LeetCode Orange & Neural Network aesthetic with glassmorphism
- **📱 Fully Responsive**: Optimized for Desktop, Tablet, and Mobile devices
- **⚡ Interactive Animations**:
  - Animated intro sequence with AI/ML code rainfall and neural network visualization
  - 4-second delay between intro and hero for smooth transitions
  - Smooth scroll-triggered animations throughout
  - Interactive skill matrix visualization
  
- **🔧 Key Sections**:
  - **Hero**: Dynamic name animation with typewriter effect and neural network background
  - **Skills**: Visual skill matrix with AI/ML, Development, and Tools categories
  - **Projects**: Live GitHub integration showing your repositories
  - **Education**: Interactive carousel with particle effects
  - **Contact**: Functional contact form with Formspree integration
  - **Experience**: Professional timeline with wave animations

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.4.1
- **Animations**: Framer Motion v11
- **Styling**: CSS Modules with CSS Variables
- **Form**: Formspree integration
- **Icons**: Lucide React / Custom SVG
- **GitHub API**: Live project fetching

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/SadashivGawade321/updatedportfolio-1.git
   cd updatedportfolio-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env.local file** (for GitHub API)
   ```
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

4. **Start local server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/          # Responsive navigation
│   ├── Intro/           # Animated intro with neural network & code
│   ├── Hero/            # 3D interactive landing section
│   ├── About/           # Profile & resume
│   ├── Education/       # Carousel with particle effects
│   ├── Experience/      # Professional timeline
│   ├── Skills/          # Skill matrix visualization
│   ├── Projects/        # GitHub API integrated cards
│   ├── Contact/         # Formspree contact form
│   └── Footer/          # Social links & info
├── context/
│   └── ThemeContext.jsx # Theme management
├── styles/
│   └── global.css       # AI/ML theme variables & animations
└── main.jsx             # Entry point
```

## 🔧 Configuration

### Contact Form
The contact form uses **Formspree**. It's pre-configured to send emails to:
- Email: `24030331246501@dabtu.ac.in`

To change this, update in `src/components/Contact/Contact.jsx`:
```javascript
const FORMSPREE_ID = 'f/xdapzypr' // Replace with your form ID
```

### GitHub Projects
Projects are fetched live from GitHub. Update the username in `src/components/Projects/Projects.jsx`:
```javascript
const GITHUB_USERNAME = 'SadashivGawade321'
```

## 📦 Environment Variables

Create `.env.local` in the root directory:
```
VITE_GITHUB_TOKEN=ghp_your_token_here
```

This increases GitHub API rate limits from 60 to 5000 requests/hour.

## 🎨 Customization

All theme colors and animations are defined in `src/styles/global.css`:
```css
:root {
  --primary: #FFA116;        /* Orange */
  --secondary: #FF6B35;      /* Deep Orange */
  --accent: #FFD60A;         /* Yellow */
  --bg-dark: #0d1117;        /* Dark background */
  /* ... more variables ... */
}
```

## 📄 License

This project is licensed under the MIT License.

---

**Built with 💻 by [Sadashiv Gawade](https://github.com/SadashivGawade321)**  
AI/ML Student | Full Stack Developer | Data Science Enthusiast
