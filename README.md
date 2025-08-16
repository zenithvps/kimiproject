# MyGrok - AI Chatbot Website

Website AI chatbot dengan tampilan, interaksi, dan alur pengguna yang 100% identik dengan Grok (chatbot dari xAI/Elon Musk).

## 🚀 Fitur Utama

- **UI/UX Modern**: Desain minimalis dengan tema gelap seperti Grok
- **Full-screen Chat Interface**: Antarmuka chat full height yang responsif
- **Streaming Responses**: Jawaban muncul huruf demi huruf secara real-time
- **Chat History**: Riwayat chat tersimpan di browser (localStorage)
- **Responsive Design**: Optimal untuk mobile dan desktop
- **Animasi Smooth**: Efek animasi dengan Framer Motion
- **API Integration**: Terintegrasi dengan OpenAI API (opsional)

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Axios

### Backend
- Node.js + Express
- OpenAI API
- CORS & Security middleware
- Rate limiting

## 📁 Struktur Proyek

```
mygrok/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── types/           # TypeScript types
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Node.js backend
│   ├── server.js            # Express server
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🚀 Instalasi & Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd mygrok
```

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
```

Edit file `.env` dan tambahkan OpenAI API key (opsional):
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

### 4. Menjalankan Aplikasi

#### Development Mode
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

#### Production Mode
```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd ../backend
npm start
```

## 🌐 Akses Aplikasi

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🔧 Konfigurasi

### Environment Variables

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key_here
```

#### Frontend (vite.config.ts)
```typescript
// Proxy configuration untuk development
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
```

## 🚀 Deployment

### Frontend (Vercel)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy otomatis

### Backend (Railway/Render)
1. Push code ke GitHub
2. Connect repository ke Railway/Render
3. Set environment variables
4. Deploy

## 🎨 Fitur UI/UX

### Design System
- **Colors**: Dark theme dengan aksen biru (#1da1f2)
- **Typography**: System fonts (San Francisco, Segoe UI, dll)
- **Spacing**: Consistent spacing dengan Tailwind
- **Animations**: Smooth transitions dengan Framer Motion

### Components
- **Navbar**: Sticky header dengan logo dan clear chat
- **ChatArea**: Scrollable area dengan auto-scroll
- **ChatInput**: Sticky input dengan auto-resize
- **ChatMessage**: Animated bubbles untuk user dan bot

## 🔌 API Endpoints

### POST /chat
Mengirim pesan ke AI chatbot

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "message": "Hello! I'm doing great, thank you for asking..."
}
```

### GET /health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🛡️ Security Features

- **CORS**: Cross-origin resource sharing
- **Helmet**: Security headers
- **Rate Limiting**: 100 requests per 15 minutes
- **Input Validation**: Sanitasi input
- **Error Handling**: Proper error responses

## 🔄 State Management

- **Local Storage**: Chat history persistence
- **React State**: Component state management
- **Auto-save**: Otomatis simpan chat history

## 📱 Responsive Design

- **Mobile First**: Design untuk mobile terlebih dahulu
- **Breakpoints**: Tailwind responsive breakpoints
- **Touch Friendly**: Optimized untuk touch devices
- **Keyboard Handling**: Proper keyboard navigation

## 🎯 Roadmap

- [ ] Voice input/output
- [ ] File upload support
- [ ] Multi-language support
- [ ] User authentication
- [ ] Chat export functionality
- [ ] Custom themes
- [ ] Plugin system

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - lihat file LICENSE untuk detail

## 🆘 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---

**MyGrok** - AI Chatbot yang terinspirasi dari Grok 🤖✨