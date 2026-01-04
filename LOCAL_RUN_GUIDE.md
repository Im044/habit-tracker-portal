# 🚀 Habit Tracker Portal - Local Run Guide for You & Friends

## What You Have Created
A fully interactive habit tracker web portal that you and your friends can access locally on your network!

**Features:**
✅ Interactive monthly habit tracking with checkboxes
✅ 8 customizable habits (Wake up, Cold shower, Hydrate, Stretching, Healthy Lunch, Study, Exercise, Work)
✅ Real-time progress charts and graphs
✅ Beautiful sidebar with habit selection
✅ Progress circle showing daily completion
✅ Responsive design works on all devices
✅ No database needed - works with mock data
✅ Share across your local network with friends

---

## Quick Start (30 seconds)

### For You (Single User):

```bash
# 1. Clone the repository
git clone https://github.com/Im044/habit-tracker-portal.git
cd habit-tracker-portal

# 2. Start the backend server
cd server
npm install
node index.js

# 3. In another terminal, open the frontend
cd client
# On Windows: Double-click index.html
# On Mac: open index.html
# Or use: python -m http.server 8000
```

Then visit: **http://localhost:8000/index.html**

---

## Share Across Network (For You & Friends)

### Step 1: Find Your Computer's Local IP

**On Windows (Command Prompt):**
```bash
ipconfig
# Look for "IPv4 Address" under your active connection
# Example: 192.168.1.100
```

**On Mac/Linux (Terminal):**
```bash
ifconfig
# Look for inet address
```

### Step 2: Start Simple HTTP Server

**Using Python (Easiest):**
```bash
cd habit-tracker-portal/client
python -m http.server 8000
# Or for Python 2:
python -m SimpleHTTPServer 8000
```

**Using Node.js (Alternative):**
```bash
npm install -g http-server
cd habit-tracker-portal/client
http-server
```

### Step 3: Share with Friends

Tell your friends to visit:
```
http://YOUR_LOCAL_IP:8000/index.html
```

Example:
```
http://192.168.1.100:8000/index.html
http://192.168.0.50:8000/index.html
```

### Step 4: Friends Access on Their Devices

- **Same WiFi:** Friends on same WiFi network can visit the URL above
- **Same LAN:** Works on any device connected to your local network
- **Different Networks:** Won't work (would need public hosting)

---

## Backend Server Setup (Optional - For Database Later)

```bash
# In server directory
npm install
node index.js

# Server runs on http://localhost:5000
# API endpoints available at:
# GET  /api/habits
# GET  /api/dashboard
# GET  /api/habits/:id/progress
# POST /api/habits (create)
# PUT  /api/habits/:id (update)
# DELETE /api/habits/:id (delete)
```

---

## Features Explained

### 1. Monthly Habit Tracking
- Click habits on the left sidebar
- Check/uncheck daily completion boxes
- See progress update in real-time

### 2. Progress Visualization
- **Circular Progress:** Shows overall completion %
- **Bar Charts:** Individual habit completion percentages
- **Interactive:** Data updates as you check boxes

### 3. Sidebar Habits
- 8 pre-loaded habits with emojis
- Click to switch between habits
- "OPEN" status indicator

### 4. Month Navigation
- Previous/Next buttons (ready for extension)
- Shows current month (January)

---

## Customization Guide

### Add More Habits
Edit `client/index.html` line ~116:

```javascript
const habits = [
  { name: 'Wake up at 6', emoji: '😴', daysCompleted: [1,1,0,1,1,1,0] },
  { name: 'Your Habit', emoji: '🎯', daysCompleted: [0,0,0,0,0,0,0] },
  // Add more here
];
```

### Change Habit Days
Modify the `daysCompleted` array (7 days = first week):
- `1` = Completed
- `0` = Not completed

### Change Colors
Edit CSS variables in `client/index.html` ~<style> section:
```css
/* Primary color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors:
#667eea = Purple
#764ba2 = Dark Purple
*/
```

---

## Troubleshooting

### Can't access from another device?
- ✅ Make sure both devices on same WiFi
- ✅ Check firewall isn't blocking port 8000
- ✅ Verify correct IP address (ping it)
- ✅ Try: http://YOUR_IP:8000 (without /index.html)

### Page won't load?
- ✅ Make sure server is running
- ✅ Check browser console (F12 → Console tab)
- ✅ Try different browser
- ✅ Clear browser cache

### Habits not saving?
- ✅ Data is only in browser memory (not persistent yet)
- ✅ Refresh page = data resets (add localStorage for persistence)
- ✅ Backend server needed for permanent storage

---

## Next Steps for Full Features

### To Add Data Persistence:
1. Connect backend server to MongoDB
2. Update API endpoints in server/index.js
3. Modify frontend to send data to backend
4. Add user authentication

### To Deploy Online:
1. Deploy backend to Railway/Render
2. Deploy frontend to Vercel/Netlify
3. Update API_URL in frontend
4. Share public URL with friends

### To Add More Features:
1. Dark mode toggle
2. Export data as PDF/CSV
3. Weekly/yearly views
4. Statistics dashboard
5. Goal setting & reminders

---

## File Structure

```
habit-tracker-portal/
├── client/
│   └── index.html          # Interactive web portal (this is what you use!)
├── server/
│   ├── index.js            # Backend API server
│   └── package.json        # Dependencies
├── package.json            # Root package
├── SETUP.md                # Installation guide
├── PROJECT_SUMMARY.md      # Project overview
├── TESTING_GUIDE.md        # Testing instructions
└── LOCAL_RUN_GUIDE.md      # This file
```

---

## Commands Summary

```bash
# Clone project
git clone https://github.com/Im044/habit-tracker-portal.git
cd habit-tracker-portal

# Option 1: Python server (easiest)
cd client
python -m http.server 8000

# Option 2: Node.js server
npm install -g http-server
http-server client -p 8000

# Option 3: Full stack with backend
cd server && npm install && node index.js  # Terminal 1
cd client && python -m http.server 8000    # Terminal 2

# Share with friends:
# 1. Find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)
# 2. Share: http://YOUR_IP:8000/index.html
# 3. Friends visit on same WiFi
```

---

## Support & Questions

Everything works! Just:
1. Start the server
2. Open index.html in browser
3. Share IP with friends
4. They visit URL on their devices

Happy tracking! 🎉
