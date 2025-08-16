# 📁 Project Structure - MyGrok

```
mygrok/
├── 📁 frontend/                    # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 components/          # React Components
│   │   │   ├── ChatArea.tsx        # Main chat display area
│   │   │   ├── ChatInput.tsx       # Message input component
│   │   │   ├── ChatMessage.tsx     # Individual message bubble
│   │   │   └── Navbar.tsx          # Top navigation bar
│   │   ├── 📁 types/               # TypeScript Type Definitions
│   │   │   └── index.ts            # Message, ChatState, ApiResponse types
│   │   ├── 📁 utils/               # Utility Functions
│   │   │   ├── api.ts              # API communication functions
│   │   │   └── storage.ts          # localStorage utilities
│   │   ├── App.tsx                 # Main application component
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles with Tailwind
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.ts              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tsconfig.json               # TypeScript configuration
│   ├── tsconfig.node.json          # Node.js TypeScript config
│   ├── .eslintrc.cjs               # ESLint configuration
│   ├── vercel.json                 # Vercel deployment config
│   ├── index.html                  # HTML template
│   └── .gitignore                  # Frontend gitignore
│
├── 📁 backend/                     # Node.js Backend Application
│   ├── server.js                   # Express server with chat API
│   ├── package.json                # Backend dependencies
│   ├── .env.example                # Environment variables template
│   ├── railway.json                # Railway deployment config
│   └── .gitignore                  # Backend gitignore
│
├── package.json                    # Root package.json with scripts
├── install-and-run.sh              # Automated installation script
├── README.md                       # Comprehensive documentation
├── QUICK_START.md                  # Quick start guide
└── PROJECT_STRUCTURE.md            # This file
```

## 🎯 Key Files Explained

### Frontend Core Files
- **`App.tsx`**: Main application orchestrator with chat logic
- **`ChatArea.tsx`**: Scrollable chat display with auto-scroll
- **`ChatInput.tsx`**: Message input with streaming text display
- **`ChatMessage.tsx`**: Individual message bubbles with animations
- **`Navbar.tsx`**: Top navigation with logo and clear chat button

### Backend Core Files
- **`server.js`**: Express server with `/chat` endpoint and OpenAI integration
- **`.env.example`**: Template for environment variables

### Configuration Files
- **`tailwind.config.js`**: Custom Grok-like color scheme and animations
- **`vite.config.ts`**: Development server with API proxy
- **`package.json`**: Dependencies and scripts for both frontend and backend

### Utility Files
- **`api.ts`**: API communication with fallback to dummy responses
- **`storage.ts`**: localStorage utilities for chat history persistence
- **`types/index.ts`**: TypeScript type definitions

## 🚀 Scripts Available

### Root Level
```bash
npm run dev              # Run both frontend and backend
npm run dev:frontend     # Run only frontend
npm run dev:backend      # Run only backend
npm run build            # Build frontend for production
npm run start            # Start backend in production
npm run setup            # Install all dependencies
```

### Frontend
```bash
cd frontend
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Backend
```bash
cd backend
npm run dev              # Start with nodemon
npm start                # Start in production
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key_here
```

## 🎨 Design System

### Colors (tailwind.config.js)
```javascript
colors: {
  'grok-dark': '#0f0f0f',      // Main background
  'grok-darker': '#000000',    // Navbar background
  'grok-gray': '#1a1a1a',      // Borders
  'grok-light-gray': '#2a2a2a', // Message bubbles
  'grok-text': '#ffffff',      // Primary text
  'grok-text-secondary': '#a0a0a0', // Secondary text
  'grok-accent': '#1da1f2',    // Primary accent (blue)
}
```

### Animations
- **Fade In**: Messages appear with smooth fade-in
- **Typing Indicator**: 3-dot animation for bot responses
- **Hover Effects**: Subtle scale animations on interactive elements
- **Streaming Text**: Character-by-character text display

## 🔌 API Endpoints

### POST /chat
- **Purpose**: Send message to AI chatbot
- **Request**: `{ "message": "Hello" }`
- **Response**: `{ "message": "AI response" }`

### GET /health
- **Purpose**: Health check endpoint
- **Response**: `{ "status": "OK", "timestamp": "..." }`

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind responsive breakpoints
- **Touch Friendly**: Proper touch targets and interactions
- **Keyboard Navigation**: Full keyboard support

---

**MyGrok** - Complete AI Chatbot with Grok-like Interface 🤖✨