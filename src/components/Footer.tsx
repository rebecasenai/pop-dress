import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-pink-100 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-pink-700 sm:flex-row sm:text-left">
        <p>&copy; {currentYear} Pop Dress. Todos os direitos reservados.</p>
        <p className="text-pink-500">Feito com carinho para você.</p>
      </div>
    </footer>
  );
}
