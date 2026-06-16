import Image from "next/image"

export default function Sobre() {
  return (
    // Padding lateral fluido: px-4 (mobile) → sm:px-6 → lg:px-8
    <main className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
      {/* Fundo com gradiente sutil (mantido) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.75),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(252,231,243,0.9),transparent_34%)]" />

      {/* Container principal: grid responsiva (1 coluna em mobile, 2 colunas em lg) */}
      <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-pink-100 bg-white/85 px-4 sm:px-6 lg:px-10 py-8 shadow-[0_20px_70px_rgba(244,114,182,0.08)] backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
        
        {/* Coluna da esquerda: texto */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-pink-700">
            Sobre mim
          </span>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-pink-950 md:text-4xl lg:text-5xl">
            Eu sou a Rebeca, proprietária da Pop Dress
          </h1>
          <p className="mt-4 text-base leading-7 text-pink-700 md:text-lg md:leading-8">
            Amo moda feminina e gosto de criar uma loja que una delicadeza, estilo e peças que façam você se sentir linda de verdade.
            Cada escolha aqui é pensada com carinho para entregar uma experiência elegante, leve e atual.
          </p>

          {/* Tags responsivas: em telas muito pequenas, podem quebrar em 2 colunas, mas sm:grid-cols-3 já resolve */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-center text-sm font-medium text-pink-700 sm:text-left">
              Moda feminina
            </div>
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-center text-sm font-medium text-pink-700 sm:text-left">
              Curadoria com amor
            </div>
            <div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-4 py-4 text-center text-sm font-medium text-pink-700 sm:text-left">
              Estilo premium
            </div>
          </div>
        </div>

        {/* Coluna da direita: imagem + cards extras */}
        <div className="grid gap-5">
          {/* Container da imagem com altura responsiva (sem valor fixo) */}
          <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-linear-to-br from-pink-50 via-white to-pink-100 p-4 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border-2 border-dashed border-pink-200 bg-white/80 md:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="/perfil/fotodperfil.png"
                alt="Foto da Rebeca, dona da Pop Dress"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 520px"
                priority
              />
            </div>
          </div>

          {/* Cards de missão e estilo - em mobile ficam um abaixo do outro, em sm ficam lado a lado */}
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