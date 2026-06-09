import CardProduto from "@/components/CardProduto"
import products from "../../../produtos.json"

export default function Produtos() {
    return (
        <main className="relative min-h-screen overflow-hidden px-4 py-10 lg:px-8">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.75),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(252,231,243,0.9),transparent_34%)]" />

            <section className="mx-auto max-w-7xl rounded-[2rem] border border-pink-100 bg-white/85 px-6 py-10 shadow-[0_20px_70px_rgba(244,114,182,0.08)] backdrop-blur md:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-lg font-semibold uppercase tracking-[0.24em] text-pink-700">
                        Catálogo
                    </span>
                    <p className="mt-4 text-base leading-7 text-pink-700 md:text-lg">
                        Uma vitrine completa com peças selecionadas para você
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((produto) => (
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
            </section>
        </main>
    );
}