# Example 1: Food Delivery & Grocery Landing Page

## Activation Prompt
```text
use Naff-Dev/genzi-skill buatkan landing page untuk aplikasi grocery & food delivery lokal "SegarPagi" yang melayani pesanan sayur dan lauk pasar tradisional untuk ibu rumah tangga di kota tier-2 (Solo/Malang). Pengantaran subuh sebelum jam 06.30 pagi, ada fitur cek ongkir per kecamatan, dan checkout langsung via WhatsApp.
```

## Short Prompt (Informal)
```text
use Naff-Dev/genzi-skill bikin landing page jualan sayur segar pasar subuh buat emak-emak, tone lokal, bersih, ada katalog harga pasar hari ini dan tombol pesan wa.
```

## Detailed Prompt with Constraints
```text
use Naff-Dev/genzi-skill rancang landing page konversi tinggi untuk SegarPagi:
- Target: Ibu rumah tangga & keluarga muda yang butuh belanjaan dapur segar sebelum jam masak subuh.
- Section: Hero dengan janji antar sebelum 06.30 WIB, ribbon 4 keunggulan (timbang pas, harga pasar asli, garansi segar, bisa COD), katalog harga harian (sayur, ayam, ikan, bumbu dapur), paket hemat masak keluarga 4 orang, dan form checkout ringkas langsung kirim pesan format order rapi ke WhatsApp.
- Style: Retail Storefront, warna dominan hijau daun segar (#1E3A2B) dan aksen oranye wortel (#E05A2B), font Inter + Playfair Display, mobile-first, zero AI slop (tanpa floating status badge melayang).
```

## Iteration & Follow-up Prompts
```text
// Iterasi 1 - Tambah Filter & Sticky Cart
tambahkan sticky floating cart bar di bagian bawah mobile view yang menampilkan total item dan estimasi subtotal belanjaan, plus filter kategori horizontal scrollable.

// Iterasi 2 - Garansi & Bukti Timbang
buatkan section bukti timbangan jujur dan video unboxing singkat dari pelanggan pasar lokal dengan rating bintang 5 dan testimoni asli.

// Iterasi 3 - Slot Pengantaran
pada modal checkout WhatsApp, tambahkan pilihan slot waktu pengantaran: Slot Subuh (05.30 - 06.30 WIB) atau Slot Pagi (06.30 - 07.30 WIB).
```

## English Variation Prompt
```text
use Naff-Dev/genzi-skill build a high-converting landing page for "FreshDawn", a hyperlocal morning farm-to-table grocery delivery service. Deliveries arrive before 6:30 AM. Include daily market price ticker, category pills, family meal bundle builder, and 1-tap WhatsApp order dispatch.
```
