
import { Flag, Heart, MapPin, Shield, Users, BookOpen, Search, Phone, Calendar, MessageCircle } from "lucide-react";

export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Edukasi", href: "/edukasi" },
  { name: "Peta Kasus", href: "/peta" },
  { name: "Cerita", href: "/cerita" },
  { name: "Solusi", href: "/solusi" },
];

export const HERO_CONTENT = {
  title: "Bersama Ciptakan Sekolah Aman & Inklusif",
  subtitle: "Platform edukasi keluarga dan pemetaan nasional untuk pencegahan bullying lintas jenjang pendidikan.",
  ctaPrimary: "Pelajari Pencegahan",
  ctaSecondary: "Lapor Kasus",
};

export const BULLYING_STATS = [
  { province: "Jawa Barat", cases: 245, trend: "up", level: "high" },
  { province: "DKI Jakarta", cases: 189, trend: "down", level: "medium" },
  { province: "Jawa Timur", cases: 210, trend: "up", level: "high" },
  { province: "Jawa Tengah", cases: 156, trend: "stable", level: "medium" },
  { province: "Banten", cases: 98, trend: "down", level: "low" },
];

export const ARTICLES = [
  {
    id: 1,
    title: "Mengenal Jenis-Jenis Bullying di Sekolah",
    category: "Dasar",
    excerpt: "Tidak hanya fisik, bullying juga bisa terjadi secara verbal dan siber. Kenali ciri-cirinya agar bisa mencegah sedini mungkin.",
    image: "/images/article-1.jpg",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Tanda Anak Anda Menjadi Korban Bullying",
    category: "Orang Tua",
    excerpt: "Perubahan perilaku mendadak bisa jadi sinyal bahaya. Pelajari tanda-tanda psikologis dan fisik pada anak.",
    image: "/images/article-2.jpg",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Mengajarkan Empati Sejak Dini",
    category: "Pola Asuh",
    excerpt: "Langkah-langkah praktis menanamkan nilai inklusivitas dan empati kepada anak di lingkungan keluarga.",
    image: "/images/article-3.jpg",
    readTime: "6 min",
  },
];

