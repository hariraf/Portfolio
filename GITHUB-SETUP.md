# GitHub Auto-Commit Setup Guide

Your admin panel now automatically commits changes to GitHub! Follow these steps to enable it:

## Step 1: Create GitHub Personal Access Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: `Portfolio Admin Panel`
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

## Step 2: Add Environment Variables to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
GITHUB_TOKEN = your_token_from_step_1
GITHUB_OWNER = your-github-username
GITHUB_REPO = your-repo-name
GITHUB_BRANCH = main
```

Example:
```
GITHUB_TOKEN = ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER = hariraf
GITHUB_REPO = portfolio-website
GITHUB_BRANCH = main
```

## Step 3: Redeploy

After adding environment variables, Vercel will automatically redeploy your site.

## How It Works

1. You edit content in `/admin` panel
2. Click "Save" on any form
3. Content saves to `localStorage` (instant preview)
4. **Automatically commits to GitHub** in the background
5. Vercel detects the commit and deploys
6. Your live site updates! 🎉

## Testing

1. Make a small change in the admin panel
2. Save it
3. Check your GitHub repo - you should see a new commit
4. Wait 1-2 minutes for Vercel to deploy
5. Visit your live site to see the changes

## Troubleshooting

**Changes not appearing on GitHub?**
- Check Vercel logs for errors
- Verify environment variables are set correctly
- Make sure your GitHub token has `repo` permissions

**Still using manual workflow?**
- You can still use "Generate Files" button
- Download and manually push to GitHub
- This is a backup option if auto-commit fails

## Security Note

- Your admin panel is at `/admin/index.html`
- Anyone can access it currently
- To add password protection, consider:
  - Vercel Password Protection (Pro plan)
  - Custom authentication middleware
  - Keep the URL private

---

**Need help?** Check the Vercel deployment logs or GitHub commit history.
