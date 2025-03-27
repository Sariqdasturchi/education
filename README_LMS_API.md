
# LMS API - Learning Management System

RESTful API for managing users, lessons, tests, assignments, articles, and more in a Learning Management System (LMS).

---

## 🚀 Ishga tushirish

### 1. Klonlash va o'rnatish
```bash
git clone <repo-url>
cd lms-api
npm install
```

### 2. .env fayl yaratish
`.env` faylga quyidagilarni qo'shing:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/lmsdb
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Prisma migratsiya va generate
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Serverni ishga tushirish
```bash
npm run dev
```

---

## 🔐 Autentifikatsiya
- `POST /api/auth/login` - Login (token qaytaradi)
- `GET /api/auth/me` - Profil ma'lumotlari (token orqali)
- `POST /api/auth/request-reset` - Parolni tiklash uchun token yaratish
- `POST /api/auth/reset-password` - Token orqali yangi parol o'rnatish

---

## 👥 Foydalanuvchilar
- `GET /api/users` - Barcha foydalanuvchilar (admin)
- `POST /api/users` - Yangi foydalanuvchi yaratish

> `role`: `admin`, `editor`, `teacher`, `student`

---

## 🎓 Darslar (Lessons)
- `GET /api/lessons` - Darslar ro'yxati
- `POST /api/lessons` - Yangi dars (admin/teacher)
- `PUT /api/lessons/:id` - Darsni yangilash (admin/teacher)

**Dars maydonlari:** `title`, `description`, `video_url`, `materials[]`, `publishAt`, `isPublished`

---

## 🧪 Testlar
- `GET /api/tests` - Testlar ro'yxati
- `POST /api/tests` - Test yaratish (admin/teacher)
- `POST /api/tests/submit` - Testga javob yuborish (foydalanuvchi)

**Test:** `question`, `options[]`, `correctAnswer`

---

## 📝 Topshiriqlar
- `GET /api/assignments` - Barcha topshiriqlar
- `POST /api/assignments` - Yangi topshiriq (admin/teacher)
- `POST /api/assignments/:id/submit` - Javob yuborish (foydalanuvchi)

---

## 📰 Maqolalar (Articles)
- `GET /api/articles` - Barcha maqolalar
- `GET /api/articles/:id` - Bitta maqola (views += 1)
- `POST /api/articles` - Yangi maqola (admin/editor)
- `PUT /api/articles/:id` - Tahrirlash (admin/editor)
- `DELETE /api/articles/:id` - O'chirish (faqat admin)

**Maqola maydonlari:** `title`, `content`, `imageUrl`, `publishAt`, `isPublished`

---

## 📊 Statistikalar
- `GET /api/stats/users` - Foydalanuvchilar statistikasi
- `GET /api/stats/lessons` - Darslar statistikasi
- `GET /api/stats/tests` - Testlar statistikasi

---

## 📂 Media fayllar
- `POST /api/media/upload` - Fayl yuklash (token kerak)
- `file` (form-data orqali) -> qaytadi: `{ fileUrl }`

> Yuklangan fayllar `/uploads` papkada saqlanadi va static ko‘rinishda ochiladi.

---

## 📅 Auto-Post
- `publishAt` maydoni berilsa, backend har 1 daqiqada tekshiradi.
- Vaqt yetganda `isPublished: true` qilinadi (`lessons` va `articles` uchun).

---

## 📦 Texnologiyalar
- **Node.js + Express.js**
- **Prisma + PostgreSQL**
- **JWT** (token asosida autentifikatsiya)
- **Multer** (fayl yuklash)
- **ESLint + Prettier** (code style)

---

## 👨‍💻 Muallif
- Bahodir

---

## 📄 License
MIT
