import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.75),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(252,231,243,0.9),transparent_34%)]" />

      <section className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-[2rem] border border-pink-100 bg-white/88 px-6 py-10 text-center shadow-[0_20px_70px_rgba(244,114,182,0.1)] backdrop-blur md:px-10 md:py-14">
        <span className="inline-flex w-fit items-center rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-700">
          Página não encontrada
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-pink-950 md:text-5xl">
          Ops, essa rota não existe.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-pink-700 md:text-lg">
          A página pode ter sido removida, o endereço pode estar errado ou o deploy pode ter aberto em uma URL antiga.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-pink-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-pink-400 hover:to-pink-500"
          >
            Voltar para a home
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50"
          >
            Ver produtos
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50"
          >
            Falar com a equipe
          </Link>
        </div>
      </section>
    </main>
  )
}