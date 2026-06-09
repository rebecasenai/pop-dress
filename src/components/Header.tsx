import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-pink-100 bg-white/85 px-6 py-4 shadow-[0_10px_30px_rgba(244,114,182,0.06)] backdrop-blur md:px-10 lg:px-16">
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
            <p className="text-[10px] uppercase tracking-[0.28em] text-pink-500">Fashion store</p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/85 p-1">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-pink-700"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}