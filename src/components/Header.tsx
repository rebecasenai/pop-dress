'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"

export default function Header() {

const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    // Substituído px-6 md:px-10 lg:px-16 por px-4 sm:px-6 lg:px-16
    <header className="sticky top-0 z-40 w-full border-b border-pink-100 bg-white/85 px-4 sm:px-6 lg:px-16 py-4 shadow-[0_10px_30px_rgba(244,114,182,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo + nome */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo Pop Dress"
            width={50}
            height={50}
            className="h-8 w-auto object-contain"
          />
          <div>
             <h1 className="mt-5 text-4xl font-black tracking-tight text-pink-950 md:text-5xl">Pop Dress</h1>
          </div>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/85 p-1">
          <Link href="/" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700">Home</Link>
          <Link href="/produtos" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700">Produtos</Link>
          <Link href="/contato" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700">Contato</Link>
          <Link href="/sobre" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700">Sobre</Link>
        </nav>

        {/* Botão hambúrguer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6 text-pink-700" /> : <Menu className="h-6 w-6 text-pink-700" />}
        </button>
      </div>

      {/* Menu mobile - com top-20 para não tampar a logo */}
      {isOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-pink-700 transition-colors">Home</Link>
          <Link href="/produtos" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-pink-700 transition-colors">Produtos</Link>
          <Link href="/contato" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-pink-700 transition-colors">Contato</Link>
          <Link href="/sobre" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-pink-700 transition-colors">Sobre</Link>
        </nav>
      )}
    </header>
  );
}