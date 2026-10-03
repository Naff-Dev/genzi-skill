# Example 2: POS Cashier Application

## Activation Prompt
```text
use Naff-Dev/genzi-skill build a fast, high-density POS cashier web app for coffee shops and retail outlets with barcode scanning, quick number keypad, split payments (Cash, QRIS, Card), and offline receipt generation.
```

## Short Prompt (Informal)
```text
use Naff-Dev/genzi-skill bikinin web app kasir toko yang enteng dan cepet buat kasir di tablet, ada tombol cepat menu favorit, scanner barcode kamera, hitung kembalian otomatis, dan cetak struk thermal 58mm.
```

## Detailed Prompt with Operational Workflows
```text
use Naff-Dev/genzi-skill buat aplikasi web POS (Point of Sale) kasir kasir offline-ready:
- Layar Utama: Split view desktop/tablet. Sisi kiri katalog produk dengan search instan, filter kategori (Kopi, Non-kopi, Snack, Pastry), dan grid kartu berukuran tap-friendly (min 48px). Sisi kanan ringkasan order aktif (daftar pesanan, stepper qty, diskon per item/total, catatan khusus).
- Alur Pembayaran: Modal popup bayar cepat dengan preset uang pas (Rp 20k, Rp 50k, Rp 100k), input nominal bayar manual, kalkulasi uang kembalian real-time, dan tombol print struk.
- Shortcut Keyboard: F2 untuk cari item, F4 untuk bayar tunai, F8 untuk diskon, ESC untuk reset order.
- Design: High-density Utilitarian archetype, dark charcoal background (#18181B) dengan kontras tinggi teks putih/kuning amber (#F59E0B) agar kasir tidak silau saat shift malam.
```

## Iteration & Follow-up Prompts
```text
// Iterasi 1 - Ringkasan Shift Kasir
tambahkan drawer tutup shift kasir (Z-Report) yang merangkum modal awal, total omzet tunai, total QRIS, selisih kas, dan tombol cetak laporan tutup toko.

// Iterasi 2 - Mode Offline & IndexedDB
pastikan seluruh transaksi bisa berjalan tanpa koneksi internet menggunakan local storage/IndexedDB dan otomatis sync status antrean saat kembali online.

// Iterasi 3 - Split Bill & Manajemen Meja
tambahkan toggle nomor meja dan fitur split bill rata atau per item untuk transaksi dine-in pelanggan grup.
```

## English Variation Prompt
```text
use Naff-Dev/genzi-skill build an ultra-responsive POS cashier terminal optimized for 10-inch touch tablets. Features: instant product lookup, barcode scanner input listener, split-tender checkout (Cash/Card/QR), thermal receipt layout (58mm/80mm), and daily cash drawer reconciliation.
```
