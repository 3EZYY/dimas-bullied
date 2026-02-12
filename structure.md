reksi-bully/
├── app/ # Route & Page (App Router)
│ ├── (auth)/ # (Optional) Login/Register jika perlu
│ ├── edukasi/ # Halaman Edukasi Orang Tua
│ │ └── page.tsx
│ ├── peta/ # Halaman Mapping Sebaran Kasus
│ │ └── page.tsx
│ ├── cerita/ # Halaman Sharing Kisah
│ │ └── page.tsx
│ ├── solusi/ # Halaman Pusat Bantuan & Solusi
│ │ └── page.tsx
│ ├── layout.tsx # Navbar & Footer di sini
│ └── page.tsx # Landing Page (Home)
├── components/ # Reusable Components
│ ├── ui/ # Komponen dari shadcn/ui (Button, Card, Input, dll)
│ ├── shared/ # Navbar.tsx, Footer.tsx, Hero.tsx
│ ├── home/ # Komponen khusus halaman Home (Stats, Features)
│ ├── mapping/ # Komponen Peta Interaktif / Chart
│ └── forms/ # Form Pelaporan & Sharing Cerita
├── lib/ # Konfigurasi & Utility
│ ├── supabase.ts # Client Supabase
│ └── utils.ts # Helper Tailwind (cn)
├── public/ # Asset Statis
│ ├── illustrations/ # Gambar pendukung edukasi
│ └── icons/ # Logo & Icon khusus
├── types/ # TypeScript Interfaces (Database schema)
├── .env.local # API Keys (Supabase URL & Key)
└── tailwind.config.ts # Custom warna (Safe Blue, Soft Teal)
