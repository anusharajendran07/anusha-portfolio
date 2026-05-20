# Quick Start Guide

## 🚀 Getting Your Portfolio Online in 5 Minutes

### Step 1: Install Dependencies (1 min)
```bash
npm install
```

### Step 2: Run Locally (30 sec)
```bash
npm run dev
```
Your portfolio opens at `http://localhost:3000` 🎉

### Step 3: Customize Your Content (2 min)
Edit `src/data/portfolio.js` with your information:
- Name, title, bio
- Skills and proficiency levels
- Projects and descriptions
- Education, certifications, achievements
- Contact information

### Step 4: Deploy (1 min 30 sec)

#### Option A - Vercel (Fastest ⚡)
```bash
npm i -g vercel
vercel
```
Your portfolio is live at `your-portfolio.vercel.app`

#### Option B - Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

#### Option C - GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push origin main
```

---

## ✨ What's Already Included

✅ Modern glassmorphism design  
✅ Smooth animations with Framer Motion  
✅ Animated custom cursor  
✅ Particle background  
✅ Responsive design (mobile, tablet, desktop)  
✅ Typing animation for roles  
✅ Timeline for education/experience  
✅ Contact form integration (EmailJS)  
✅ Dark theme with cyan accents  
✅ Scroll progress indicator  
✅ Loading screen  
✅ Fully optimized  

---

## 🎨 Customization Checklist

- [ ] Update name and role in `src/data/portfolio.js`
- [ ] Update skills with your actual proficiencies
- [ ] Add your 3 projects with descriptions
- [ ] Update education and certifications
- [ ] Update social links (GitHub, LinkedIn, Email)
- [ ] Update location and contact info
- [ ] (Optional) Enable contact form with EmailJS

---

## 📱 Test Responsiveness

Use Chrome DevTools:
1. Press `F12`
2. Click device toggle (📱)
3. Test on different screen sizes

---

## 🔧 Key Files to Know

- `src/data/portfolio.js` - All your content
- `src/components/` - All page sections
- `tailwind.config.js` - Colors and theme
- `index.html` - HTML meta tags and SEO

---

## 📚 Learn More

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

---

## 🆘 Common Questions

**Q: How do I add more sections?**  
A: Create new component in `src/components/`, import in `App.jsx`

**Q: Can I change colors?**  
A: Edit colors in `tailwind.config.js`

**Q: How do I enable the contact form?**  
A: Follow EmailJS setup in README.md

**Q: Is it free to deploy?**  
A: Yes! Vercel, Netlify, and GitHub Pages are all free

**Q: Can I use a custom domain?**  
A: Yes, all platforms support custom domains

---

## 🎁 Bonus Tips

- **Add favicon**: Place favicon in `public/` folder
- **Add resume PDF**: Store in `public/` and link from Hero
- **Custom email domain**: Use EmailJS with custom domain
- **Analytics**: Add Google Analytics code to `index.html`
- **Sitemap**: Generate with https://www.xml-sitemaps.com/

---

## ⏱️ Timeline

- Installation: 1 minute
- Local testing: 2 minutes
- Content update: 5-10 minutes
- Deployment: 1-2 minutes
- **Total time: 10-15 minutes** 🎉

---

## 🎯 Next Steps After Deployment

1. Share your portfolio URL on LinkedIn
2. Add to your resume
3. Share on GitHub
4. Set up Google Search Console
5. Monitor with Google Analytics
6. Update content regularly

---

## 💡 Pro Tips

- Keep content updated quarterly
- Monitor performance with DevTools
- Test on real devices (phone, tablet)
- Get feedback from friends/mentors
- Track views with Analytics
- A/B test with different versions

---

**You're all set! 🚀 Your modern portfolio is ready to impress recruiters!**

Questions? Check README.md or DEPLOYMENT.md
