# Surrey Dental Studio — Dubai Website

Premium 11-page dental clinic website inspired by the Clinova design template, fully customised for the UAE market with local SEO, three Dubai locations, and modern animations.

## 📂 What's included (11 pages)

| # | Page | File |
|---|------|------|
| 1 | Homepage | `index.html` |
| 2 | About Us | `about.html` |
| 3 | Services list | `service.html` |
| 4 | Service detail | `service/dental-implants.html` |
| 5 | Doctor profile | `doctor/dr-amira-al-hashmi.html` |
| 6 | Blog list | `blogs.html` |
| 7 | Blog detail | `blog/connection-between-low-mood.html` |
| 8 | Contact + Booking | `contact-us.html` |
| 9 | Career detail | `career/open-solicitation.html` |
| 10 | Privacy Policy | `privacy-policy.html` |
| 11 | 404 Error | `404.html` |

## 🎨 Design System

- **Colors:** Cream (#f5f1ea), Sage (#3d4a3c), Gold (#b8935a), Terracotta (#c67c5f)
- **Fonts:** Fraunces (serif display) + Inter (sans body) — loaded from Google Fonts
- **Style:** Warm, premium, editorial — Clinova-inspired

## ✨ Features included

- 🎬 Hero section with rotating images
- 📍 3 Dubai locations with embedded Google Maps (Downtown, Jumeirah, Marina)
- 📅 Booking form on contact page
- 📱 WhatsApp floating button (pulsing animation)
- 💼 Career application form
- 📝 Blog with filter buttons
- 🦷 Service detail with FAQ accordion
- 👨‍⚕️ Doctor profile with credentials
- 🌟 Scroll reveal animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 UAE SEO (geo meta tags, Schema.org Dentist markup)
- 🎯 DHA license callouts

## 🚀 GitHub Pages Deployment Guide

### Step 1: Create GitHub repository
1. Sign up at https://github.com (free)
2. Click "+" → "New repository"
3. Name it: `surrey-dental` (or anything)
4. Set to **Public**
5. Click "Create repository"

### Step 2: Upload files
1. Click "uploading an existing file"
2. Drag the entire **contents** of this folder (not the folder itself):
   - `index.html`, `about.html`, `service.html`, etc.
   - `css/`, `js/`, `service/`, `doctor/`, `blog/`, `career/` folders
3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Source": select **main** branch, root folder
4. Click **Save**
5. Wait 2–3 minutes — your site is live at `https://yourusername.github.io/surrey-dental`

### Step 4: Connect custom domain (surreyhomes.casa)
1. In GitHub Pages settings, under **Custom domain**, enter: `surreyhomes.casa`
2. Click **Save**

### Step 5: DNS records at your domain registrar
Go to your domain registrar (where you bought surreyhomes.casa) and add these DNS records:

**A Records (4 entries):**
```
Type: A   Name: @   Value: 185.199.108.153
Type: A   Name: @   Value: 185.199.109.153
Type: A   Name: @   Value: 185.199.110.153
Type: A   Name: @   Value: 185.199.111.153
```

**CNAME Record (1 entry):**
```
Type: CNAME   Name: www   Value: yourusername.github.io
```

### Step 6: Wait & verify
- DNS propagation takes 10 minutes to 24 hours
- Once active, enable **Enforce HTTPS** in GitHub Pages settings
- Visit `https://surreyhomes.casa` — done! 🎉

## ⚠️ Important Notes

1. **Brand-domain mismatch:** The domain `surreyhomes.casa` doesn't match the dental brand. Consider buying a more relevant domain like `surreydental.ae` for production.

2. **Placeholder content:** All copy is professionally written but generic. Replace:
   - Doctor names & credentials with real team
   - Phone numbers (currently +971 4 555 0000)
   - Email (currently hello@surreydental.ae)
   - DHA license number (currently #SDS-2008-DXB)
   - Real clinic addresses
   - Real Google Maps coordinates in iframes

3. **Booking form:** Currently shows a thank-you message. To actually receive bookings, integrate with:
   - Formspree (https://formspree.io) — easiest
   - Netlify Forms
   - Custom backend / WhatsApp API

4. **Images:** All 30+ images are from Unsplash (royalty-free). Replace with your own clinic photos before launch for authenticity.

5. **Additional pages to add later:**
   - More service detail pages (currently only `dental-implants.html` — copy this template for each service)
   - More doctor profiles (template ready)
   - More blog posts (template ready)
   - More career pages

## 🛠 Tech Stack
- Pure HTML5 + CSS3 + Vanilla JS
- Google Fonts (Fraunces + Inter)
- Unsplash images
- No build process needed
- Works on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages)

---

© 2026 Surrey Dental Studio template
