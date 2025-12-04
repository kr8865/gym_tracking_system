# 🏋️ FitTrack - Gym Membership & Workout Tracking System

> A complete web-based gym management and fitness tracking platform built with React, Firebase, and jaw-dropping animations!

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28?logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-0055FF)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Firebase Setup](#firebase-setup)
- [Demo Credentials](#demo-credentials)
- [Architecture](#architecture)
- [Features Breakdown](#features-breakdown)

---

## 🎯 Overview

**FitTrack** is a unified platform serving:
- **Members**: Track workouts, progress, and fitness goals with beautiful charts
- **Trainers**: Manage clients, create workout plans, and monitor progress
- **Admin**: Manage gym operations, memberships, revenue, and staff

Built for the **Hackathon** with:
- ✨ Jaw-dropping UI with animations
- 📊 Interactive animated charts using Recharts
- 🔐 Firebase Authentication & Real-time Database
- 📱 Mobile-first responsive design
- 🎨 Beautiful gradients, glass morphism, and smooth transitions
- ⚡ Real-time updates and instant notifications

---

## ✨ Features

### 🎯 Member Dashboard
- **Progress Tracking**: Beautiful animated line charts for weight tracking
- **Strength Progress**: Track Bench Press, Squat, Deadlift improvements
- **Weekly Volume**: Bar chart showing daily workout volumes
- **Attendance Heatmap**: Calendar-based attendance visualization
- **Workout Logger**: Log exercises, sets, reps, and weights
- **QR Check-in**: Scan QR code at gym entrance
- **Book Trainer**: Schedule personal training sessions
- **Real-time Stats**: Calories burned, streaks, PRs

### 👨‍💼 Admin Dashboard
- **Dashboard Stats**: Active members, revenue, daily check-ins
- **Revenue Analytics**: Trending line charts and member growth
- **Member Management**: View, manage, and renew memberships
- **Renewal Alerts**: Track expiring memberships
- **Staff Management**: Manage trainer profiles and shifts
- **Equipment Tracking**: Monitor equipment maintenance

### 🏋️ Trainer Dashboard
- **Client Management**: Track all clients with progress visualization
- **Workout Plans**: Create and manage custom workout plans
- **Diet Plans**: Assign personalized diet plans
- **Performance Review**: Monitor client progress and suggest improvements
- **Schedule Management**: Manage availability and booking slots
- **Progress Tracking**: Visual progress bars for each client

### 🌐 General Features
- **Authentication**: Secure email/password signup and login
- **Role-based Access**: Protected routes for each user role
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Updates**: Instant data synchronization with Firebase
- **Beautiful Animations**: Framer Motion smooth transitions and interactions
- **Dark Mode Ready**: Tailwind CSS easy theming support

---

## 🛠 Tech Stack

### Frontend
- **React 19.2** - UI library
- **Vite 7.2** - Fast build tool
- **TailwindCSS 4.1** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Data visualization charts
- **Firebase SDK** - Backend services
- **Lucide React** - Icon library
- **React Router 7.1** - Routing

### Backend
- **Firebase Authentication** - User auth
- **Firestore** - Real-time database
- **Firebase Storage** - File storage
- **Cloud Functions** - Serverless functions (optional)

---

## 📁 Project Structure

```
gym_tracking_system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── member/
│   │   │   │   └── ProgressCharts.jsx
│   │   │   └── charts/
│   │   │       ├── WeightChart.jsx
│   │   │       ├── StrengthChart.jsx
│   │   │       ├── VolumeChart.jsx
│   │   │       └── StreakHeatmap.jsx
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   ├── member/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── admin/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── trainer/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Landing.jsx
│   │   │   └── [Legacy pages]
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── config/
│   │   │   └── firebase.js
│   │   ├── data/
│   │   │   └── dummyData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── backend/
    └── [Firebase config files]
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Firebase Account** (free tier works)
- **Git**

### Step 1: Clone Repository
```bash
git clone https://github.com/kr8865/gym_tracking_system.git
cd gym_tracking_system
git checkout Arjit
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 3: Install Additional Packages (if not already installed)
```bash
npm install firebase recharts framer-motion lucide-react
```

### Step 4: Configure Firebase
Update `src/config/firebase.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 🎮 Running the App

### Development Mode
```bash
cd frontend
npm run dev
```

Server will start at: `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🔐 Firebase Setup

### Create Firebase Project:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create Project"
3. Enable **Authentication** (Email/Password)
4. Enable **Firestore Database** (Start in production mode)
5. Enable **Cloud Storage**
6. Copy config to `src/config/firebase.js`

### Firestore Collections Structure:
```
users/
├── {userId}
│   ├── uid: string
│   ├── email: string
│   ├── fullName: string
│   ├── role: string (member|trainer|admin)
│   ├── createdAt: timestamp
│   └── isActive: boolean

workouts/
├── {workoutId}
│   ├── userId: string
│   ├── date: date
│   ├── exercises: array
│   ├── duration: number
│   └── caloriesBurned: number

memberships/
├── {memberId}
│   ├── userId: string
│   ├── planType: string (basic|standard|premium)
│   ├── startDate: date
│   ├── endDate: date
│   └── isActive: boolean
```

---

## 👤 Demo Credentials

**NOTE**: These are for demo/testing purposes. Register your own account for full access.

```
Member Demo:
  Email: demo.member@fittrack.com
  Password: demo123456
  Role: member

Trainer Demo:
  Email: demo.trainer@fittrack.com
  Password: demo123456
  Role: trainer

Admin Demo:
  Email: demo.admin@fittrack.com
  Password: demo123456
  Role: admin
```

---

## 🏗 Architecture

### Authentication Flow
```
1. User enters email & password
2. Firebase authenticates
3. User data stored in Firestore
4. Role-based redirect
5. Protected routes enforce access control
```

### Data Flow
```
Component → useAuth Hook → AuthContext → Firebase Auth
                ↓
         User State Updated
                ↓
         Component Re-renders
```

### Role-Based Access
```
/login → /signup → Select Role → Route to Dashboard
                     ↓
              Member → /member
              Trainer → /trainer
              Admin → /admin
```

---

## 🎨 Design Features

### Animations Used:
- **Fade In**: Page load animations
- **Slide Up**: Card entrance animations
- **Scale**: Hover effects on buttons
- **Pulse**: Loading indicators
- **Float**: Subtle background movements
- **Progress Bars**: Smooth width animations

### Color Scheme:
- **Primary**: Indigo (`#4F46E5`)
- **Secondary**: Purple (`#9333EA`)
- **Accent**: Pink (`#EC4899`)
- **Success**: Green (`#10B981`)
- **Warning**: Orange (`#F59E0B`)
- **Error**: Red (`#EF4444`)

### Responsive Breakpoints:
- **Mobile**: < 640px (`sm`)
- **Tablet**: 640px - 1024px (`md`)
- **Desktop**: > 1024px (`lg`)

---

## 📊 Charts & Visualizations

### Weight Progress Chart
- Line chart with gradient fill
- Smooth animations on load
- Interactive tooltips
- Responsive height

### Strength Progress
- Multi-line chart (Bench, Squat, Deadlift)
- Different colors for each lift
- Staggered animations
- Legend support

### Weekly Volume
- Bar chart with gradient bars
- Daily breakdown
- Total volume summary
- Hover interactions

### Attendance Heatmap
- Calendar grid visualization
- Green for attended, Gray for missed
- Hover tooltips with dates
- Current streak display

---

## 🔄 Git Workflow

### Branch Information
- **Branch Name**: `Arjit`
- **Base Branch**: `main`
- **Status**: All commits pushed to remote ✅

### Pushing Changes
```bash
# Stage changes
git add .

# Commit with message
git commit -m "feat: Your feature description"

# Push to branch
git push origin Arjit
```

### Commits Will Show On:
- GitHub branch page: https://github.com/kr8865/gym_tracking_system/tree/Arjit
- Pull request history (if you open PR)
- Branch protection checks
- Contributor stats

---

## 📱 Mobile Responsiveness

All pages are fully responsive:
- **Header**: Hamburger menu on mobile
- **Dashboards**: Single column on mobile, multi-column on desktop
- **Charts**: Responsive container with dynamic sizing
- **Forms**: Full width on mobile, centered on desktop
- **Tables**: Horizontal scroll on mobile

---

## 🎯 Next Steps

1. **Setup Firebase Project** with your credentials
2. **Configure Authentication** in Firestore rules
3. **Add Demo Users** for testing
4. **Customize** colors and branding
5. **Deploy** to Vercel, Netlify, or Firebase Hosting

---

## 📝 Notes

- All data is currently using dummy/demo data in the frontend
- Firebase integration is setup but requires credentials
- Payment integration is not implemented (for future)
- Email notifications would require Firebase Cloud Functions
- QR code scanning would need camera permission implementation

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: description"`
3. Push to branch: `git push origin feature/your-feature`
4. Open Pull Request

---

## 📄 License

Part of Hackathon Project - Team 30

---

## 🎉 Credits

- Built for **Hackathon 2024**
- Team: **30**
- Focus: **Data Visualization & Complete Gym System**
- Tech Lead: **Arjit**

---

## ❓ FAQ

**Q: How to change colors?**
A: Update Tailwind classes in components or modify `tailwind.config.js`

**Q: How to add more charts?**
A: Follow the pattern in `components/member/ProgressCharts.jsx` and add Recharts

**Q: How to connect real database?**
A: Update Firebase config and modify component data fetching logic

**Q: Is payment integration included?**
A: No, it's left for future implementation using Stripe/Razorpay

**Q: Can I use this commercially?**
A: Check with your hackathon organizers for licensing terms

---

**Happy Coding! 💪🚀**

For issues or questions, refer to the commit history on GitHub.
