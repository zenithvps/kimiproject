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

## 🔧 Konfigurasi OpenRouter (Opsional)

Untuk mendapatkan respons AI yang sebenarnya:

1. Daftar di [OpenRouter](https://openrouter.ai)
2. Dapatkan API key dari [Keys page](https://openrouter.ai/keys)
3. Edit file `backend/.env`:
```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_MODEL=openai/gpt-4
```
4. Restart backend server

### Model yang Tersedia
- **openai/gpt-4**: GPT-4 (default)
- **openai/gpt-3.5-turbo**: GPT-3.5 Turbo
- **anthropic/claude-3-opus**: Claude 3 Opus
- **anthropic/claude-3-sonnet**: Claude 3 Sonnet
- **google/gemini-pro**: Google Gemini Pro

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
- OpenRouter API integration
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

### CSS Error
Jika ada error CSS, pastikan Tailwind CSS sudah terinstall dengan benar:
```bash
cd frontend
npm install
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