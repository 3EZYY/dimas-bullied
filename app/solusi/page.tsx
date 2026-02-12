
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/data";
import { 
  ShieldCheck, 
  HeartHandshake, 
  Gavel, 
  Search, 
  Phone, 
  FileText, 
  Download, 
  ArrowRight,
  LifeBuoy
} from "lucide-react";

export default function SolusiPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      {/* Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-slate-200 p-4 shadow-lg lg:hidden">
         <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-500/20 animate-pulse">
            <Phone className="mr-2 h-4 w-4" /> Butuh Bantuan Segera? Hubungi 129
         </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
                  <LifeBuoy className="h-4 w-4" />
                  Pusat Bantuan & Panduan
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Langkah <span className="text-orange-500">Penanganan Mandiri</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Panduan praktis, aman, dan terstruktur untuk korban, orang tua, dan saksi mata dalam menghadapi situasi bullying.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto mt-8 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative flex items-center bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden p-2">
                    <Search className="h-6 w-6 text-slate-400 ml-3" />
                    <Input 
                      type="text" 
                      placeholder="Cari solusi atau panduan..." 
                      className="border-none shadow-none focus-visible:ring-0 text-base h-12 bg-transparent"
                    />
                    <Button className="rounded-lg h-10 px-6">Cari</Button>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 mb-20">
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column - Interactive Action Cards */}
            <motion.div 
              className="lg:col-span-4 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                <div className="sticky top-24 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 px-2">Kategori Bantuan</h3>
                  
                  {/* Card 1: Keamanan Fisik */}
                  <motion.div variants={itemVariants} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 border-l-[6px] shadow-sm hover:shadow-md overflow-hidden ${hoveredCard === 'fisik' ? 'bg-green-50/50 border-green-500' : 'bg-white border-green-500'}`}
                      onMouseEnter={() => setHoveredCard('fisik')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                        <CardHeader className="p-5 flex flex-row items-center gap-4 space-y-0">
                            <div className={`p-3 rounded-xl transition-colors ${hoveredCard === 'fisik' ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-green-100 text-green-600'}`}>
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg text-slate-900">Keamanan Fisik</CardTitle>
                                <CardDescription className="text-green-600 font-medium text-xs mt-1">Prioritas Utama</CardDescription>
                            </div>
                            <ArrowRight className={`w-5 h-5 ml-auto text-slate-300 transition-transform ${hoveredCard === 'fisik' ? 'translate-x-1 text-green-500' : ''}`} />
                        </CardHeader>
                    </Card>
                  </motion.div>

                  {/* Card 2: Dukungan Emosi */}
                  <motion.div variants={itemVariants} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 border-l-[6px] shadow-sm hover:shadow-md overflow-hidden ${hoveredCard === 'emosi' ? 'bg-blue-50/50 border-blue-500' : 'bg-white border-blue-500'}`}
                      onMouseEnter={() => setHoveredCard('emosi')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                        <CardHeader className="p-5 flex flex-row items-center gap-4 space-y-0">
                            <div className={`p-3 rounded-xl transition-colors ${hoveredCard === 'emosi' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-blue-100 text-blue-600'}`}>
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg text-slate-900">Dukungan Emosi</CardTitle>
                                <CardDescription className="text-blue-600 font-medium text-xs mt-1">Jangan Sendiri</CardDescription>
                            </div>
                            <ArrowRight className={`w-5 h-5 ml-auto text-slate-300 transition-transform ${hoveredCard === 'emosi' ? 'translate-x-1 text-blue-500' : ''}`} />
                        </CardHeader>
                    </Card>
                  </motion.div>

                  {/* Card 3: Lapor Resmi */}
                   <motion.div variants={itemVariants} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 border-l-[6px] shadow-sm hover:shadow-md overflow-hidden ${hoveredCard === 'lapor' ? 'bg-amber-50/50 border-amber-500' : 'bg-white border-amber-500'}`}
                      onMouseEnter={() => setHoveredCard('lapor')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                        <CardHeader className="p-5 flex flex-row items-center gap-4 space-y-0">
                            <div className={`p-3 rounded-xl transition-colors ${hoveredCard === 'lapor' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-amber-100 text-amber-600'}`}>
                                <Gavel className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg text-slate-900">Lapor Resmi</CardTitle>
                                <CardDescription className="text-amber-600 font-medium text-xs mt-1">Tindak Lanjut</CardDescription>
                            </div>
                            <ArrowRight className={`w-5 h-5 ml-auto text-slate-300 transition-transform ${hoveredCard === 'lapor' ? 'translate-x-1 text-amber-500' : ''}`} />
                        </CardHeader>
                    </Card>
                  </motion.div>
                   
                   {/* Call to Action Box */}
                   <div className="hidden lg:block pt-8">
                      <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-16 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                          <h4 className="font-bold text-lg mb-2 relative z-10">Butuh Bantuan Segera?</h4>
                          <p className="text-slate-400 text-sm mb-6 relative z-10">Layanan darurat tersedia 24/7 untuk kasus mendesak.</p>
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 animate-pulse relative z-10">
                            <Phone className="mr-2 h-4 w-4" /> Hotline 129
                        </Button>
                      </div>
                   </div>

                </div>
            </motion.div>

            {/* Right Column - Main Content Accordion */}
            <div className="lg:col-span-8">
                <Card className="border-none shadow-none bg-transparent">
                    <CardHeader className="p-0 mb-8">
                        <CardTitle className="text-3xl font-bold text-slate-900">Prosedur Pelaporan</CardTitle>
                        <CardDescription className="text-lg mt-2">Ikuti langkah-langkah berikut secara berurutan untuk penanganan yang efektif.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Accordion type="single" collapsible className="w-full space-y-6">
                        {SOLUTIONS.map((solution, index) => (
                            <AccordionItem 
                                key={solution.id} 
                                value={solution.id} 
                                className="border-none rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                            <AccordionTrigger className="px-6 py-5 hover:bg-slate-50/50 hover:no-underline [&[data-state=open]]:bg-blue-50/30">
                                <div className="flex items-center gap-6 text-left w-full">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100/50 text-blue-600 flex items-center justify-center font-bold text-xl border border-blue-100">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-slate-800">{solution.title}</h4>
                                        <p className="text-sm text-slate-500 mt-1 font-normal hidden sm:block">Klik untuk melihat detail langkah ini.</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-base border-t border-slate-50 bg-white">
                                <div className="pl-[4.5rem]">
                                    {solution.content}
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                    </CardContent>
                </Card>

                {/* Printable Resources Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Dokumen & Referensi</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <Card className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                             <CardContent className="p-6 flex items-start gap-4">
                                <div className="p-3 bg-red-50 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Template Laporan Kronologi</h4>
                                    <p className="text-xs text-slate-500 mb-3">Format resmi untuk mencatat kejadian bullying.</p>
                                    <span className="text-xs font-semibold text-blue-500 flex items-center gap-1">
                                        <Download className="w-3 h-3" /> Download PDF (120KB)
                                    </span>
                                </div>
                             </CardContent>
                        </Card>
                        <Card className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                             <CardContent className="p-6 flex items-start gap-4">
                                <div className="p-3 bg-indigo-50 text-indigo-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Panduan Hukum (UU Perlindungan Anak)</h4>
                                    <p className="text-xs text-slate-500 mb-3">Ringkasan pasal-pasal terkait bullying.</p>
                                    <span className="text-xs font-semibold text-blue-500 flex items-center gap-1">
                                        <Download className="w-3 h-3" /> Download PDF (2.1MB)
                                    </span>
                                </div>
                             </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}
