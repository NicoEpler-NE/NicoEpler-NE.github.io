# Nico Epler - Portfolio Website

A futuristic, responsive portfolio website showcasing my engineering experience and skills.

## Features

- **Futuristic Design**: Modern, engineer-themed aesthetic with glowing effects and smooth animations
- **Timeline Layout**: Clean chronological display of education and work experience
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Easy to Edit**: All content is stored in a single `data.js` file for quick updates
- **GitHub Pages Ready**: Static HTML/CSS/JS perfect for GitHub Pages hosting

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # Futuristic styling and responsive design
├── data.js         # Easy-to-edit configuration file (all your content)
├── script.js       # JavaScript for content population and animations
└── README.md       # This file
```

## Editing Content

To update your website content, simply edit the `data.js` file. It contains all your personal information, education, experience, skills, projects, and achievements in an organized, easy-to-edit format.

### Example: Updating Your Name

```javascript
const portfolioData = {
    personal: {
        name: "Your Name",  // Edit this line
        // ... other fields
    }
};
```

## GitHub Pages Setup

### Option 1: Using GitHub Website Interface

1. Create a new repository on GitHub named `your-username.github.io`
2. Upload all files (`index.html`, `styles.css`, `data.js`, `script.js`) to the repository
3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and save
4. Your site will be available at `https://your-username.github.io`

### Option 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option 3: Using a Custom Domain

If you want to use a custom domain (e.g., `nicoepler.com`):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your GitHub repository Settings → Pages, add your custom domain
3. Configure DNS records at your registrar:
   - Add an A record pointing to `185.199.108.153`
   - Add an A record pointing to `185.199.109.153`
   - Add an A record pointing to `185.199.110.153`
   - Add an A record pointing to `185.199.111.153`
   - OR add a CNAME record pointing to `your-username.github.io`

## Customization

### Colors

Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #00f0ff;      /* Main accent color */
    --secondary-color: #7b2cbf;    /* Secondary accent color */
    --accent-color: #ff006e;       /* Highlight color */
    --bg-dark: #0a0a0f;            /* Background color */
    /* ... more variables */
}
```

### Fonts

The website uses Google Fonts (Orbitron and Rajdhani). To change fonts:
1. Go to [Google Fonts](https://fonts.google.com/)
2. Select new fonts
3. Update the font links in `index.html`
4. Update font-family in `styles.css`

## Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript for smooth animations
- Optimized CSS with hardware acceleration
- Fast loading times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio is for personal use. Feel free to customize and use it for your own purposes.

---

Built with ❤️ for GitHub Pages hosting
