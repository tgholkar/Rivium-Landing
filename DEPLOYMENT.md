# Rivium Solutions - GitHub Pages Deployment Guide

This guide walks you through deploying the Rivium Solutions website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The Rivium website files in your local directory

---

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository settings:
   - **Repository name**: `rivium-solutions` (or your preferred name)
   - **Description**: "Rivium Solutions - Boutique Water & Environment Advisory"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license (we'll add these later if needed)
5. Click **Create repository**

---

## Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt and navigate to the Rivium directory:

```bash
cd /Users/AmitGandhi/techshot/Rivium
```

### Initialize Git Repository

```bash
# Initialize git in this directory
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Rivium Solutions website"
```

### Connect to GitHub and Push

Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name:

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/rivium-solutions.git
git branch -M main
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (in the repository menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

GitHub will now build and deploy your site. This usually takes 1-2 minutes.

---

## Step 4: Access Your Live Website

Your website will be available at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**Example:**
```
https://johndoe.github.io/rivium-solutions/
```

---

## Step 5: Configure Custom Domain (Optional)

If you want to use a custom domain like `www.riviumsolutions.com`:

### In GitHub:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**

### With Your Domain Provider:

Add these DNS records:

**For apex domain (riviumsolutions.com):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.riviumsolutions.com):**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

**Note:** DNS changes can take 24-48 hours to propagate.

---

## Step 6: Update Contact Form

The contact form currently has a placeholder. To make it functional:

### Option A: Use Formspree (Recommended - Free)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form
4. Copy your form endpoint
5. Edit `contact.html` line 94:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

### Option B: Use Netlify Forms

If you move to Netlify hosting, you can use their built-in form handling.

### Option C: Direct mailto link

Replace the form with a simple mailto link (less recommended):
```html
<a href="mailto:tejal@rivium.no?subject=Website Inquiry" class="btn-primary">
  Email Us Directly
</a>
```

---

## Step 7: Update Calendly Widget (Optional)

To add a working Calendly scheduling widget:

1. Set up your Calendly account at [calendly.com](https://calendly.com)
2. Get your scheduling link
3. Edit `contact.html` around line 215 and replace the placeholder with:

```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
```

Replace `YOUR_USERNAME` with your Calendly username.

---

## Updating Your Website

After making changes to your website locally:

```bash
# Check which files changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

---

## File Structure

```
Rivium/
├── index.html          # Homepage
├── about.html          # About/Founder page
├── services.html       # Services page
├── projects.html       # Projects/Case studies page
├── contact.html        # Contact page
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript for mobile menu
├── DEPLOYMENT.md       # This file
├── Claude.md           # Development guidelines
└── design_bried.md     # Design principles
```

---

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling GitHub Pages
- Check that **Settings → Pages** shows "Your site is published at..."
- Ensure the repository is Public

### CSS not loading?
- Check that `styles.css` is in the root directory
- Verify the file is committed: `git log --name-only`

### Form not working?
- You need to set up Formspree or another form handler (see Step 6)

### Want to test locally?
```bash
# Using Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000
```

---

## Performance & SEO Tips

### Add favicon
Create and add a `favicon.ico` file in the root directory.

### Add Open Graph meta tags
For better social media sharing, add to each HTML file's `<head>`:

```html
<meta property="og:title" content="Rivium Solutions">
<meta property="og:description" content="Boutique water and environmental advisory">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### Add Google Analytics (optional)
Add your Google Analytics tracking code before the closing `</body>` tag.

---

## Support

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/pages)
2. Review your repository's Actions tab for deployment errors
3. Ensure all files are properly committed and pushed

---

## Next Steps

1. **Add real client logos** to replace placeholders on `index.html`
2. **Add Tejal's photo** to replace photo placeholders
3. **Set up Formspree** for the contact form
4. **Configure Calendly** for scheduling
5. **Custom domain** if desired
6. **Add analytics** to track visitors

---

**Your website is now live! 🎉**

Visit your site and share the link with potential clients.