export const STORIES = [
  {
    id: 1,
    author: "Anonim (Siswa SMA)",
    emotion: "Bangkit",
    content: "Dulu saya takut ke sekolah karena diejek setiap hari. Tapi berkat dukungan guru BK dan orang tua, saya berani melapor dan sekarang...",
    tags: ["Verbal", "Sekolah Menengah"],
  },
  {
    id: 2,
    author: "Budi (Orang Tua)",
    emotion: "Harapan",
    content: "Anak saya sempat mogok sekolah. Kami melakukan pendekatan persuasif ke pihak sekolah dan akhirnya menemukan solusi damai.",
    tags: ["Orang Tua", "SD"],
  },
  {
    id: 3,
    author: "Siti (Guru)",
    emotion: "Sedih",
    content: "Melihat anak didik saya menjadi murung adalah pukulan berat. Kami sekarang menerapkan jam curhat mingguan di kelas.",
    tags: ["Guru", "Pencegahan"],
  },
  {
    id: 4,
    author: "Rina (Siswa SMP)",
    emotion: "Takut",
    content: "Setiap jam istirahat saya sembunyi di perpustakaan. Saya berharap ada teman yang mau mengajak saya bicara tanpa mengejek.",
    tags: ["Sosial", "SMP"],
  },
  {
    id: 5,
    author: "Pak Joko (Kepala Sekolah)",
    emotion: "Tegas",
    content: "Kami menindak tegas pelaku bullying dengan sanksi edukatif, bukan hanya hukuman fisik. Lingkungan sekolah harus aman.",
    tags: ["Kebijakan", "Sekolah"],
  },
  {
    id: 6,
    author: "Dewi (Kakak Korban)",
    emotion: "Marah",
    content: "Adik saya pulang dengan memar. Saya tidak diam, saya laporkan ke pihak berwajib dan sekolah. Jangan takut bersuara!",
    tags: ["Fisik", "Keluarga"],
  },
  {
    id: 7,
    author: "Andi (Mahasiswa)",
    emotion: "Menyesal",
    content: "Dulu saya pernah ikut-ikutan mengejek teman. Sekarang saya sadar itu salah dan berusaha menebusnya dengan menjadi relawan anti-bullying.",
    tags: ["Mantan Pelaku", "Kesadaran"],
  },
  {
    id: 8,
    author: "Bu Ratna (Psikolog)",
    emotion: "Peduli",
    content: "Luka batin akibat bullying bisa bertahan lama. Penting bagi korban untuk mendapatkan pendampingan psikologis segera.",
    tags: ["Kesehatan Mental", "Ahli"],
  },
  {
    id: 9,
    author: "Fajar (Siswa SD)",
    emotion: "Senang",
    content: "Sekarang aku punya teman baru yang membelaku saat ada yang nakal. Aku jadi semangat sekolah lagi!",
    tags: ["Persahabatan", "SD"],
  },
  {
    id: 10,
    author: "Mama Dinda",
    emotion: "Cemas",
    content: "Anak saya jadi pendiam dan sering mimpi buruk. Saya butuh saran bagaimana cara mengajaknya bicara tentang apa yang terjadi di sekolah.",
    tags: ["Orang Tua", "Konsultasi"],
  },
  {
    id: 11,
    author: "Anonim (Alumni)",
    emotion: "Bangga",
    content: "Melihat sekolahku sekarang punya satgas anti-bullying membuatku bangga. Dulu hal seperti ini tidak diperhatikan.",
    tags: ["Alumni", "Kemajuan"],
  },
  {
    id: 12,
    author: "Rizky (Siswa SMK)",
    emotion: "Bingung",
    content: "Teman-teman menyebarkan rumor bohong tentang saya di grup WA. Saya tidak tahu harus bagaimana menghadapinya.",
    tags: ["Cyberbullying", "SMK"],
  },
  {
    id: 13,
    author: "Ibu Ani (Guru BK)",
    emotion: "Semangat",
    content: "Semakin banyak siswa yang berani melapor ('speak up'). Ini tanda positif bahwa mereka percaya sekolah bisa melindungi mereka.",
    tags: ["Guru", "Laporan"],
  },
  {
    id: 14,
    author: "Yoga (Korban)",
    emotion: "Kuat",
    content: "Mereka bisa menyakiti fisikku, tapi tidak semangatku. Aku akan buktikan aku bisa sukses melampaui mereka.",
    tags: ["Motivasi", "Diri Sendiri"],
  },
  {
    id: 15,
    author: "Sarah (Saksi)",
    emotion: "Berani",
    content: "Saya merekam kejadian bullying di kantin dan melaporkannya. Pelaku akhirnya dipanggil orang tuanya.",
    tags: ["Saksi", "Tindakan"],
  },
  {
    id: 16,
    author: "Pak Hendra (Komite)",
    emotion: "Dukungan",
    content: "Orang tua dan sekolah harus bersinergi. Jangan saling menyalahkan, tapi cari solusi bersama demi anak.",
    tags: ["Komite Sekolah", "Kerjasama"],
  },
  {
    id: 17,
    author: "Lisa (Siswa SMP)",
    emotion: "Lega",
    content: "Setelah pindah sekolah, saya menemukan lingkungan yang jauh lebih positif. Ternyata tidak semua tempat itu menyeramkan.",
    tags: ["Lingkungan", "Baru"],
  },
  {
    id: 18,
    author: "Dr. Setiawan",
    emotion: "Informatiif",
    content: "Bullying verbal sering dianggap sepele, padahal dampaknya bisa setara dengan kekerasan fisik pada otak anak.",
    tags: ["Edukasi", "Fakta"],
  },
  {
    id: 19,
    author: "Kiki (Influencer)",
    emotion: "Aksi",
    content: "Stop komentar jahat di medsos! Jarimu harimaumu. Mari sebarkan komentar positif saja.",
    tags: ["Netizen", "Aksi"],
  },
  {
    id: 20,
    author: "Anonim",
    emotion: "Harapan",
    content: "Semoga suatu saat tidak ada lagi berita anak bunuh diri karena dibully. Kita semua bertanggung jawab.",
    tags: ["Harapan", "Masyarakat"],
  },
  {
    id: 21,
    author: "Bayu (Siswa SMA)",
    emotion: "Solidaritas",
    content: "Kami satu kelas sepakat untuk mengucilkan si pembully sampai dia minta maaf dan berubah. Solidaritas itu penting.",
    tags: ["Teman Sebaya", "Sanksi Sosial"],
  },
  {
    id: 22,
    author: "Ibu Murni",
    emotion: "Syukur",
    content: "Terima kasih untuk aplikasi Riksi Bully ini. Saya jadi tahu kemana harus melapor masalah anak saya.",
    tags: ["Testimoni", "Manfaat"],
  },
  {
    id: 23,
    author: "Tono (Satpam)",
    emotion: "Siaga",
    content: "Saya selalu pantau area bekalang sekolah saat jam istirahat. Itu sering jadi tempat 'eksekusi'.",
    tags: ["Keamanan", "Pengawasan"],
  },
];

export const SOLUTIONS = [
  {
    id: "step-1",
    title: "Langkah Awal: Dengarkan & Validasi",
    content: "Jangan menyalahkan korban. Dengarkan ceritanya dengan penuh perhatian dan validasi perasaannya. Pastikan mereka merasa aman.",
  },
  {
    id: "step-2",
    title: "Kumpulkan Bukti",
    content: "Catat tanggal, waktu, lokasi, dan detail kejadian. Jika cyberbullying, simpan tangkapan layar (screenshot).",
  },
  {
    id: "step-3",
    title: "Lapor ke Pihak Sekolah",
    content: "Gunakan prosedur resmi sekolah. Temui wali kelas atau guru BK dengan membawa bukti yang sudah dikumpulkan.",
  },
  {
    id: "step-4",
    title: "Bantuan Profesional",
    content: "Jika dampak psikologis terlihat berat, segera hubungi psikolog anak atau lembaga layanan perlindungan anak.",
  },
];

export const PROGRAMS = [
  {
    id: 1,
    title: "Sekolah Ramah Anak",
    description: "Program sertifikasi dan pendampingan sekolah untuk menciptakan lingkungan belajar yang aman.",
    date: "Setiap Semester",
  },
  {
    id: 2,
    title: "Webinar Parenting Inklusif",
    description: "Sesi edukasi bulanan untuk orang tua tentang pola asuh positif.",
    date: "12 Maret 2026",
  },
];

export const TEAM = [
  {
    name: "Dr. Ratna Sari",
    role: "Psikolog Anak",
    image: "/images/team-1.jpg",
  },
  {
    name: "Dimas Pratama",
    role: "Tech Lead",
    image: "/images/team-2.jpg",
  },
];

export const EMERGENCY_CONTACTS = [
  {
    name: "KPAI (Komisi Perlindungan Anak Indonesia)",
    phone: "021-31901556",
    website: "https://www.kpai.go.id",
  },
  {
    name: "Layanan SEJIWA (Psikologi)",
    phone: "119 ext 8",
    website: "https://sejiwa.kemenpppa.go.id",
  },
];
