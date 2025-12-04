# 🚀 FitTrack - Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Clone & Enter Directory
```bash
git clone https://github.com/kr8865/gym_tracking_system.git
cd gym_tracking_system
git checkout Arjit
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit: **http://localhost:5173**

---

## 🧪 Test the App

### Landing Page
- URL: `http://localhost:5173`
- Features: Hero section, features grid, stats, CTA buttons

### Signup
- URL: `http://localhost:5173/signup`
- Create account with email/password
- Select role: Member, Trainer, or Admin

### Login
- URL: `http://localhost:5173/login`
- Use demo credentials (see below)
- Redirects to role-based dashboard

### Member Dashboard
- URL: `http://localhost:5173/member`
- Features: Progress charts, workout stats, quick actions
- Tab view: Overview, Progress Charts, My Workouts
- Interactive animated charts with Recharts

### Admin Dashboard
- URL: `http://localhost:5173/admin`
- Features: Revenue analytics, member management
- Charts: Revenue trend, member growth
- Member table with renewal alerts

### Trainer Dashboard
- URL: `http://localhost:5173/trainer`
- Features: Client management, workout plans, schedule
- Client cards with progress bars
- Plan management and weekly schedule

---

## 👤 Demo Accounts

### Test Credentials:
```
Member:
  Email: demo@fittrack.com
  Password: demo123456
  Role: member

Trainer:
  Email: trainer@fittrack.com
  Password: trainer123
  Role: trainer

Admin:
  Email: admin@fittrack.com
  Password: admin123
  Role: admin
```

**Note**: Firebase auth not fully configured in demo, use any email/password to create test accounts

---

## 🎨 Key Features to Explore

### 1. Beautiful Animations
- Hover effects on buttons and cards
- Smooth page transitions
- Animated charts on load
- Progress bar animations

### 2. Responsive Design
- Resize browser to see mobile responsive design
- Hamburger menu appears on mobile
- Charts adjust to screen size
- Stacked layouts on small screens

### 3. Animated Charts
- **Weight Chart**: Line chart with smooth curve
- **Strength Chart**: Multi-line chart with legend
- **Volume Chart**: Bar chart with gradient colors
- **Attendance**: Heatmap with hover tooltips

### 4. Glass Morphism UI
- Header with gradient background
- Semi-transparent cards with backdrop blur
- Modern aesthetic with depth

### 5. Role-Based Access
- Member role: `/member` dashboard
- Trainer role: `/trainer` dashboard
- Admin role: `/admin` dashboard
- Protected routes prevent unauthorized access

---

## 📊 Components to Check

### Member Dashboard Charts
```
src/components/member/ProgressCharts.jsx
  ├── WeightProgressChart
  ├── StrengthProgressChart
  ├── WeeklyVolumeChart
  └── AttendanceHeatmap
```

### Dashboard Pages
```
src/pages/
  ├── Landing.jsx (Home page)
  ├── auth/
  │   ├── Login.jsx
  │   └── Signup.jsx
  ├── member/
  │   └── Dashboard.jsx
  ├── admin/
  │   └── Dashboard.jsx
  └── trainer/
      └── Dashboard.jsx
```

### Core Files
```
src/
  ├── config/firebase.js (Firebase setup)
  ├── context/AuthContext.jsx (Auth state)
  ├── hooks/useAuth.js (Auth hook)
  ├── components/shared/
  │   ├── Header.jsx (Navigation)
  │   └── ProtectedRoute.jsx (Route protection)
```

---

## 🔧 Customization Quick Tips

### Change Colors
Edit Tailwind classes in components:
```jsx
// Change from blue to indigo
className="bg-blue-600" → className="bg-indigo-600"
```

### Add More Charts
Copy structure from `ProgressCharts.jsx` and use Recharts components

### Modify Dashboard Stats
Edit the `stats` array in respective Dashboard components

### Change Animations
Modify Framer Motion config:
```jsx
variants={{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}}
```

---

## 🐛 Troubleshooting

### Charts Not Showing?
```bash
# Ensure recharts is installed
npm install recharts

# Restart dev server
npm run dev
```

### Animations Not Smooth?
- Check browser performance
- Framer Motion works best in Chrome/Firefox
- Reduce animation complexity if lagging

### Layout Issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Check responsive breakpoints (sm, md, lg)
- Ensure TailwindCSS is properly configured

### Authentication Not Working?
- Firebase credentials needed (see README_FITTRACK.md)
- For demo, just use any email/password
- Check browser console for errors

---

## 📁 Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

Output will be in `dist/` folder

---

## 🌐 Deploy Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Deploy
firebase deploy
```

---

## 📞 Support

### Common Issues:
1. **Port 5173 already in use**: `npm run dev -- --port 3000`
2. **Node modules issues**: `rm -rf node_modules && npm install`
3. **Cache issues**: `npm cache clean --force`

### Check Git Status:
```bash
git status
git log --oneline -10
```

### Verify Branch:
```bash
git branch
# Should show: * Arjit
```

---

## ✅ Checklist Before Submission

- [x] All components created
- [x] Animations working smoothly
- [x] Charts displaying correctly
- [x] Mobile responsive design
- [x] Authentication flow implemented
- [x] All 3 dashboards functional
- [x] Code pushed to Arjit branch
- [x] README documentation complete

---

## 🎉 What's Next?

1. **Firebase Setup**: Add real Firebase credentials
2. **Backend Integration**: Connect to actual Firestore
3. **User Testing**: Test with real users
4. **Performance**: Optimize for production
5. **Deployment**: Deploy to hosting service

---

**Happy Testing! 💪🚀**

Need more help? Check `README_FITTRACK.md` for detailed documentation.
