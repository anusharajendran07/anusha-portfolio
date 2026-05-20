# Troubleshooting Guide

## 🆘 Common Issues & Solutions

### Installation & Setup

#### Issue: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Why?** Corrupted cache or conflicting versions.

---

#### Issue: `npm run dev` doesn't start
**Solution:**
```bash
# Kill any process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Then try again
npm run dev
```

---

#### Issue: Permission denied errors on Mac/Linux
**Solution:**
```bash
# Use sudo (not recommended) OR
sudo npm install

# Better: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

### Development Issues

#### Issue: Changes not reflecting in browser
**Solution:**
```bash
# Restart dev server
# Stop with Ctrl+C, then:
npm run dev

# Or hard refresh browser:
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)
```

---

#### Issue: Styling not working (Tailwind CSS)
**Solution:**
1. **Check `tailwind.config.js`** - file paths correct?
2. **Verify content paths:**
   ```javascript
   content: [
     './index.html',
     './src/**/*.{js,jsx}',
   ]
   ```
3. **Clear cache:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

---

#### Issue: Animations not smooth / janky
**Solution:**
```javascript
// Reduce particle count in ParticleBackground.jsx
const particleCount = 20; // Reduced from 30

// Or disable particle background temporarily
// in App.jsx: {/* <ParticleBackground /> */}
```

**Why?** Too many particles on lower-end devices.

---

#### Issue: Custom cursor not working
**Solution:**
1. Check **CustomCursor.jsx** is imported in **App.jsx**
2. Verify `cursor: none` is set in CSS
3. Test in different browser (Firefox vs Chrome)

**Note:** Some browser extensions disable custom cursor.

---

### Build Issues

#### Issue: `npm run build` fails
**Solution:**
```bash
# Check for errors
npm run build

# If build-time error:
# 1. Check console for errors
# 2. Look for syntax errors
# 3. Verify imports are correct

# Try rebuilding from scratch
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

---

#### Issue: Build succeeds but files missing
**Solution:**
1. **Check `dist/` folder exists**
2. **Verify files are there:**
   ```bash
   ls -la dist/
   ```
3. **If missing, check `vite.config.js`:**
   ```javascript
   export default defineConfig({
     base: '/',  // or your base path
     build: {
       outDir: 'dist'
     }
   });
   ```

---

### Deployment Issues

#### Issue: Deploy successful but 404 errors
**Solution:**

**For Vercel/Netlify:**
```javascript
// vite.config.js should have:
base: '/'  // Not '/portfolio' unless subfolder deployment
```

**For GitHub Pages (subfolder):**
```javascript
// vite.config.js:
base: '/portfolio/'  // if at username.github.io/portfolio

// Also add to package.json:
"homepage": "https://username.github.io/portfolio"
```

---

#### Issue: Site deployed but styles missing (CSS not loaded)
**Solution:**
1. **Check base path** in `vite.config.js`
2. **Verify CSS file loaded** in Network tab
3. **If 404 on CSS:**
   ```javascript
   // vite.config.js
   base: '/portfolio/'  // Add correct base path
   ```

---

#### Issue: Contact form not working after deploy
**Solution:**
```javascript
// src/data/portfolio.js - verify keys are set:
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',     // Not placeholder!
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
};
```

**Test locally first:**
```bash
npm run dev  # Test form here
npm run build
npm run preview  # Test prod build
```

---

### Contact Form Issues

#### Issue: Contact form gives "EmailJS not configured" error
**Solution:**
1. **Go to emailjs.com**
2. **Sign up or log in**
3. **Create service** (Gmail recommended):
   - Add new service
   - Connect your Gmail account
   - Note the Service ID
4. **Create template:**
   - Add new template
   - Variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
   - Note Template ID
5. **Get Public Key:**
   - Account → API Keys
   - Copy Public Key
6. **Update `src/data/portfolio.js`** with all three values

**Test by submitting form** - should work now!

---

#### Issue: Form submits but email not received
**Solution:**
1. **Check SPAM folder** in email
2. **Verify template variables:**
   - Template uses `{{from_email}}`, not `{{email}}`
   - All variables wrapped in `{{}}`
3. **Check EmailJS dashboard:**
   - Email Activity log
   - See if email was sent (might be in logs)
4. **Test with EmailJS console:**
   - https://dashboard.emailjs.com/logs

---

#### Issue: Form button disabled or stuck on "Sending..."
**Solution:**
```javascript
// In Contact.jsx, reload the page:
window.location.reload();

// Or check browser console for errors:
// F12 → Console tab → Look for red errors
```

---

### Performance Issues

#### Issue: Portfolio loads slowly
**Solution:**
1. **Check build size:**
   ```bash
   npm run build
   # Check dist/ folder size (should be <500KB)
   ```

2. **Reduce animations:**
   - Lower particle count
   - Reduce animation duration
   - Disable particle background temporarily

3. **Check Network tab:**
   - F12 → Network tab
   - See what's slow
   - Large files? Images? Fonts?

4. **Optimize:**
   - Remove unused dependencies
   - Tree-shake unused code
   - Minimize images

---

