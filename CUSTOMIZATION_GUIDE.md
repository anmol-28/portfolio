# Portfolio Customization Guide - Anmol Bhaiya

## ✅ Completed Changes

### 1. Personal Information Updated
- **Name**: Changed to "Anmol Bhaiya" throughout the portfolio
- **Role/Title**: Updated to "Cyber Specialist, Cybersecurity Analyst, Ethical Hacker, Penetration Tester"
- **Bio**: Customized with your cybersecurity background and achievements

### 2. Social Media Links Updated
- **GitHub**: https://github.com/anmol-28
- **LinkedIn**: https://www.linkedin.com/in/bhaiya-anmol/
- **Removed**: Twitter and Instagram links (as not provided)

### 3. About Section Updated
- Updated AboutCard with your education (MSU Baroda)
- Changed activities to cybersecurity-focused:
  - CTF Competitions 🚩
  - Penetration Testing & Bug Bounty Hunting 🔍
  - Building Secure Web Applications 🛡️
- Updated quote to: "Making the web a safer place, one vulnerability at a time!"

### 4. Projects Updated
- **WashIt - Laundry Management System**: Full description added
- **StoreEx - Store Management System**: Full description added
- Note: Using placeholder images (you'll need to replace these)

### 5. Tech Stack Updated
- Simplified to your technologies: C++, JavaScript, Java, Python, Node.js, MySQL, MongoDB, Git, Tailwind CSS
- Removed unnecessary technologies

### 6. Sections Removed
- ✅ Removed "Tools I use" section
- ✅ Removed "Days I Code" (GitHub calendar) section
- ✅ Removed Blog link from navbar

### 7. Footer Updated
- Copyright changed to "Anmol Bhaiya" / "AB"
- Social links updated to match your profiles

---

## 📝 TODO: Assets You Need to Replace

### Required Images to Replace:

1. **Logo** (`src/Assets/logo.png`)
   - Your personal logo or initials
   - Recommended size: 100x40px (transparent background)

2. **Avatar** (`src/Assets/avatar.svg`)
   - Your profile picture or avatar illustration
   - Used in the home page introduction section

3. **About Image** (`src/Assets/about.png`)
   - Image for the About section
   - Could be a professional photo or cybersecurity-themed illustration

4. **Home Main Image** (`src/Assets/home-main.svg`)
   - Main hero image on homepage
   - Could be cybersecurity-themed illustration

5. **Project Images**:
   - `src/Assets/Projects/chatify.png` → Replace with WashIt screenshot
   - `src/Assets/Projects/blog.png` → Replace with StoreEx screenshot

6. **Resume PDF**:
   - Replace `src/Assets/Soumyajit_Behera.pdf` with your resume
   - Name it something like `Anmol_Bhaiya_Resume.pdf`
   - Update the import in `src/components/Resume/ResumeNew.js`

---

## 🚀 How to Run Your Portfolio

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The portfolio will open at http://localhost:3000

---

## 🎨 Optional Customizations

### Change Color Theme
Edit `src/style.css` line 10:
```css
--imp-text-color: #c770f0;  /* Change this purple color to your preference */
```

### Add More Projects
Edit `src/components/Projects/Projects.js` and add more `<ProjectCard>` components.

### Update Resume Section
After replacing your PDF, update the import in `src/components/Resume/ResumeNew.js`:
```javascript
import pdf from "../../Assets/Anmol_Bhaiya_Resume.pdf";
```

---

## 📧 Contact Information to Verify

Make sure these links work:
- GitHub: https://github.com/anmol-28
- LinkedIn: https://www.linkedin.com/in/bhaiya-anmol/

---

## 🔧 Files Modified

1. `src/components/Home/Home.js` - Name and social links
2. `src/components/Home/Home2.js` - Bio section
3. `src/components/Home/Type.js` - Role titles
4. `src/components/About/About.js` - Removed tools and GitHub sections
5. `src/components/About/AboutCard.js` - Personal info and activities
6. `src/components/About/Techstack.js` - Simplified tech stack
7. `src/components/Projects/Projects.js` - Your two projects
8. `src/components/Navbar.js` - Removed blog link
9. `src/components/Footer.js` - Updated copyright and social links

---

## 🎯 Next Steps

1. Replace all images in `src/Assets/` folder
2. Add your resume PDF
3. Update resume import path
4. Test all social media links
5. Add screenshots of your projects
6. Run `npm start` to preview
7. Deploy to Vercel, Netlify, or GitHub Pages

Good luck with your portfolio! 🚀
