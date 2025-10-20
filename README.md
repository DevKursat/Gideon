# Gideon - Supabase Auth System

Modern, güvenli ve kullanıcı dostu bir kimlik doğrulama sistemi. Supabase ile güçlendirilmiştir.

## ✨ Özellikler

- 🔐 **Güvenli Kimlik Doğrulama**: Supabase ile enterprise düzey güvenlik
- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- 🌙 **Dark Theme**: Koyu mavi/gece mavisi modern tasarım
- ⚡ **Hızlı & Performanslı**: React + Vite ile optimize edilmiş
- 🔄 **Otomatik Oturum Yönetimi**: Token yenileme ve oturum kontrolü
- 🎨 **Modern UI/UX**: Animasyonlar ve smooth geçişler

## 🚀 Kullanım

### Geliştirme Ortamı

```bash
npm install
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine gidin.

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/       # Yeniden kullanılabilir bileşenler
│   └── ProtectedRoute.tsx
├── contexts/         # React Context (State Management)
│   └── AuthContext.tsx
├── lib/              # Yardımcı kütüphaneler
│   └── supabase.ts
├── pages/            # Sayfa bileşenleri
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── ForgotPassword.tsx
│   └── Dashboard.tsx
├── styles/           # CSS dosyaları
│   ├── auth.css
│   └── dashboard.css
├── types/            # TypeScript tipleri
│   └── auth.ts
├── App.tsx           # Ana uygulama bileşeni
└── main.tsx          # Giriş noktası
```

## 🔑 Özellikler Detayı

### Kimlik Doğrulama

- ✅ Kullanıcı girişi
- ✅ Yeni kullanıcı kaydı
- ✅ Şifre sıfırlama
- ✅ E-posta doğrulama
- ✅ Otomatik oturum yenileme
- ✅ Güvenli çıkış

### Güvenlik

- 🔒 PKCE flow ile OAuth
- 🔒 JWT token yönetimi
- 🔒 Otomatik token yenileme
- 🔒 Protected routes
- 🔒 XSS ve CSRF koruması

### Kullanıcı Deneyimi

- 💫 Smooth animasyonlar
- 📱 Responsive tasarım
- ⌨️ Keyboard navigation
- ♿ Accessibility (a11y)
- 🎯 Form validasyonu
- 💬 Hata mesajları

## 🛠 Teknolojiler

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Backend**: Supabase
- **Styling**: Pure CSS (Custom)
- **State Management**: React Context API

## 📝 Lisans

MIT License

---

Made with ❤️ by Gideon Team