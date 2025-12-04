# 💪 Gym Tracking System - Data Visualization Dashboard

## Overview
Complete Data Visualization Dashboard for Gym Membership & Workout Tracking System built with React, TailwindCSS, and responsive design. Features 4 interactive charts with smooth animations and dummy data.

## 📊 Charts Included

1. **Weight Progress Line Chart** - Track weight loss/gain over time
2. **Strength Progress Chart** - Monitor Bench Press, Squat, and Deadlift improvements
3. **Weekly Workout Volume Bar Chart** - Daily workout volume visualization
4. **Attendance Streak Heatmap** - Calendar-based gym attendance tracking

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── WeightChart.jsx
│   │   │   ├── StrengthChart.jsx
│   │   │   ├── VolumeChart.jsx
│   │   │   └── StreakHeatmap.jsx
│   │   ├── InsightsBox.jsx
│   │   ├── ProgressDashboard.jsx
│   ├── data/
│   │   └── dummyData.js
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies
```powershell
cd frontend
npm install
```

### Step 2: Run Development Server
```powershell
npm run dev
```

The dashboard will be available at `http://localhost:5173`

### Step 3: View the Dashboard
Navigate to the home page (`/`) to see the complete ProgressDashboard with all 4 charts.

## 📋 Features

✅ **4 Interactive Charts**
- Smooth hover animations
- Responsive bars/columns
- Color-coded visualization
- Tooltips on hover

✅ **Insights Box Component**
- One-line summaries above each chart
- Emoji icons for better UX
- Gradient background styling

✅ **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Grid layouts that adapt

✅ **Smooth Animations**
- Slide-in animations for charts
- Fade-in effects for insights
- Hover transitions
- Staggered animation delays

✅ **Clean Modern UI**
- TailwindCSS styling
- Gradient backgrounds
- Shadow effects
- Professional color palette

## 🎨 Color Scheme

- **Weight Chart**: Blue gradient
- **Strength Chart**: Red, Green, Purple (3 exercises)
- **Volume Chart**: Orange to Yellow gradient
- **Attendance Chart**: Green for attended, Gray for missed

## 📊 Dummy Data Overview

### Weight Progress (12 weeks)
- Range: 85kg → 78.5kg (6.5kg lost)

### Strength Progress (8 weeks)
- Bench: 80kg → 98kg (+22.5%)
- Squat: 120kg → 142kg (+18.3%)
- Deadlift: 140kg → 170kg (+21.4%)

### Weekly Volume
- Total: 98.8k volume
- Highest: Saturday (18.5k)
- Lowest: Sunday (8.9k)

### Attendance
- 30-day period
- Current streak: 11 days
- Attendance rate: 96.7%

## 🔧 Customization

### Change Dummy Data
Edit `src/data/dummyData.js`:
```javascript
export const weightProgressData = [
  { date: 'Jan 1', weight: 85 },
  // ... update data
];
```

### Modify Colors
Update Tailwind classes in chart components:
```jsx
className="bg-blue-400 hover:bg-blue-500"
```

### Adjust Chart Heights
Change the hardcoded pixel values in chart components:
```jsx
const h-64 // Change to h-96, h-80, etc.
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## ⚙️ Technical Stack

- **React**: 19.2.0
- **TailwindCSS**: 4.1.17
- **Vite**: 7.2.4
- **React Router**: 7.10.0

## 🎯 Performance

- Zero external chart library dependencies (custom charts)
- Fast animations using CSS transitions
- Optimized re-renders
- Lightweight bundle size

## 📝 Notes

- No backend API calls (dummy data only)
- No gamification features
- No database connections
- Production-ready animations
- Hackathon-grade UI

## 🚀 Building for Production

```powershell
npm run build
npm run preview
```

The optimized build will be in the `dist/` folder.

## 📄 License

Part of the Gym Tracking System Project

---

**Dashboard Component**: `ProgressDashboard.jsx` - Main component that imports all charts and displays them in a structured layout.

**Run with**: `npm run dev` from the frontend directory.
