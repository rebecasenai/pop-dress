import Image from "next/image"

export default function Sobre() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.75),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(252,231,243,0.9),transparent_34%)]" />

      <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-pink-100 bg-white/85 px-6 py-8 shadow-[0_20px_70px_rgba(244,114,182,0.08)] backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-pink-700">
            Sobre mim
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-pink-950 md:text-5xl">
            Eu sou a Rebeca, proprietária da Pop Dress
          </h1>
          <p className="mt-4 text-base leading-8 text-pink-700 md:text-lg">
            Amo moda feminina e gosto de criar uma loja que una delicadeza, estilo e peças que façam você se sentir linda de verdade.
            Cada escolha aqui é pensada com carinho para entregar uma experiência elegante, leve e atual.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-sm font-medium text-pink-700">
              Moda feminina
            </div>
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-sm font-medium text-pink-700">
              Curadoria com amor
            </div>
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-sm font-medium text-pink-700">
              Estilo premium
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-linear-to-br from-pink-50 via-white to-pink-100 p-4 shadow-sm">
            <div className="relative h-105 overflow-hidden rounded-[1.5rem] border-2 border-dashed border-pink-200 bg-white/80">
              <Image
                src="/perfil/fotodperfil.png"
                alt="Foto da Rebeca, dona da Pop Dress"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-pink-100 bg-white/90 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Minha missão</p>
              <p className="mt-2 text-sm leading-7 text-pink-700">
                Fazer da Pop Dress um lugar onde moda feminina, beleza e confiança caminham juntas.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-pink-100 bg-white/90 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Meu estilo</p>
              <p className="mt-2 text-sm leading-7 text-pink-700">
                Gosto muito do estilo de cantoras como Pinkpantheress, Beabadoobee, Clairo e outras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}