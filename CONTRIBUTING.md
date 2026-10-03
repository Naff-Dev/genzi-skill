# Contributing to Genzi 🔑

Terima kasih atas minat Anda untuk berkontribusi pada **Genzi**!  
*Thank you for your interest in contributing to Genzi!*

Genzi adalah proyek **100% Open Contribution**. Kami percaya bahwa standar desain web, kode berkualitas tinggi, dan perlawanan terhadap *"generic AI slop"* membutuhkan kolaborasi dari para engineer, desainer, product manager, dan AI prompt engineer di seluruh dunia.

---

## 🌟 Mengapa Berkontribusi di Genzi?

AI coding agent semakin pintar, tapi hasilnya sering kali terasa monoton: hero cloned, gradien ungu-biru yang klise, tombol melayang tanpa fungsi, dan kode tanpa pengamanan. 

Genzi hadir sebagai koentji untuk mengubah standar tersebut. Setiap kontribusi Anda—baik itu menambahkan contoh prompt industri baru, menyumbang aturan anti-slop, memperbarui token CSS, atau memperbaiki dokumentasi—membantu ribuan developer mendapatkan hasil coding AI yang berkarakter manusia dan siap produksi.

---

## 🎯 Area Kontribusi yang Dibuka

Anda bebas berkontribusi di berbagai area berikut:

### 1. ⚡ Koleksi Prompt Baru (`skills/genzi/examples/`)
Tambahkan contoh prompt siap pakai untuk domain atau industri baru, misalnya:
- **Fintech & Micro-investment Dashboard**
- **Healthcare & Doctor Appointment System**
- **Edutech & Interactive Learning Portal**
- **Travel, Hotel Booking, & Car Rental**
- **Creative Agency & Video Production Portfolio**

> **Format contoh prompt**: Setiap file contoh baru di `skills/genzi/examples/` wajib memiliki heading level 1 (`# Example ...`), bagian `## Activation Prompt`, variasi prompt (pendek, detail, iterasi), dan minimal 500 karakter agar lulus pengujian `npm run validate`.

### 2. 🚫 Berantas Pola AI Slop (`skills/genzi/references/`)
Pernah melihat pola AI yang generik dan mengesalkan yang belum tercatat?
- Tambahkan ciri-ciri AI slop baru ke [`design-guidelines.md`](skills/genzi/references/design-guidelines.md).
- Perbarui checklist audit pada [`review-checklist.md`](skills/genzi/references/review-checklist.md).
- Usulkan resep komponen CSS baru yang berkarakter dan fungsional.

### 3. 🎨 Desain & Token Kits (`skills/genzi/references/token-kits.md`)
- Rancang Token Kit CSS baru untuk estetika spesifik (misal: Neo-brutalism, Swiss Minimalist, Retro Cyberpunk, Luxury Editorial).
- Usulkan kombinasi font Google Fonts / lokal yang harmonis dan tipografi hierarkis.

### 4. 🛡️ Keamanan, SEO, & Kode Tangguh
- Tambahkan pola pertahanan OWASP baru di [`security-and-hardening.md`](skills/genzi/references/security-and-hardening.md).
- Tingkatkan strategi Core Web Vitals, JSON-LD Schema.org, atau OpenGraph di [`seo-and-performance.md`](skills/genzi/references/seo-and-performance.md).

### 5. 📚 Dokumentasi & Perbaikan Typo
- Perjelas langkah alur kerja di [`SKILL.md`](skills/genzi/SKILL.md).
- Terjemahan atau penyempurnaan copywriting di [`README.md`](README.md).

---

## 🛠️ Langkah-Langkah Berkontribusi (Workflow)

Ikuti langkah mudah berikut untuk mengajukan perubahan:

### 1. Fork & Clone Repositori
Fork repositori ini ke akun GitHub Anda, lalu clone ke komputer lokal:
```bash
git clone https://github.com/<username-anda>/genzi-skill.git
cd genzi-skill
```

### 2. Buat Branch Baru
Gunakan nama branch yang deskriptif:
```bash
# Untuk fitur atau prompt baru
git checkout -b feat/tambah-contoh-fintech

# Untuk perbaikan bug atau typo
git checkout -b fix/perbaikan-token-kits

# Untuk pembaruan dokumentasi
git checkout -b docs/update-readme
```

### 3. Lakukan Perubahan
Edit file yang ingin Anda tingkatkan dengan editor favorit Anda.

### 4. Jalankan Validasi Otomatis (Wajib Lulus)
Sebelum melakukan commit, pastikan seluruh format dan file lulus uji validasi:
```bash
npm run validate
```
Jika ada pesan `[FAIL]`, periksa pesan kesalahan dan perbaiki file terkait hingga muncul:
```text
All validation checks passed successfully.
```

### 5. Commit Perubahan
Gunakan pesan commit yang jelas mengikuti konvensi [Conventional Commits](https://www.conventionalcommits.org/):
```bash
git add .
git commit -m "feat(examples): add fintech and micro-investment prompt collection"
```

### 6. Push & Buat Pull Request (PR)
Push branch Anda ke repository fork:
```bash
git push origin feat/tambah-contoh-fintech
```
Buka repositori di GitHub, lalu klik **Compare & pull request**. Berikan penjelasan singkat mengenai:
- Apa perubahan yang Anda lakukan?
- Mengapa perubahan ini bermanfaat untuk pengguna Genzi?

---

## 📋 Prinsip Kontribusi Genzi

Setiap kontribusi harus menjunjung tinggi prinsip inti Genzi:
1. **No AI Clichés**: Hindari saran desain yang mempromosikan gradien ungu-biru generik, tombol melayang hampa, atau emoji sebagai ikon UI.
2. **Actionable & Practical**: Prompt dan panduan harus langsung bisa dijalankan oleh AI coding agent tanpa perlu modifikasi berbelit-belit.
3. **Domain-Grounded**: Gunakan konteks nyata (bukan nama generik seperti "Item 1" atau "Super Amazing Product").
4. **Security & Accessibility First**: Pastikan saran kode memperhatikan validasi input, kontras warna yang nyaman, dan ergonomi mobile.

---

## 🤝 Pengakuan & Apresiasi

Semua kontributor yang Pull Request-nya berhasil di-merge akan dicantumkan dalam catatan rilis dan daftar kontributor resmi proyek ini.

Jika Anda memiliki pertanyaan sebelum membuat PR, silakan buat [Discussion](https://github.com/Naff-Dev/genzi-skill/discussions) atau buka [Issue baru](https://github.com/Naff-Dev/genzi-skill/issues).

**Mari bersama-sama jadikan Genzi koentji AI coding terbaik!** 🚀
