# Example 1: Grocery Delivery Landing Page (Retail & Storefront Archetype)

## Activation Prompt
```text
use Naff-Dev/genzi-skill build a landing page for a local grocery delivery service targeting tier-2 city families
```

---

## 1. Domain & Behavioral Context
- **Product**: SegarPagi (Local morning market grocery delivery service for Indonesian tier-2 cities like Solo, Malang, Cirebon).
- **Target Audience**: Homemakers and working parents ordering fresh dawn-market produce, poultry, and kitchen staples delivered before 06:30 AM.
- **Surface Mode**: Persuade & Operate. High conversion, low friction, mobile-first ergonomics.
- **Design Inspiration Standard**: World-class retail storefront architecture (clean studio photography, high contrast, editorial typography, zero AI tropes).

---

## 2. Page Architecture & Section Hierarchy

### 1. High-Utility Header & Announcement Strip
- **Top Announcement Ribbon**: Dark harvest green background with crisp white typography detailing dawn dispatch schedules ("Pesan sebelum 21.00 WIB untuk pengantaran 05.30 - 06.30 WIB") and automatic free delivery threshold.
- **Main Navigation Bar**: Sticky frosted-glass header (`backdrop-filter: blur(12px)`) featuring:
  - Brand identity with local market tagline.
  - Global Search Bar with dedicated search icon (`input[type="search"]` placeholder: "Cari sayur bayam, ayam potong, beras...").
  - Regional Location Context Selector with pin icon ("Kirim ke: Banjarsari, Solo ▾").
  - Persistent Shopping Cart trigger with live item count badge and subtotal pill.

### 2. Atmospheric & High-Craft Hero Section
- **Typography**: High-contrast Editorial Serif headline (`DM Serif Display` or `Playfair Display`) paired with clean sans body (`Inter` / `Plus Jakarta Sans`):
  - Headline: *"Sayur & Belanja Dapur Segar Pasar Tradisional, Diantar ke Rumah Sebelum 06.30 Pagi"*
  - Subtitle: Clear, grounded delivery promise without AI buzzwords.
  - Directional Action CTA: Single commanding forest green button with arrow (`Mulai Belanja Subuh →`).
- **Visual Anchor**: Studio-composed harvest visual asset (woven bamboo basket brimming with morning dew vegetables, farm chicken, red chilies, with natural soft shadows and warm dawn light).
- **Anti-AI Rule**: ABSOLUTE BAN on floating status pill badges with dots above the headline. ABSOLUTE BAN on text-only SaaS comparison tables in the hero.

### 3. Slim Horizontal Value & Trust Ribbon
- Replaces bulky bento cards with a single slim horizontal ribbon separated by delicate vertical hairline dividers:
  1. **Tiba Jam 06.30 Subuh**: Dispatch tepat waktu sebelum jam masak keluarga.
  2. **Harga Pasar Asli**: Tanpa mark-up supermarket gelap.
  3. **Garansi Timbang Pas**: Stiker tera resmi, selisih berat langsung diganti.
  4. **Bisa Bayar COD**: Cek fisik barang di tempat sebelum bayar ke kurir.

### 4. Promotional Voucher Strip
- High-contrast brand banner highlighting first-order discount (`DISKON Rp 15.000 BELANJA PERTAMA`).
- Dashed coupon ticket box (`KODE: PAGISEGAR`) with 1-tap copy action and instant toast feedback.

### 5. Visual "Belanja Kategori" Navigation
- Horizontal scrollable track of circular pastel icon pills with crisp line artwork:
  - Sayur Mayur (Embun Subuh)
  - Daging & Unggas Bersih
  - Ikan & Seafood Segar
  - Bumbu Dapur & Rempah
  - Sembako & Beras Lokal
  - Paket Masak Hemat

### 6. Photo-Driven Product Catalog Grid
- 4-column responsive grid of high-fidelity product cards:
  - Real studio produce photography on neutral warm background (`#F9F8F5`).
  - Product title with net weight unit (e.g., "Bayam Cabut Segar (2 Ikat)").
  - Star ratings with review count (`★★★★★ 4.9 (128 ulasan)`).
  - Dual price display: Active local market price alongside crossed-out supermarket price (`Rp 5.000` ~~Rp 9.000~~).
  - Tactile `+ Keranjang` button with micro-press scale feedback.

### 7. Interactive Family Meal Bundle Customizer ("Paket Hemat Dapur")
- Interactive bundle selector where users can adjust household size (Pasutri 2 Orang, Keluarga 4-5 Orang) and swap proteins or vegetables with instantaneous total calculation.

### 8. Customer Trust & Social Proof (Customer Love Split Section)
- Left: Community trust statement with average satisfaction rating.
- Right: Authentic customer quote from a verified local homemaker with photo, location tag, and star rating.

### 9. Slide-Out Cart Drawer & Direct Checkout
- Accessible slide-out cart drawer supporting:
  - Line-item quantity steppers (`-`, `+`, `delete`).
  - Delivery slot selector (05.30 - 06.30 WIB vs 06.30 - 07.30 WIB).
  - Payment method toggle (Cash on Delivery / QRIS / WhatsApp Direct Order).
  - 1-tap WhatsApp encoded order manifest generator.
