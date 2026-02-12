
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { BULLYING_STATS } from "@/lib/data";
import { 
  Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis, 
  Line, LineChart, Area, AreaChart 
} from "recharts";
import { Map, Filter, TrendingUp, Activity, ArrowUpRight, ShieldAlert, BadgeInfo } from "lucide-react";

// Mock Data for Charts
const DATA_BY_LEVEL = [
  { name: "SD", kasus: 120, fullMark: 150 },
  { name: "SMP", kasus: 350, fullMark: 400 },
  { name: "SMA", kasus: 280, fullMark: 300 },
  { name: "SMK", kasus: 200, fullMark: 250 },
  { name: "PT", kasus: 50, fullMark: 100 },
];

const TREND_DATA = [
  { year: "2020", kasus: 850 },
  { year: "2021", kasus: 920 },
  { year: "2022", kasus: 880 },
  { year: "2023", kasus: 1100 },
  { year: "2024", kasus: 1240 },
];

const TABLE_DATA = [
  { type: "Fisik", count: 450, percentage: "36%", trend: "+12%" },
  { type: "Verbal", count: 380, percentage: "30%", trend: "+5%" },
  { type: "Siber (Cyber)", count: 290, percentage: "23%", trend: "+18%" },
  { type: "Sosial (Pengucilan)", count: 120, percentage: "11%", trend: "-2%" },
];

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative overflow-x-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10" />
      <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
              <Activity className="w-3 h-3" />
              Live Data Monitoring
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Peta Sebaran <span className="text-blue-600">Kasus</span>
            </h1>
            <p className="text-lg text-slate-500 mt-2 max-w-2xl">
              Pantau titik rawan dan tren bullying di seluruh Indonesia secara real-time untuk pengambilan keputusan yang lebih baik.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Select defaultValue="2024">
              <SelectTrigger className="w-[140px] bg-white border-slate-200 shadow-sm rounded-full">
                <SelectValue placeholder="Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-white border-slate-200 shadow-sm rounded-full">
                <Filter className="w-4 h-4 mr-2 text-slate-400" />
                <SelectValue placeholder="Semua Jenjang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jenjang</SelectItem>
                <SelectItem value="sd">SD</SelectItem>
                <SelectItem value="smp">SMP</SelectItem>
                <SelectItem value="sma">SMA</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Hero Map Section (Span 8) */}
          <motion.div 
            className="lg:col-span-8 relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <Card className="h-full min-h-[500px] border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                
                {/* Floating Live Counter */}
                <div className="absolute top-6 left-6 z-20">
                    <div className="flex flex-col p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Laporan Masuk</span>
                        <div className="flex items-end gap-2">
                             <span className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums">1,240</span>
                             <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mb-1">
                                <TrendingUp className="w-3 h-3 mr-1" /> +12%
                             </span>
                        </div>
                    </div>
                </div>

                {/* Stylized Map View */}
                <div className="w-full h-full flex items-center justify-center p-10 relative">
                    {/* Abstract Indonesia Map using SVG Paths */}
                     <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-xl">
                        {/* Simple abstract representation of major islands */}
                        <path d="M150,120 Q160,80 200,90 T250,130 T200,180 Q150,170 150,120" fill="#cbd5e1" className="hover:fill-blue-200 transition-colors duration-500" /> {/* Sumatra */}
                        <path d="M260,180 Q280,170 350,175 T420,190 T350,210 Q280,200 260,180" fill="#cbd5e1" className="hover:fill-blue-200 transition-colors duration-500" /> {/* Java */}
                        <path d="M320,80 Q350,60 380,80 T370,130 T320,120 Q300,100 320,80" fill="#cbd5e1" className="hover:fill-blue-200 transition-colors duration-500" /> {/* Kalimantan */}
                        <path d="M450,100 Q480,80 500,110 T460,160 T430,130 Q440,110 450,100" fill="#cbd5e1" className="hover:fill-blue-200 transition-colors duration-500" /> {/* Sulawesi */}
                        <path d="M550,120 Q600,100 650,110 T680,150 T600,160 Q560,140 550,120" fill="#cbd5e1" className="hover:fill-blue-200 transition-colors duration-500" /> {/* Papua */}
                        
                        {/* Hotspots - Pulsing Dots */}
                         <g className="animate-pulse">
                            <circle cx="280" cy="180" r="6" fill="#f97316" fillOpacity="0.8">
                                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                            </circle> {/* Java Hotspot */}
                             <circle cx="300" cy="185" r="4" fill="#f97316" /> 
                             <circle cx="350" cy="180" r="5" fill="#f97316" /> 
                        </g>

                         <g>
                            <circle cx="180" cy="130" r="5" fill="#eab308" /> {/* Sumatra Hotspot */}
                            <circle cx="470" cy="130" r="4" fill="#22c55e" /> {/* Sulawesi Safe */}
                         </g>
                     </svg>
                     
                     <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Tinggi</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Sedang</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Rendah</div>
                     </div>
                </div>
             </Card>
          </motion.div>

          {/* Leaderboard Section (Span 4) */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Card className="h-full border-slate-200 shadow-sm rounded-3xl bg-white flex flex-col">
                <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center justify-between">
                        Wilayah Kasus Tertinggi
                        <ShieldAlert className="w-5 h-5 text-orange-500" />
                    </CardTitle>
                    <CardDescription>Top 5 provinsi dengan laporan terbanyak</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-6">
                        {BULLYING_STATS.sort((a, b) => b.cases - a.cases).map((stat, i) => (
                            <div key={stat.province} className="space-y-2 group cursor-default">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold ${i < 3 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            {i + 1}
                                        </span>
                                        <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{stat.province}</span>
                                    </div>
                                    <span className="font-bold text-slate-900">{stat.cases}</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${
                                            stat.level === 'high' ? 'bg-gradient-to-r from-orange-400 to-red-500' : 
                                            stat.level === 'medium' ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 
                                            'bg-gradient-to-r from-emerald-400 to-green-500'
                                        }`}
                                        style={{ width: `${(stat.cases / 300) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
             </Card>
          </motion.div>
        
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           
           {/* Chart: Kasus per Jenjang */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
           >
              <Card className="border-slate-200 shadow-sm rounded-3xl bg-white">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                          <BadgeInfo className="w-5 h-5 text-blue-500" />
                          Kasus per Jenjang
                      </CardTitle>
                      <CardDescription>Distribusi laporan berdasarkan tingkat sekolah</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={DATA_BY_LEVEL} margin={{ top: 20, right: 30, left: 0, bottom: 5 }} barSize={50}>
                              <defs>
                                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: '#64748b' }} dy={10} />
                              <YAxis fontSize={12} tickLine={false} axisLine={false} tick={{ fill: '#64748b' }} />
                              <RechartsTooltip 
                                  cursor={{ fill: '#f8fafc' }}
                                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', color: '#fff' }}
                                  itemStyle={{ color: '#fff' }}
                              />
                              <Bar dataKey="kasus" fill="url(#colorBar)" radius={[8, 8, 0, 0]} />
                          </BarChart>
                      </ResponsiveContainer>
                  </CardContent>
              </Card>
           </motion.div>

           {/* Dark Theme Trend Analytics */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
           >
             <Card className="border-slate-800 shadow-2xl rounded-3xl bg-slate-950 text-white overflow-hidden relative flex flex-col h-full">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

                <CardHeader className="relative z-10 pb-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl font-bold flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-emerald-400" />
                                Tren Tahunan
                            </CardTitle>
                            <CardDescription className="text-slate-400">Analisis fluktuasi 5 tahun terakhir</CardDescription>
                        </div>
                        <div className="flex flex-col items-end">
                             <span className="text-3xl font-bold text-white tabular-nums">1,240</span>
                             <span className="text-xs text-emerald-400 font-medium">+12% vs tahun lalu</span>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent className="flex-1 relative z-10 p-6 flex flex-col gap-6">
                    {/* Sparkline Chart */}
                    <div className="h-[150px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={TREND_DATA}>
                                <defs>
                                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <RechartsTooltip 
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                />
                                <Area type="monotone" dataKey="kasus" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorTrend)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Data Table */}
                    <div className="bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden">
                         <Table>
                            <TableHeader className="bg-white/5">
                                <TableRow className="border-white/5 hover:bg-white/5">
                                    <TableHead className="text-slate-400 font-medium h-10 w-[150px]">Kategori</TableHead>
                                    <TableHead className="text-slate-400 font-medium h-10 text-right">Jumlah</TableHead>
                                    <TableHead className="text-slate-400 font-medium h-10 text-right hidden sm:table-cell">Persentase</TableHead>
                                    <TableHead className="text-slate-400 font-medium h-10 text-right">Tren</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {TABLE_DATA.map((row) => (
                                    <TableRow key={row.type} className="border-white/5 hover:bg-white/5 data-[state=selected]:bg-white/5">
                                        <TableCell className="font-medium text-slate-200 py-3">{row.type}</TableCell>
                                        <TableCell className="text-right text-slate-300 py-3 tabular-nums">{row.count}</TableCell>
                                        <TableCell className="text-right text-slate-400 py-3 hidden sm:table-cell tabular-nums">{row.percentage}</TableCell>
                                        <TableCell className={`text-right py-3 tabular-nums font-medium ${row.trend.startsWith('+') ? 'text-red-400' : 'text-emerald-400'}`}>
                                            {row.trend}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
             </Card>
           </motion.div>

        </div>

      </div>
    </div>
  );
}
