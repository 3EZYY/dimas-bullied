
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Map, MessageCircle, ArrowRight, Activity } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200">
              Platform Nasional Pencegahan Bullying
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl text-slate-900">
              Bersama Keluarga Lindungi <span className="text-primary">Masa Depan Anak</span>
            </h1>
            <p className="text-lg text-slate-600 md:text-xl max-w-[700px] leading-relaxed">
              Platform edukasi dan pemetaan bullying pertama yang berbasis keluarga.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/lapor">
                <Button size="lg" className="h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg shadow-orange-500/20">
                  Lapor Kasus
                </Button>
              </Link>
              <Link href="/edukasi">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary text-primary hover:bg-blue-50 rounded-full">
                    Pelajari Modul
                  </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800">
                Data Darurat
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Indonesia Darurat Bullying
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Indonesia menduduki peringkat ke-5 tertinggi murid korban bullying (Data PISA). Ini adalah panggilan darurat bagi kita semua untuk bertindak sekarang juga.
              </p>
               <Link href="/peta">
                <Button variant="link" className="text-primary p-0 h-auto text-base font-semibold">
                  Lihat Data Lengkap <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white ring-1 ring-slate-900/5">
                    <Image 
                      src="/img/Data img/data1.webp" 
                      alt="Global Ranking Data" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Bottom Gradient for Contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Fitur Unggulan</h2>
            <p className="text-slate-600 text-lg">Solusi komprehensif yang dirancang untuk mencegah bullying dari akarnya.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/edukasi" className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Card className="h-full relative bg-white border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">Edukasi Orang Tua</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Artikel dan panduan pola asuh inklusif untuk mencegah perilaku bullying sejak dini.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/peta" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Card className="h-full relative bg-white border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                    <Map className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-teal-600 transition-colors">Peta Sebaran</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Visualisasi data kasus bullying nasional untuk memonitor daerah rawan secara real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/cerita" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Card className="h-full relative bg-white border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-amber-600 transition-colors">Cerita & Dukungan</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Ruang aman untuk berbagi cerita anonim dan mendapatkan dukungan moral dari komunitas.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Video & Awareness - Laptop Mockup */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            <div className="order-2 lg:order-1 relative">
               {/* Laptop Mockup Structure */}
               <div className="relative mx-auto border-slate-800 bg-slate-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                        <iframe 
                            className="w-full h-full" 
                            src="https://www.youtube.com/embed/8PlPKf1VjLM?rel=0&modestbranding=1" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="relative mx-auto bg-slate-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-slate-800"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
               <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800">
                Edukasi
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Dampak Bullying pada Kesehatan Mental
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Bullying bukan sekadar &quot;kenakalan biasa&quot;. Dampaknya bisa seumur hidup, mulai dari penurunan prestasi, depresi, hingga risiko bunuh diri. Tonton video ini untuk memahami tanda-tanda awal yang sering terlewatkan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-slate-700">Perubahan perilaku drastis pada anak</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-slate-700">Menarik diri dari lingkungan sosial</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-slate-700">Penurunan prestasi akademik tiba-tiba</span>
                </li>
              </ul>
              <Button className="mt-4" variant="outline">Lihat Video Selengkapnya</Button>
            </div>

          </div>
        </div>
      </section>

      {/* Suara Kita - Testimonial Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="max-w-2xl">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-100 text-amber-800 mb-4">
                  Suara Kita
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Cerita Mereka yang <span className="text-amber-500">Berani Bersuara</span>
                </h2>
                <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                  Dengarkan pengalaman nyata dari siswa, guru, dan orang tua yang telah mengambil langkah untuk memutus rantai bullying.
                </p>
             </div>
             <Link href="/cerita">
                <Button variant="outline" className="rounded-full px-6 border-slate-300 hover:border-amber-500 hover:text-amber-600 transition-colors">
                  Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We'll use the first 3 stories from data, or a curated selection if available in future */}
            {[
              {
                quote: "Dulu saya takut ke sekolah karena diejek setiap hari. Tapi berkat dukungan guru BK dan orang tua, saya berani melapor...",
                author: "Anonim (Siswa SMA)",
                role: "Survivor",
                tag: "Bangkit",
                color: "green"
              },
              {
                quote: "Anak saya sempat mogok sekolah. Kami melakukan pendekatan persuasif ke pihak sekolah dan akhirnya menemukan solusi damai.",
                author: "Pak Budi",
                role: "Orang Tua",
                tag: "Harapan",
                color: "blue"
              },
              {
                quote: "Melihat sekolahku sekarang punya satgas anti-bullying membuatku bangga. Dulu hal seperti ini tidak diperhatikan.",
                author: "Sarah",
                role: "Alumni",
                tag: "Bangga",
                color: "amber"
              }
            ].map((story, i) => (
              <Card key={i} className="flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 group">
                <div className="mb-6 relative">
                   <Activity className="absolute -top-2 -left-2 w-16 h-16 text-slate-100 fill-slate-50 opacity-50 transform -rotate-12 transition-transform group-hover:rotate-0" />
                   <div className={`relative z-10 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-${story.color}-50 text-${story.color}-600 mb-4`}>
                      #{story.tag}
                   </div>
                   <p className="text-slate-600 text-lg italic leading-relaxed line-clamp-4 relative z-10">
                    &quot;{story.quote}&quot;
                   </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
                        {story.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{story.author}</div>
                        <div className="text-slate-500 text-xs">{story.role}</div>
                      </div>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Siap untuk Menciptakan Perubahan?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Bergabunglah dengan ribuan orang tua dan pendidik lainnya dalam gerakan Sekolah Ramah Anak.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
              Mulai Belajar
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
