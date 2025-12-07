# Hariram Murukeshan - Portfolio Website

A stunning, professional portfolio showcasing the intersection of Physics, Marketing, and Creative Arts.

## 🎨 Features

- **Immersive Hero Section** with animated profile rings and gradient effects
- **About Section** with philosophy cards and skills showcase
- **PopSci Lab** for physics articles and tech thoughts
- **Marketing Lab** for marketing projects and strategies
- **Creative Space** for stories, art, and simulations
- **Smooth Animations** and scroll effects
- **Fully Responsive** design for all devices
- **Easy Content Management** via JSON file

## 🚀 Quick Start

1. **Update Your Photo**: Replace the placeholder in `styles.css` line 234:
   ```css
   background-image: url('YOUR_PHOTO_URL_HERE');
   ```

2. **Update Content**: Edit `content.json` to add/modify:
   - Profile information
   - PopSci articles
   - Marketing projects
   - Creative works

3. **Customize Colors**: Change color scheme in `styles.css` lines 10-16:
   ```css
   --primary: #6366f1;
   --secondary: #8b5cf6;
   --accent: #ec4899;
   ```

## 📁 File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features
├── content.json        # Easy content management
└── README.md          # This file
```

## 🎯 Customization Guide

### Adding New Articles (PopSci Lab)

Edit `content.json` and add to `popSciArticles`:

```json
{
  "title": "Your Article Title",
  "category": "Category Name",
  "description": "Brief description",
  "date": "Month Year",
  "readTime": "X min read",
  "featured": false,
  "gradient": "linear-gradient(135deg, #color1, #color2)"
}
```

### Adding Marketing Projects

Add to `marketingProjects` in `content.json`:

```json
{
  "number": "04",
  "title": "Project Title",
  "description": "Project description",
  "tags": ["Tag1", "Tag2"],
  "date": "Month Year",
  "readTime": "X min read"
}
```

### Adding Creative Works

Add to `creativeWorks` in `content.json`:

```json
{
  "title": "Work Title",
  "type": "Short Story/Art/Simulation/Essay",
  "description": "Brief description",
  "readTime": "X min read",
  "size": "normal" or "large"
}
```

## 🌐 Deploy to Vercel

1. Push this folder to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy! (Vercel auto-detects the HTML)

## 💡 Pro Tips

- **Images**: Host images on [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
- **Fonts**: The site uses system fonts for fast loading
- **Performance**: All animations are GPU-accelerated
- **SEO**: Update meta tags in `index.html` head section

## 🎨 Color Schemes (Alternative Options)

### Ocean Blue
```css
--primary: #0ea5e9;
--secondary: #06b6d4;
--accent: #3b82f6;
```

### Sunset Orange
```css
--primary: #f97316;
--secondary: #fb923c;
--accent: #ef4444;
```

### Forest Green
```css
--primary: #10b981;
--secondary: #059669;
--accent: #14b8a6;
```

## 📱 Mobile Responsive

The site automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Feel free to use this template for your own portfolio!

---

**Built with passion and curiosity** 🚀