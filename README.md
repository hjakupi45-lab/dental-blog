# Automated Daily Dental Blog

A modern, high-performance **Next.js** website that automatically generates, formats, and publishes a new expert dental / CAD/CAM blog post every single day without manual intervention.

---

## 🚀 How It Works (100% Free)
1. **GitHub Actions (Cron Runner):** Runs every day at 08:00 UTC (9:00 AM CET).
2. **Python Script (`scripts/generate_daily_post.py`):**
   - Grabs the next dental topic from `scripts/topics.json`.
   - Calls the **Google Gemini API** (Free Tier).
   - Generates an 800–1200 word SEO-optimized article with FAQs and H2/H3 headers.
   - Saves the article as a Markdown file in `content/posts/`.
   - Commits and pushes the new post to your GitHub repository.
3. **Vercel (Free Hosting):** Automatically deploys the updated site with the new post in ~30 seconds.

---

## 🛠️ 5-Minute Setup Guide

### 1. Get a Free Google Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click **Get API key** and copy your key.

### 2. Push this project to GitHub
1. Create a new repository on [GitHub.com](https://github.com/) (e.g. `dental-blog`).
2. In your terminal inside this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of automated dental blog"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dental-blog.git
   git push -u origin main
   ```

### 3. Add your Gemini API Key to GitHub Secrets
1. In your GitHub repository, click **Settings** > **Secrets and variables** > **Actions**.
2. Click **New repository secret**.
3. Name: `GEMINI_API_KEY`
4. Value: *Paste your Google Gemini API key*
5. Click **Add secret**.

### 4. Deploy for Free on Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **Add New...** > **Project**.
3. Import your `dental-blog` repository.
4. Click **Deploy**.

---

## 🎉 That's it!
From this moment on, your website will automatically write and publish a new post every day. You don't need to touch a thing!
