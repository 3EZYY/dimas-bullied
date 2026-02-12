"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, 
  UploadCloud, 
  AlertCircle, 
  Lock, 
  HeartHandshake, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  User,
  Users,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Schema Validation
const formSchema = z.object({
  role: z.enum(["korban", "saksi", "orang_tua"], {
    message: "Pilih peran pelapor.",
  }),
  category: z.string({
    message: "Pilih kategori bullying.",
  }).min(1, "Pilih kategori bullying."),
  province: z.string({ message: "Pilih provinsi kejadian." }).min(1, "Pilih provinsi kejadian."),
  schoolLevel: z.string({ message: "Pilih jenjang pendidikan." }).min(1, "Pilih jenjang pendidikan."),
  schoolName: z.string().min(3, {
    message: "Nama sekolah minimal 3 karakter.",
  }),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Tanggal tidak valid.",
  }),
  description: z.string().min(20, {
    message: "Deskripsi kejadian minimal 20 karakter.",
  }),
  contact: z.string().optional(),
});

const steps = [
  { id: 1, title: "Identitas", description: "Peran & Lokasi" },
  { id: 2, title: "Kronologi", description: "Detail Kejadian" },
  { id: 3, title: "Bukti", description: "Foto/Video (Opsional)" },
];

export default function LaporPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "korban",
      schoolName: "",
      description: "",
      contact: "",
    },
    mode: "onChange",
  });

  const { trigger } = form;

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["role", "schoolLevel", "schoolName", "province"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["category", "date", "description"]);
    }

    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  // Handle Submit
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log(values);
    toast.success("Laporan berhasil dikirim", {
      description: "Identitas Anda aman dan laporan akan segera diproses.",
    });
    
    // Reset but keep on step 3 or redirect? For now reset and go back to step 1
    form.reset();
    setCurrentStep(1);
    setIsLoading(false);
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
       {/* Ambient Background */}
       <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar - Information & Trust */}
          <div className="lg:col-span-4 space-y-8">
            <div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Ruang Aman untuk <span className="text-blue-600">Bicara</span>
                </h1>
                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    Setiap suara berharga. Kami berkomitmen melindungi privasi Anda sepenuhnya. Jangan takut untuk melapor.
                </p>
            </div>

            <div className="space-y-4">
                 {/* Feature Card 1 */}
                 <Card className="border-none shadow-sm bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/80 transition-colors">
                    <CardContent className="p-5 flex items-start gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl shadow-lg shadow-blue-500/10">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Enkripsi End-to-End</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mt-1">Data Anda diacak sistem dan tidak bisa diakses pihak luar.</p>
                        </div>
                    </CardContent>
                 </Card>

                 {/* Feature Card 2 */}
                 <Card className="border-none shadow-sm bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/80 transition-colors">
                    <CardContent className="p-5 flex items-start gap-4">
                        <div className="p-3 bg-teal-100 text-teal-600 rounded-xl shadow-lg shadow-teal-500/10">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Tim Verifikasi Independen</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mt-1">Laporan ditangani oleh profesional, bukan pihak sekolah semata.</p>
                        </div>
                    </CardContent>
                 </Card>

                 {/* Feature Card 3 */}
                 <Card className="border-none shadow-sm bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/80 transition-colors">
                    <CardContent className="p-5 flex items-start gap-4">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shadow-lg shadow-orange-500/10">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Pendampingan Psikologis</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mt-1">Opsi konseling gratis untuk pemulihan trauma korban.</p>
                        </div>
                    </CardContent>
                 </Card>
            </div>

            {/* Floating Hotline Alert */}
            <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-white border border-red-100 rounded-xl p-5 shadow-xl flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center animate-bounce duration-1000">
                             <AlertCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Butuh Bantuan Darurat?</h3>
                            <p className="text-xs text-slate-500">Hubungi jika ada ancaman fisik.</p>
                        </div>
                     </div>
                     <div className="text-2xl font-black text-red-600 tracking-tighter">129</div>
                </div>
            </div>
          </div>

          {/* Right Content - Multi-step Form */}
          <div className="lg:col-span-8">
            <Card className="border-none shadow-2xl shadow-slate-200/50 bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col relative">
               {/* Progress Bar Header */}
               <div className="bg-slate-50/50 border-b border-slate-100 p-8 pb-6">
                  <div className="flex justify-between items-center mb-4">
                      <div className="space-y-1">
                          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Langkah {currentStep} dari 3</div>
                          <h2 className="text-2xl font-bold text-slate-900">{steps[currentStep - 1].title}</h2>
                      </div>
                      <div className="text-right text-slate-400 text-sm hidden sm:block">
                          {steps[currentStep - 1].description}
                      </div>
                  </div>
                  <Progress value={(currentStep / 3) * 100} className="h-2 bg-slate-200" indicatorClassName="bg-gradient-to-r from-blue-500 to-teal-400" />
               </div>

              <CardContent className="p-8 md:p-10 flex-1 overflow-y-auto">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 h-full flex flex-col">
                    
                    <div className="flex-1">
                        <AnimatePresence mode="wait" custom={direction}>
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                                    className="space-y-8"
                                >
                                    {/* Visual Role Selection */}
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <FormItem className="space-y-4">
                                                <FormLabel className="text-lg font-bold text-slate-800">Saya melapor sebagai:</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                                    >
                                                        {[
                                                            { id: 'korban', label: 'Saya Korban', icon: User, color: 'blue' },
                                                            { id: 'saksi', label: 'Saya Saksi', icon: Users, color: 'teal' },
                                                            { id: 'orang_tua', label: 'Orang Tua', icon: UserPlus, color: 'orange' }
                                                        ].map((item) => (
                                                            <FormItem key={item.id}>
                                                                <FormControl>
                                                                    <RadioGroupItem value={item.id} className="peer sr-only" />
                                                                </FormControl>
                                                                <FormLabel className="flex flex-col items-center justify-center p-6 border-2 border-slate-100 rounded-2xl bg-white hover:bg-slate-50 hover:border-slate-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all duration-200 group h-32">
                                                                    <div className={`p-3 rounded-full bg-${item.color}-100 text-${item.color}-600 mb-3 group-hover:scale-110 transition-transform`}>
                                                                        <item.icon className="w-6 h-6" />
                                                                    </div>
                                                                    <span className="font-bold text-slate-700">{item.label}</span>
                                                                </FormLabel>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="schoolLevel"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-semibold text-slate-700">Jenjang Pendidikan</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                                                    <SelectValue placeholder="Pilih jenjang" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="sd">SD/Sederajat</SelectItem>
                                                    <SelectItem value="smp">SMP/Sederajat</SelectItem>
                                                    <SelectItem value="sma">SMA/SMK</SelectItem>
                                                    <SelectItem value="pt">Perguruan Tinggi</SelectItem>
                                                </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="province"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-semibold text-slate-700">Provinsi</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                                                    <SelectValue placeholder="Pilih provinsi" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="dki_jakarta">DKI Jakarta</SelectItem>
                                                    <SelectItem value="jawa_barat">Jawa Barat</SelectItem>
                                                    <SelectItem value="jawa_tengah">Jawa Tengah</SelectItem>
                                                    <SelectItem value="jawa_timur">Jawa Timur</SelectItem>
                                                    <SelectItem value="lainnya">Lainnya</SelectItem>
                                                </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="schoolName"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="font-semibold text-slate-700">Nama Sekolah / Kampus</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Contoh: SMAN 1 Jakarta" {...field} className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500" />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                                    className="space-y-6"
                                >
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-semibold text-slate-700">Kategori Bullying</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
                                                    <SelectValue placeholder="Pilih kategori" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="fisik">Fisik (Pukulan, dll)</SelectItem>
                                                    <SelectItem value="verbal">Verbal (Ejekan, dll)</SelectItem>
                                                    <SelectItem value="cyber">Siber (Cyber Bullying)</SelectItem>
                                                    <SelectItem value="sosial">Sosial (Pengucilan)</SelectItem>
                                                    <SelectItem value="seksual">Seksual</SelectItem>
                                                </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="date"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-semibold text-slate-700">Tanggal Kejadian</FormLabel>
                                                <FormControl>
                                                <Input type="date" {...field} className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="font-semibold text-slate-700">Kronologi Lengkap</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                placeholder="Ceritakan apa yang terjadi, siapa yang terlibat, dan di mana kejadiannya..." 
                                                className="min-h-[200px] rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 p-4 leading-relaxed"
                                                {...field} 
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs text-slate-400">
                                                *Cerita Anda akan bantu kami memahami situasi.
                                            </FormDescription>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                                    className="space-y-8"
                                >
                                     {/* Drag & Drop Upload Mockup */}
                                    <FormItem>
                                        <FormLabel className="font-bold text-slate-800 text-lg">Bukti Pendukung (Opsional)</FormLabel>
                                        <div className="border-2 border-dashed border-blue-200 rounded-2xl p-10 flex flex-col items-center justify-center text-slate-500 hover:bg-blue-50/50 hover:border-blue-400 transition-all cursor-pointer group bg-slate-50">
                                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                                                <UploadCloud className="w-8 h-8 text-blue-500" />
                                            </div>
                                            <h4 className="font-semibold text-slate-700">Upload Foto atau Video</h4>
                                            <p className="text-sm text-slate-400 mt-1">Drag & drop atau klik untuk memilih file</p>
                                            <p className="text-xs text-slate-400 mt-4 bg-slate-200 px-3 py-1 rounded-full">Max 10MB (JPG, PNG, MP4)</p>
                                        </div>
                                    </FormItem>

                                    <FormField
                                        control={form.control}
                                        name="contact"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="font-semibold text-slate-700">Kontak yang bisa dihubungi (Opsional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email atau WhatsApp" {...field} className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500" />
                                            </FormControl>
                                            <FormDescription>
                                                Kami hanya akan menghubungi jika Anda memerlukan pendampingan lebih lanjut.
                                            </FormDescription>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 mt-6 border-t border-slate-100">
                         {currentStep > 1 ? (
                              <Button type="button" onClick={prevStep} variant="outline" className="h-12 px-6 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-600">
                                  <ChevronLeft className="w-5 h-5 mr-2" />
                                  Kembali
                              </Button>
                         ) : (
                             <div></div> 
                         )}

                         {currentStep < 3 ? (
                             <Button type="button" onClick={nextStep} className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20">
                                 Lanjut
                                 <ChevronRight className="w-5 h-5 ml-2" />
                             </Button>
                         ) : (
                             <Button type="submit" disabled={isLoading} className="h-12 px-8 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-lg shadow-orange-500/25">
                                 {isLoading ? "Mengirim..." : "Kirim Laporan"}
                                 <CheckCircle2 className="w-5 h-5 ml-2" />
                             </Button>
                         )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
