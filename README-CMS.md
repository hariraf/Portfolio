# Quick Start Guide - Your Portfolio CMS

## 🎉 What's New?

Your admin panel now **automatically commits to GitHub** when you save content!

## 📋 Complete Workflow

### Current Setup (Local Only)
1. Edit content at `/admin/index.html`
2. Content saves to browser localStorage
3. Click "Generate Files" to download HTML files
4. Manually push to GitHub
5. Vercel auto-deploys

### New Setup (Auto-Commit) ✨
1. Edit content at `/admin/index.html`
2. Click "Save" - **automatically commits to GitHub**
3. Vercel auto-deploys
4. Done! 🚀

## 🔧 Setup Required (One-Time)

Follow the instructions in `GITHUB-SETUP.md` to enable auto-commit:

1. Create GitHub Personal Access Token
2. Add environment variables to Vercel
3. Redeploy

**Time needed:** 5 minutes

## 📁 Files Created

```
/api/commit-to-github.js    - Serverless function for GitHub commits
/admin/admin-script.js       - Updated with auto-commit
.env.example                 - Template for environment variables
.gitignore                   - Protects sensitive files
GITHUB-SETUP.md             - Detailed setup instructions
```

## 🔐 Admin Access

Your admin panel is at: `https://yoursite.com/admin/index.html`

**Current security:** None (anyone with the URL can access)

**To secure it:**
- Option 1: Keep the URL private (don't link to it)
- Option 2: Use Vercel Password Protection (requires Pro plan)
- Option 3: Add custom authentication

## 🚀 Next Steps

1. **Read GITHUB-SETUP.md** for detailed instructions
2. **Set up environment variables** in Vercel
3. **Test the auto-commit** by making a small change
4. **Push all new files to GitHub**:
   ```bash
   git add .
   git commit -m "Add GitHub auto-commit functionality"
   git push origin main
   ```

## 📝 Usage

### Adding Content
1. Go to `/admin/index.html`
2. Navigate to the section (PopSci, Marketing, Creative)
3. Click "New Article/Project/Work"
4. Fill in the form
5. Click "Save" - **auto-commits to GitHub!**

### Editing Content
- Currently: Delete and recreate
- Future: Add edit functionality

### Publishing
- **Automatic:** Changes commit to GitHub → Vercel deploys
- **Manual backup:** Use "Generate Files" button

## ❓ FAQ

**Q: Do I still need to manually push to GitHub?**
A: Not for content changes! Only for code/design changes.

**Q: How long until changes appear on my site?**
A: 1-2 minutes (GitHub commit + Vercel build time)

**Q: What if auto-commit fails?**
A: Use the "Generate Files" backup method

**Q: Can I edit content offline?**
A: Yes! Changes save to localStorage. They'll commit when you're online.

---

**Need help?** Check the Vercel logs or open an issue on GitHub.
