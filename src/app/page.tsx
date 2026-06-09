import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import Link from "next/link"
import products from "../../produtos.json" // Importação direta da nossa base JSON

export default function Home() {
  // 1. Filtragem: Retorna apenas os produtos cujo atributo destaque seja igual a true
  const produtosEmDestaque = products.filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(251,207,232,0.78),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(252,231,243,0.92),_transparent_34%)]" />

      <section className="mx-auto max-w-7xl px-4 pt-10 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-pink-100 bg-white/85 px-6 py-8 shadow-[0_20px_70px_rgba(244,114,182,0.08)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-700">
              Nova coleção
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight text-pink-950 md:text-6xl">
              Pop Dress
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-pink-700 md:text-lg">
              Descubra a nova coleção de roupas femininas..
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-pink-400 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:from-pink-400 hover:to-pink-500"
              >
                Comprar agora
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white px-7 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50"
              >
                Falar com a equipe
              </Link>
            </div>
        
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-pink-100 p-4 shadow-[0_18px_50px_rgba(244,114,182,0.08)]">
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-pink-700 shadow-sm">
              Destaques do dia
            </div>
            <div className="grid h-full gap-4 pt-10 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-pink-100 bg-white/85 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Coleção</p>
                <p className="mt-2 text-2xl font-black text-pink-950">Looks delicados</p>
                <p className="mt-2 text-sm leading-6 text-pink-700">Peças que valorizam e realçam a sua beleza.</p>
              </div>
              <div className="rounded-[1.5rem] border border-pink-100 bg-white/85 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Curadoria</p>
                <p className="mt-2 text-2xl font-black text-pink-950">Visual Único</p>
                <p className="mt-2 text-sm leading-6 text-pink-700">Uma apresentação incrivel, peças mais usadas no momento.</p>
              </div>
              <div className="sm:col-span-2 rounded-[1.5rem] border border-pink-100 bg-white/85 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Assinatura</p>
                <p className="mt-2 text-xl font-semibold text-pink-950">Pop Dress entrega experiência de loja, não só catálogo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="mx-auto my-10 max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-pink-950">
          Produtos em destaque
        </h2>
      
      </div>

      {/* Grid Responsivo alimentado pelo loop do React */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3 lg:px-6">

        {/* 2. Loop de Renderização Dinâmica */}
        {produtosEmDestaque.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            price={produto.price}
            imageSrc={produto.imageSrc}
            destaque={produto.destaque}
          />
        ))}

      </div>
    </div>
  )
}