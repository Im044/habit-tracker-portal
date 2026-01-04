# Habit Tracker Portal - Testing & Deployment Guide

## 🚀 Quick Start - Run the Application

### Prerequisites
- Node.js (v16+) installed
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Step 1: Clone and Install

```bash
git clone https://github.com/Im044/habit-tracker-portal.git
cd habit-tracker-portal
npm run install-all
```

### Step 2: Start the Express Server

```bash
cd server
node index.js
```

You should see:
```
🚀 Habit Tracker Server running on http://localhost:5000
📊 API Health Check: http://localhost:5000/api/health
🎯 Dashboard: http://localhost:5000/api/dashboard
📋 Habits: http://localhost:5000/api/habits
```

### Step 3: Open the Frontend in Your Browser

1. Open the file: `client/index.html` in your web browser
   - Right-click and select "Open with" → Browser
   - Or use File → Open in your browser
   - Or double-click the file

2. Navigate to: `file:///path/to/habit-tracker-portal/client/index.html`

## ✅ Testing the Application

### Frontend Tests (Browser)

Once you open `client/index.html`, you should see:

✅ **Dashboard Section**
- 📊 Total Habits: 6
- ✅ Completed Today: 4
- 📈 Weekly Average: 78%
- 🎖️ Monthly Progress: 82%

✅ **Habits List**
Showing all 6 habits with:
- Habit name
- Category badge
- Frequency badge
- Progress bar
- Percentage completion
- Log button

✅ **Server Status**
Should display:
- "✓ Online" if server is running
- "✗ Offline" if server is not running

### API Endpoints Testing

You can test the API endpoints using curl or Postman:

#### Health Check
```bash
curl http://localhost:5000/api/health
```

Expected Response:
```json
{
  "status": "Server is running",
  "timestamp": "2026-01-04T..."
}
```

#### Get All Habits
```bash
curl http://localhost:5000/api/habits
```

Expected Response:
```json
[
  {
    "id": 1,
    "name": "Wake up at 6",
    "category": "health",
    "frequency": "daily",
    "goal": 80
  },
  ...
]
```

#### Get Dashboard
```bash
curl http://localhost:5000/api/dashboard
```

Expected Response:
```json
{
  "totalHabits": 6,
  "completedToday": 4,
  "weeklyAverage": 78,
  "monthlyProgress": 82,
  "stats": {
    "health": 4,
    "exercise": 2,
    "learning": 1
  }
}
```

#### Get Habit Progress
```bash
curl http://localhost:5000/api/habits/1/progress
```

Expected Response:
```json
{
  "habitId": 1,
  "month": "January 2026",
  "totalDays": 31,
  "completedDays": 25,
  "completionRate": 80.6,
  "dailyData": [...]
}
```

## 🧪 Manual Testing Checklist

### Frontend UI Testing
- [ ] Page loads without errors
- [ ] Header displays "🎯 Habit Tracker Portal"
- [ ] Dashboard statistics load correctly
- [ ] Server status shows "✓ Online"
- [ ] All 6 habits are displayed in the list
- [ ] Habit names are visible
- [ ] Category and frequency badges show correctly
- [ ] Progress bars display with correct percentages
- [ ] Log buttons are visible and clickable
- [ ] Page layout is responsive and clean

### Backend API Testing
- [ ] Server starts without errors
- [ ] Health check endpoint returns 200
- [ ] /api/habits returns array of 6 habits
- [ ] /api/dashboard returns stats object
- [ ] /api/habits/:id returns specific habit
- [ ] /api/habits/:id/progress returns progress data
- [ ] CORS is enabled (can access from browser)
- [ ] Error responses are properly formatted

### Integration Testing
- [ ] Frontend connects to backend server
- [ ] Data loads from API endpoints
- [ ] Auto-refresh happens every 10 seconds
- [ ] Status messages display correctly
- [ ] No console errors in browser DevTools

## 🐛 Troubleshooting

### Issue: "Cannot connect to server"

**Solution:**
1. Ensure server is running: `node server/index.js`
2. Check if port 5000 is available
3. Look for error messages in console
4. Try: `npm install` in server directory

### Issue: "CORS Error"

**Solution:**
The server has CORS enabled, but check:
1. API_URL in client/index.html matches server URL
2. Server is listening on correct port
3. Browser console shows exact error

### Issue: "Habits not loading"

**Solution:**
1. Check browser console (F12 → Console tab)
2. Verify API endpoint: http://localhost:5000/api/habits
3. Ensure server is returning JSON
4. Check network tab for API calls

## 📊 Expected Test Results

### When Server is Running ✅
```
✓ Server is online and running!

📊 Total Habits: 6
✅ Completed Today: 4  
📈 Weekly Average: 78%
🎖️ Monthly Progress: 82%

📋 Your Habits:
  1. Wake up at 6 [health] [daily] 80%
  2. Cold shower [health] [daily] 75%
  3. Hydrate [health] [daily] 90%
  4. Stretching [exercise] [daily] 85%
  5. Study [learning] [daily] 80%
  6. Exercise [exercise] [daily] 70%
```

### When Server is Down ❌
```
⚠️ Cannot connect to server. Make sure the Express server is running on localhost:5000

Server Status: ✗ Offline
```

## 🎯 Next Steps After Testing

1. **Database Integration**
   - Replace mock data with MongoDB
   - Update API endpoints to use database

2. **Authentication**
   - Implement JWT login/signup
   - Protect API endpoints

3. **Frontend Development**
   - Migrate to React with TypeScript
   - Add more interactive features
   - Implement dark mode

4. **Testing**
   - Write unit tests with Jest
   - Add integration tests
   - Increase code coverage

5. **Deployment**
   - Deploy backend to Railway/Render
   - Deploy frontend to Vercel
   - Set up CI/CD with GitHub Actions

## 📚 Files Overview

- **server/index.js** - Express server with API endpoints
- **client/index.html** - Frontend UI with JavaScript
- **server/package.json** - Backend dependencies
- **package.json** - Root package with scripts
- **SETUP.md** - Installation and setup guide
- **PROJECT_SUMMARY.md** - Project overview

## ✨ Features Demonstrated

✅ Express server running
✅ RESTful API endpoints
✅ Mock data management
✅ Frontend/Backend integration
✅ Real-time status checking
✅ Error handling
✅ Responsive UI
✅ Auto-refresh functionality

## 🎉 Success Indicators

You'll know everything is working when:

1. Server logs show "🚀 Server running"
2. Browser shows "✓ Online" status
3. Dashboard displays all 4 stat cards
4. All 6 habits appear in the list
5. No red error messages
6. Data updates every 10 seconds

---

**Happy Testing! 🚀**

For more information, see [SETUP.md](./SETUP.md) and [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