#### Issue: Animations stutter on mobile
**Solution:**
```javascript
// ParticleBackground.jsx - reduce particles:
const particleCount = 15;  // Lower on mobile

// Or disable on mobile:
const isMobile = window.innerWidth < 768;
if (!isMobile) {
  // Show particle background
}
```

---

### Browser Compatibility

#### Issue: Works on Chrome but not Firefox/Safari
**Solution:**
```css
/* Add vendor prefixes in index.css */
.custom-cursor {
  -webkit-box-shadow: 0 0 10px rgba(0,229,255,0.3);
  box-shadow: 0 0 10px rgba(0,229,255,0.3);
}

/* For gradients */
background: linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%);
background: -webkit-linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%);
```

---

### Data Issues

#### Issue: Content not updating after changes
**Solution:**
```bash
# Changes to src/data/portfolio.js should auto-reload
# If not:

# 1. Save file
# 2. DevTools → F12
# 3. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# 4. Clear site data:
#    - F12 → Application → Storage → Clear All
#    - Reload
```

---

#### Issue: Special characters breaking layout
**Solution:**
```javascript
// Escape special characters:
title: 'My Project & Application'  // & stays as is
title: 'Test — En Dash'            // Em dash is fine

// But in HTML:
"It's the " + "best" + " project"  // Use backticks or escape
`It's the best project`            // Better with backticks
```

---

### Responsive Design Issues

#### Issue: Layout broken on mobile
**Solution:**
```bash
# Test with DevTools:
# F12 → Toggle device toolbar (Ctrl+Shift+M)
# Test on 375px (mobile), 768px (tablet), 1440px (desktop)

# Common mobile issues:
# - Text too small: Check font-size in Tailwind classes
# - Buttons not clickable: Increase touch target (min 48px)
# - Images overflow: Add max-w-full
```

---

#### Issue: Text unreadable on small screens
**Solution:**
```html
<!-- Use responsive text sizes -->
<h1 class="text-3xl md:text-5xl lg:text-7xl">
  Responsive Heading
</h1>

<!-- Mobile: 30px, Tablet: 48px, Desktop: 84px -->
```

---

### Git & GitHub Issues

#### Issue: `git push` fails
**Solution:**
```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Update portfolio content"

# If upstream not set:
git push -u origin main

# Or force (careful!)
git push -f origin main
```

---

#### Issue: GitHub Pages not updating
**Solution:**
```bash
# Wait 1-2 minutes for GitHub to build
# Check Actions tab in GitHub repo
# If failed, check logs for errors

# Force push if necessary:
npm run build
git add dist
git commit -m "Deploy"
git push origin main
git push origin --delete gh-pages  # If stuck
git push origin gh-pages  # Re-push
```

---

### Advanced Debugging

#### Enable Verbose Logging
```bash
# See all dev server logs
npm run dev -- --debug
```

#### Check React DevTools
```bash
# Install React DevTools extension in Chrome
# F12 → Components tab
# Inspect component tree
# Check props and state
```

#### Check Network Requests
```bash
# F12 → Network tab
# Check all requests
# See response times
# Find slow resources
```

---

## 📋 Quick Debug Checklist

When something breaks:

1. **Check console** (F12)
   - [ ] Any red errors?
   - [ ] Warnings?
   - [ ] Missing variables?

2. **Check file imports**
   - [ ] All components imported?
   - [ ] Data file path correct?
   - [ ] CSS files linked?

3. **Check syntax**
   - [ ] Missing commas?
   - [ ] Unclosed braces?
   - [ ] Wrong parentheses?

4. **Check dependencies**
   - [ ] All npm packages installed?
   - [ ] Correct versions?
   - [ ] Try `npm install` again?

5. **Clear cache**
   - [ ] Delete `node_modules/.vite/`?
   - [ ] Hard refresh browser?
   - [ ] Clear localStorage?

6. **Restart dev server**
   - [ ] Stop with Ctrl+C
   - [ ] `npm run dev`

---

## 🆘 Still Stuck?

### Get Help

1. **Check documentation**
   - README.md
   - QUICKSTART.md
   - Component files (comments)

2. **Search error message**
   - Google the exact error
   - GitHub issues
   - Stack Overflow

3. **Minimal example**
   - Create new component
   - Test in isolation
   - Gradually add complexity

4. **Community forums**
   - React Discord
   - Framer Motion Discord
   - Dev.to
   - Twitter Dev community

---

## 📞 Emergency Contacts

**For specific tools:**

- **Framer Motion**: discord.gg/framer
- **Tailwind CSS**: Discord community
- **React**: discord.gg/react
- **Vite**: GitHub discussions

---

## ✅ Prevention Tips

1. **Version control**
   - Commit often
   - Use descriptive messages
   - Revert if broken: `git revert <commit>`

2. **Test before deploy**
   - Test locally thoroughly
   - Test mobile view
   - Test production build
   - Ask a friend to test

3. **Keep backups**
   - Push to GitHub frequently
   - Keep old versions

4. **Document changes**
   - Update README
   - Comment complex code
   - Track what you changed

---

**Remember: Most issues are easily fixable. Stay calm and debug systematically! 🚀**
