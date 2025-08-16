# 🚀 Quick Start Guide - MyGrok

## ⚡ Instalasi Cepat

### 1. Install Dependencies
```bash
# Jalankan script instalasi otomatis
./install-and-run.sh
```

### 2. Menjalankan Aplikasi

#### Opsi A: Jalankan Keduanya Sekaligus
```bash
npm run dev
```

#### Opsi B: Jalankan Terpisah
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend  
npm run dev:frontend
```

### 3. Akses Aplikasi
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔧 Konfigurasi OpenAI (Opsional)

Untuk mendapatkan respons AI yang sebenarnya:

1. Dapatkan API key dari [OpenAI Platform](https://platform.openai.com/api-keys)
2. Edit file `backend/.env`:
```env
OPENAI_API_KEY=your_api_key_here
```
3. Restart backend server

## 🎯 Fitur yang Tersedia

✅ **UI/UX Grok-like**
- Tema gelap minimalis
- Full-screen chat interface
- Animasi smooth dengan Framer Motion

✅ **Chat Features**
- Streaming responses (huruf demi huruf)
- Chat history tersimpan di browser
- Clear chat functionality
- Responsive design

✅ **Technical Features**
- React + TypeScript frontend
- Node.js + Express backend
- OpenAI API integration
- Rate limiting & security

## 🐛 Troubleshooting

### Backend tidak bisa start
```bash
cd backend
npm install
npm run dev
```

### Frontend tidak bisa start
```bash
cd frontend
npm install
npm run dev
```

### Port sudah digunakan
```bash
# Kill process di port 3000 atau 5000
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

## 📱 Mobile Testing

Aplikasi sudah responsive dan bisa diakses dari mobile:
- Buka http://localhost:3000 di browser mobile
- Atau gunakan Chrome DevTools untuk simulasi mobile

## 🚀 Deployment

### Frontend (Vercel)
1. Push ke GitHub
2. Connect ke Vercel
3. Deploy otomatis

### Backend (Railway/Render)
1. Push ke GitHub
2. Connect ke Railway/Render
3. Set environment variables
4. Deploy

---

**MyGrok** - AI Chatbot yang terinspirasi dari Grok 🤖✨