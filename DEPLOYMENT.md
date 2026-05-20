# Deployment Guide

## Quick Deployment Options

### 🚀 Vercel (Recommended - Easiest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run build
vercel
```

3. Follow the prompts and your portfolio is live!

**Pros**: Free, fast, automatic HTTPS, easy updates
**URL**: `your-portfolio.vercel.app`

---

### 🌐 Netlify

1. Build the project:
```bash
npm run build
```

2. Option A - Using Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

3. Option B - Drag & Drop:
   - Go to [netlify.com](https://netlify.com)
   - Sign in/up with GitHub
   - Drag and drop the `dist/` folder
   - Done!

**Pros**: Free, easy CI/CD with GitHub, form handling
**URL**: `your-portfolio.netlify.app`

---

### 📦 GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',  // If deploying to username.github.io/portfolio
  // or leave base: '/' for username.github.io
  plugins: [react()],
});
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && git add dist -f && git commit -m 'deploy' && git subtree push --prefix dist origin gh-pages"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

**Pros**: Free, integrated with GitHub
**URL**: `username.github.io` or `username.github.io/portfolio`

---

### ☁️ AWS S3 + CloudFront

1. Create S3 bucket for your portfolio
2. Enable static website hosting
3. Build:
```bash
npm run build
```

4. Upload `dist/` folder to S3
5. Create CloudFront distribution for HTTPS
6. Point custom domain to CloudFront

**Pros**: Scalable, professional, custom domain friendly
**Cost**: ~$1/month

---

### 🐳 Docker Deployment

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

2. Build and run:
```bash
docker build -t anusha-portfolio .
docker run -p 3000:3000 anusha-portfolio
```

---

## Custom Domain Setup

### For Vercel:
1. Go to project settings
2. Domains → Add Domain
3. Point nameservers or add CNAME record

### For Netlify:
1. Go to Site settings
2. Domain management → Add domain
3. Update DNS records

### For GitHub Pages:
1. Create `CNAME` file in `public/` folder with your domain
2. Update DNS CNAME record pointing to `username.github.io`

---

## SSL Certificate

Most platforms provide **free SSL** automatically:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic
- ✅ AWS CloudFront: Free with ACM
- ✅ Docker: Use Nginx reverse proxy with Let's Encrypt

---

## Performance Monitoring

### Monitor your portfolio:
- **Vercel Analytics**: Built-in
- **Netlify Analytics**: `netlify.toml`
- **Google Analytics**: Add to `index.html`
- **PageSpeed Insights**: https://pagespeed.web.dev/

---

## CI/CD Automation

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
```

---

## SEO Optimization

Before deploying, ensure:
- ✅ Meta description in `index.html`
- ✅ Open Graph tags for social sharing
- ✅ Favicon added to `public/`
- ✅ Robots.txt for search engines
- ✅ Sitemap.xml (optional)
- ✅ Google Search Console verification

---

## Troubleshooting

### 404 errors after deployment?
- Check your build output in `dist/`
- Ensure base path is correct in `vite.config.js`

### Slow loading?
- Check bundle size: `npm run build --analyze`
- Images optimized?
- CSS/JS minified?

### Forms not working?
- EmailJS configured correctly?
- Public key exposed? ✅ (it's safe)
- Check browser console for errors

---

## Update Your Portfolio After Deployment

1. Update content in `src/data/portfolio.js`
2. Run `npm run build`
3. Redeploy with your platform's CLI or GitHub push

Most platforms auto-deploy on git push if connected!

---

## Contact Information

If you run into issues:
- Check platform documentation
- Review build logs
- Test locally with `npm run preview`

Happy deploying! 🚀
