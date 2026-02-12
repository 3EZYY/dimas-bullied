
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, AlertTriangle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-slate-200 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <img
            src="/logo/logo1.svg"
            alt="REKSI Logo"
            width={280}
            height={100}
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center gap-8">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[17px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#0F6292]"
                      : "text-slate-600 hover:text-[#0F6292]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-2.5 left-0 w-full h-[3px] bg-[#F97316] rounded-full shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="h-8 w-px bg-slate-200 mx-2"></div>

          <Link href="/lapor">
            <Button
              className="bg-[#F97316] hover:bg-orange-600 text-white px-7 py-2.5 rounded-full font-bold shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2 text-[15px]"
            >
              <AlertTriangle className="h-4 w-4 stroke-[3px]" />
              Lapor Kasus
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-700 hover:bg-slate-100/50">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-slate-100">
              <div className="flex flex-col gap-2 mt-8">
                <div className="mb-8 px-2">
                  <img
                    src="/logo/logo1.svg"
                    alt="REKSI Logo"
                    width={200}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-semibold px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "text-[#0F6292] bg-blue-50/80 border-l-4 border-[#F97316]"
                          : "text-slate-600 hover:text-[#0F6292] hover:bg-slate-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="my-4 border-t border-slate-100"></div>
                <Link href="/lapor" onClick={() => setIsOpen(false)} className="px-2">
                  <Button className="w-full bg-[#F97316] hover:bg-orange-600 text-white rounded-xl h-12 text-lg font-bold shadow-lg shadow-orange-500/25 gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Lapor Kasus
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
