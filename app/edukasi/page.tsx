
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, FileText, Search, Shield } from "lucide-react";
import Image from "next/image";

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                    Pusat Edukasi Keluarga
                </h1>
                <p className="text-slate-600 md:text-xl/relaxed">
                    Temukan panduan praktis, artikel, dan modul pembelajaran untuk menciptakan lingkungan yang aman dan inklusif bagi anak.
                </p>
                
                <div className="relative max-w-lg mx-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                        type="search"
                        placeholder="Cari topik (misal: Cyberbullying)..."
                        className="pl-10 h-12 rounded-full border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-white"
                    />
                     <Button className="absolute right-1 top-1 bottom-1 rounded-full px-6">Cari</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Bullying Types Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Kenali Jenis-Jenis Bullying
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Bullying bisa terjadi dalam berbagai bentuk, tidak hanya fisik. Memahami jenis-jenisnya adalah langkah awal untuk pencegahan yang efektif.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">1</div>
                   <div>
                      <h4 className="font-semibold text-slate-900">Fisik & Verbal</h4>
                      <p className="text-sm text-slate-500">Pukulan, dorongan, atau ejekan dan hinaan lisan.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600 font-bold">2</div>
                   <div>
                      <h4 className="font-semibold text-slate-900">Sosial & Pengucilan</h4>
                      <p className="text-sm text-slate-500">Menyebarkan rumor atau sengaja mengabaikan seseorang dari aktivitas kelompok.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 font-bold">3</div>
                   <div>
                      <h4 className="font-semibold text-slate-900">Cyberbullying</h4>
                      <p className="text-sm text-slate-500">Perundungan di dunia maya melalui media sosial atau pesan teks.</p>
                   </div>
                </li>
              </ul>
            </div>
            <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-br from-teal-400 to-blue-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl bg-white border border-slate-100 p-2">
                    <div className="absolute top-4 right-4 z-20">
                         <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm border border-slate-100 text-xs font-bold text-slate-700">
                             <Shield className="h-3.5 w-3.5 text-blue-500" />
                             Infografis Resmi
                        </div>
                    </div>
                
                   <div className="rounded-[1.3rem] overflow-hidden relative">
                       <Image 
                          src="/img/Data img/data2.webp" 
                          alt="Tabel Jenis Bullying" 
                          width={600} 
                          height={500}
                          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                       />
                       <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socialization Gallery */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Galeri Sosialisasi & Edukasi</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Membangun Komunikasi Positif", img: "/img/Sosialisasi/Sosialisasi_1.webp" },
                { title: "Peran Sekolah Inklusif", img: "/img/Sosialisasi/Sosialisasi_2.webp" },
                { title: "Workshop Anti-Bullying", img: "/img/Sosialisasi/Sosialisasi_3.webp" },
                { title: "Dukungan Teman Sebaya", img: "/img/Sosialisasi/Sosialisasi_4.webp" }
            ].map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-video relative overflow-hidden">
                   <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modules */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Modul & Panduan</h2>
            <p className="text-muted-foreground mt-2">Unduh materi edukasi lengkap untuk dipelajari di rumah.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Panduan Komunikasi Keluarga
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Tips membangun komunikasi terbuka dengan anak untuk mendeteksi masalah lebih dini.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="secondary" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Unduh PDF
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-secondary text-secondary-foreground border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Modul Sekolah Inklusif
                </CardTitle>
                <CardDescription className="text-secondary-foreground/80">
                  Framework untuk menciptakan lingkungan sekolah yang aman dan menghargai perbedaan.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2 bg-transparent text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  <Download className="h-4 w-4" /> Unduh PDF
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Video Edukasi</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "hsvIHDhHEoU", title: "Pencegahan Bullying di Sekolah" },
              { id: "86_uuX77hsc", title: "Apa itu Bullying?" },
              { id: "T_zJ7qM3hd4", title: "Dampak Psikologis Bullying" },
              { id: "iFlrCuSyhvU", title: "Stop Bullying: Kita Semua Berperan" }
            ].map((video) => (
              <div key={video.id} className="group relative rounded-lg overflow-hidden aspect-video bg-muted shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


