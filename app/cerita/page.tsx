
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { STORIES } from "@/lib/data";
import { Heart, MessageCircle, Share2, Send, Quote } from "lucide-react";

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Campaign Banner */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              Suara Kita, Kekuatan Kita
            </h1>
            <p className="max-w-[700px] mx-auto text-primary-foreground/90 md:text-xl">
              Berbagi cerita adalah langkah awal penyembuhan. Bacalah kisah inspiratif dari mereka yang telah bangkit, atau bagikan ceritamu sendiri.
            </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
      </section>

      {/* Stories Grid - Infinite ScrollRefined */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative w-full max-w-[1920px] mx-auto">


            <div className="flex w-max gap-8 animate-infinite-scroll hover:[animation-play-state:paused] py-8">
              {[...STORIES, ...STORIES].map((story, index) => (
                <Card key={`${story.id}-${index}`} className="flex flex-col h-full w-[380px] shrink-0 bg-white hover:scale-[1.02] transition-transform duration-300 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden group/card">
                  <CardHeader className="pb-3 relative pt-8 px-8">
                    <div className="absolute top-6 left-6 opacity-10">
                       <Quote className="h-10 w-10 text-primary" />
                    </div>
                    <div className="relative flex justify-between items-start z-10 pl-6">
                      <div className="space-y-1">
                          <Badge 
                            variant="secondary" 
                            className={`rounded-full px-4 py-1 text-xs font-medium ${
                                story.emotion === 'Sedih' ? 'bg-red-50 text-red-600' : 
                                story.emotion === 'Bangkit' ? 'bg-green-50 text-green-600' : 
                                'bg-blue-50 text-blue-600'
                            }`}
                          >
                          {story.emotion}
                          </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed text-[15px] font-medium font-sans">
                      "{story.content}"
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-50 bg-slate-50/30 pt-4 px-8 pb-5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                            {story.author.charAt(0)}
                        </div>
                        <span className="font-semibold text-slate-700 text-sm truncate max-w-[120px]">{story.author}</span>
                    </div>
                    <div className="flex gap-4 text-slate-400">
                      <button className="hover:text-red-500 transition-colors flex items-center gap-1 group/btn">
                        <Heart className="h-4 w-4 group-hover/btn:fill-current" />
                        <span className="text-xs font-medium">12</span>
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submission CTA - Redesigned Story Hub */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Emotional Connection & Instructions */}
            <div className="lg:col-span-5 space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Ruang Aman Anda
               </div>
               
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Ceritamu Bisa Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cahaya</span> Bagi Yang Lain.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Tidak ada cerita yang terlalu kecil. Identitasmu sepenuhnya aman dan dapat disembunyikan jika kamu memintanya.
              </p>

              <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4 group">
                      <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-300">
                          <span className="font-bold text-xl">1</span>
                      </div>
                      <div>
                          <h4 className="font-semibold text-slate-900">Tulis Pengalaman</h4>
                          <p className="text-sm text-slate-500">Ceritakan apa yang kamu rasakan dengan jujur.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                          <span className="font-bold text-xl">2</span>
                      </div>
                      <div>
                          <h4 className="font-semibold text-slate-900">Pilih Emosi</h4>
                          <div className="flex gap-2 mt-1">
                             <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">Sedih 😔</span>
                             <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">Marah 😠</span>
                             <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">Bangkit 💪</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
            {/* Right Side: Clean Form Card */}
            <div className="lg:col-span-7">
                <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white rounded-[2rem] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-0" />
                    
                    <CardHeader className="p-8 pb-2 relative z-10">
                        <CardTitle className="text-2xl font-bold text-slate-800">Mulai Menulis</CardTitle>
                        <CardDescription>Privasimu adalah prioritas utama kami.</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 p-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nama Samaran</label>
                                <Input id="name" placeholder="Misal: Bintang Kejora" className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="emotion" className="text-sm font-semibold text-slate-700 ml-1">Emosi Utama</label>
                                <select id="emotion" className="h-12 w-full rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all px-3 text-sm">
                                    <option>Pilih emosi...</option>
                                    <option>Sedih / Terluka</option>
                                    <option>Takut / Cemas</option>
                                    <option>Marah / Kecewa</option>
                                    <option>Lega / Bangkit</option>
                                    <option>Berani / Melapor</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="story" className="text-sm font-semibold text-slate-700 ml-1">Kisahmu</label>
                            <Textarea 
                                id="story" 
                                placeholder="Tuliskan pengalamanmu di sini. Jangan takut, kami di sini untuk mendengarkan..." 
                                className="min-h-[180px] rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all resize-none p-4 leading-relaxed" 
                            />
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                            <div className="flex items-center justify-center h-5 w-5 rounded bg-white border border-blue-200">
                                <input type="checkbox" id="anon" className="appearance-none h-4 w-4 rounded checked:bg-blue-500" />
                            </div>
                            <label htmlFor="anon" className="text-sm font-medium text-slate-600 select-none cursor-pointer">Sembunyikan profil saya (Posting sebagai Anonim)</label>
                        </div>
                    </CardContent>
                    
                    <CardFooter className="p-8 pt-0 relative z-10">
                        <Button className="w-full h-14 text-base rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
                        <Send className="mr-2 h-5 w-5" /> Kirim Cerita
                        </Button>
                    </CardFooter>
                </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
