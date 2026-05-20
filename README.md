# Anusha R — Modern Interactive Portfolio Website

A stunning, modern, and highly interactive personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Featuring glassmorphism design, smooth animations, and a recruiter-friendly layout.

## 🚀 Features

- **Modern Design**: Glassmorphism + dark theme with elegant gradients and glowing accents
- **Interactive Animations**: Smooth page transitions, animated section reveals, and micro-interactions
- **Custom Cursor**: Animated cursor with glow effects and smooth tracking
- **Particle Background**: Dynamic animated particle system with connection lines
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Scroll Progress**: Visual scroll progress indicator
- **Typing Animation**: Dynamic typing effect for roles/titles
- **Timeline Layout**: Beautiful animated timeline for education and experience
- **Project Showcase**: Interactive project cards with hover effects
- **Contact Form**: Fully functional contact form with EmailJS integration
- **Dark Mode**: Premium dark theme with cyan accents
- **Performance Optimized**: Fast loading, optimized animations, lazy loading
- **Accessibility**: WCAG compliant with proper semantic HTML and focus management

## 📋 Sections

1. **Hero** - Eye-catching landing section with typing animation
2. **About** - Professional summary with stats and key information
3. **Skills** - Animated skill cards with progress bars
4. **Projects** - Interactive project showcase with tech stacks
5. **Journey** - Timeline of education, experience, and achievements
6. **Achievements** - Recognition and awards
7. **Certifications** - Professional certifications and languages
8. **Contact** - Contact form with terminal-style contact info
9. **Footer** - Simple footer with social links

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Vite 5** - Build tool and dev server
- **EmailJS** - Email form submission service
- **React Intersection Observer** - Scroll animation detection

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Configure EmailJS** (optional, for contact form):
   - Go to [emailjs.com](https://www.emailjs.com) and sign up
   - Create a service (e.g., Gmail)
   - Create an email template
   - Copy your credentials and update `src/data/portfolio.js`:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
};
```

3. **Start the development server:**
```bash
npm run dev
```

The portfolio will open at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Journey.jsx
│   ├── Achievements.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   ├── ScrollProgress.jsx
│   ├── LoadingScreen.jsx
│   └── ParticleBackground.jsx
├── data/
│   └── portfolio.js      # All portfolio content & data
├── hooks/
│   └── useCustom.js      # Custom React hooks
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.js` to update:
- Profile information (name, role, contact details)
- About section text and stats
- Skills with proficiency levels
- Projects with descriptions and tech stacks
- Timeline entries (education, experience)
- Achievements and certifications
- Languages

### Styling

- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Currently using Syne, DM Sans, and JetBrains Mono
- **Animations**: Edit component animation variants in each component file

### Add New Sections

1. Create a new component in `src/components/`
2. Import in `src/App.jsx`
3. Add to main section in JSX
4. Update data in `src/data/portfolio.js` if needed

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Vercel (recommended):
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to GitHub Pages:
Update `vite.config.js` with your repository name, then:
```bash
npm run build
# Commit and push to GitHub
```

## 📧 EmailJS Setup

To enable the contact form:

1. **Create EmailJS Account**: https://www.emailjs.com
2. **Add Email Service**:
   - Service name: Gmail (or your email provider)
   - Note your Service ID
3. **Create Email Template**:
   - Variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
   - Note your Template ID
4. **Get API Keys**: Copy your Public Key from Account → API Keys
5. **Update `src/data/portfolio.js`** with your credentials

## ⚙️ Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: SVG icons (no image assets)
- **Lazy Loading**: Intersection Observer for animations
- **CSS Purging**: Tailwind removes unused styles
- **Minification**: Automatic in production build

## 🔧 Development Tips

- **Hot Module Reload**: Changes auto-reload in dev mode
- **Inspect Elements**: Use browser DevTools to inspect Framer Motion animations
- **Component Preview**: Test individual components in isolation
- **Responsive Design**: Use mobile view in DevTools to test responsiveness

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 SEO

- Semantic HTML structure
- Meta tags in `index.html`
- Open Graph tags (add as needed)
- Mobile-friendly viewport meta tag
- Fast loading times for SEO ranking

## 🤝 Contributing

Feel free to fork this template and customize it for your portfolio!

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🙏 Credits

- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Modern frontend build tool
- **EmailJS**: Email service

## 📞 Support

For issues, questions, or suggestions, feel free to open an issue or contact the original creator.

---

**Made with ❤️ in Puducherry**

Happy coding! 🚀
