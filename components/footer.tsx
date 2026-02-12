
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0F6292] text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 inline-block">
                <img
                  src="/logo/logo1.svg"
                  alt="REKSI Logo"
                  width={350}
                  height={120}
                  className="h-40 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed font-medium">
              Rekonstruksi Sekolah Inklusif Anti-Bullying
            </p>
            <p className="text-sm text-blue-200/80 leading-relaxed">
              Platform edukasi keluarga dan pemetaan nasional untuk pencegahan bullying lintas jenjang pendidikan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-300">
              Navigasi Cepat
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/edukasi" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Edukasi
                </Link>
              </li>
              <li>
                <Link href="/peta" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Peta Kasus
                </Link>
              </li>
              <li>
                <Link href="/cerita" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Cerita
                </Link>
              </li>
              <li>
                <Link href="/solusi" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Solusi
                </Link>
              </li>
              <li>
                <Link href="/lapor" className="text-orange-300 hover:text-orange-200 font-semibold hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Lapor Kasus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-300">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-blue-300 shrink-0" />
                <span>info@reksi-bully.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-blue-300 shrink-0" />
                <div>
                  <span className="block">Hotline: 129</span>
                  <span className="text-xs text-blue-300">(24 Jam)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-300 shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-300">
              Ikuti Kami
            </h4>
            <p className="text-sm text-blue-200/80">
              Dapatkan informasi terbaru seputar pencegahan bullying.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-sm text-blue-200/80">
            &copy; 2026 REKSI-BULLY.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
