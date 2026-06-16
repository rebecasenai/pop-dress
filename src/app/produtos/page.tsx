import CardProduto from "@/components/CardProduto";
import products from "../../../produtos.json"; // ajuste o caminho se necessário

export default function Produtos() {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-pink-950 mb-3 tracking-tight">
            Nossos Produtos
          </h1>
          <p className="max-w-2xl text-pink-700/80 mx-auto md:mx-0">
            Encontre as melhores peças da Pop Dress, com qualidade e estilo.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <CardProduto
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageSrc={product.imageSrc}
              destaque={product.destaque}
            />
          ))}
        </div>
      </div>
    </div>
  );
}