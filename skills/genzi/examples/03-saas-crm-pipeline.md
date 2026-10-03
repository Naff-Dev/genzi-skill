# Example 3: SaaS CRM Deal Pipeline

## Activation Prompt
```text
use Naff-Dev/genzi-skill build an interactive B2B sales deal pipeline board with drag-and-drop Kanban columns, stage weighted value calculation, deal velocity badges, filter drawer by sales rep, and CSV export.
```

## Short Prompt (Informal)
```text
use Naff-Dev/genzi-skill redesign dashboard deal pipeline ini agar lebih visual, bold, responsive, dan ada ringkasan revenue per stage serta indikator deal yang hampir expired.
```

## Detailed Prompt with Data & UX Requirements
```text
use Naff-Dev/genzi-skill buatkan dashboard CRM pipeline penjualan B2B:
- Pipeline Columns: Lead Masuk, Kontak Pertama, Demo Produk, Negosiasi Proposal, Closed Won, Closed Lost.
- Kartu Deal: Menampilkan nama prospek perusahaan, logo inisial dengan background warna brand, nilai nominal transaksi (misal: Rp 150.000.000), estimasi tanggal closing, avatar sales PIC, dan status badge (Hot, Stale, Urgent).
- Header Summary Strip: Total potensi pipeline, weighted forecast value berdasarkan probabilitas per tahap, rata-rata durasi closing (win velocity), dan target pencapaian kuartal ini (progress bar).
- Interaksi: Drag and drop kartu antar kolom dengan optimasi animasi halus, klik kartu untuk membuka drawer detail aktivitas (riwayat call, email, catatan meeting).
- Style: Clean utilitarian enterprise SaaS, token kit Dashboard B2B, font Plus Jakarta Sans, kontras tajam, zero unnecessary gradient glow.
```

## Iteration & Follow-up Prompts
```text
// Iterasi 1 - Filter & Multi-dimensi
tambahkan quick filter bar di bagian atas: filter berdasarkan Sales Rep (dropdown multi-select), rentang nilai deal (slider/chips), dan rentang target bulan penutupan.

// Iterasi 2 - Quick Activity Logger
tambahkan shortcut tombol aksi cepat pada kartu saat di-hover: 'Log Call', 'Add Note', dan 'Send WhatsApp' tanpa harus membuka drawer lengkap.

// Iterasi 3 - Keyboard Navigation
dukung navigasi keyboard (panah kiri/kanan untuk pindah kolom, panah atas/bawah untuk pilih kartu deal, spasi untuk expand detail).
```

## English Variation Prompt
```text
use Naff-Dev/genzi-skill develop an enterprise-grade sales pipeline Kanban board for a B2B SaaS platform. Needs stage total indicators, weighted pipeline forecasts, win-rate analytics, drag-and-drop deal progression, and inline contact history drawer.
```
