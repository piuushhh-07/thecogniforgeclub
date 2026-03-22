# 🔥 CogniForge Club — Official Website

A modern, dark-themed website for The CogniForge Club — a multidisciplinary technical club working across AI/ML, Cybersecurity & Blockchain, Web/App Development, and Robotics & IoT.

## 📁 Project Structure

```
cogniforge-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Scroll reveal + form logic
├── assets/
│   └── logo.jpg        # CogniForge logo
└── README.md
```

## 🚀 Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source: `main` branch, `/ (root)`
4. Live at: `https://YOUR_USERNAME.github.io/cogniforge-website/`

## 🔗 Social Links
- Instagram: [@thecogniforgeclub](https://www.instagram.com/thecogniforgeclub/)
- LinkedIn: [CogniForge Club](https://www.linkedin.com/company/111452289/)
- WhatsApp: [Join Group](https://chat.whatsapp.com/FvBeOH5o8ZPKY9LH6cRoqS?mode=gi_t)

## ✏️ How to Update Team Members

In `index.html`, find the `<!-- TEAM -->` section and edit each `.team-card`:

```html
<div class="team-card">
  <div class="team-avatar" style="background-image:url('assets/member.jpg'); background-size:cover; background-position:center;"></div>
  <div class="team-name">Member Name</div>
  <div class="team-role">Role Title</div>
  <div class="team-domain">Domain · Specialization</div>
</div>
```

To use a photo, place it in the `assets/` folder and reference it as shown above.

## 🛠 Built With
- HTML5, CSS3, Vanilla JS
- Google Fonts (Syne + Space Mono)
- No frameworks or dependencies required
