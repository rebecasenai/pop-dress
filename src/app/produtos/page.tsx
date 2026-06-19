"use client"

import { useState } from "react"
import { Search, RotateCcw } from "lucide-react"
import CardProduto from "@/components/CardProduto"
import products from "../../../produtos.json"

interface ProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque: boolean
  categoria?: string
}

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante")

  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaSelecionada("Todos")
    setOrdenacaoPreco("relevante")
  }

  const produtosFiltrados = (products as ProdutoProps[]).filter((produto) => {
    const matchText =
      produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategoria =
      categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada
    return matchText && matchCategoria
  })

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacaoPreco === "menor-preco") return a.price - b.price
    if (ordenacaoPreco === "maior-preco") return b.price - a.price
    return 0
  })

  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") return products.length
    return (products as ProdutoProps[]).filter(p => p.categoria === categoria).length
  }

  const listaCategorias = ["Calças", "Blusas", "Casacos", "Camisas", "Vestidos", "Conjuntos", "Saias", "Shorts"]

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-pink-950 mb-3 tracking-tight">
            Nossos Produtos
          </h1>
          <p className="max-w-2xl text-pink-700/80 mx-auto md:mx-0">
            Encontre as melhores peças da Pop Dress, com qualidade e estilo.
          </p>
        </header>

        <section className="bg-white/85 backdrop-blur p-6 rounded-2xl border border-pink-100 shadow-[0_12px_40px_rgba(244,114,182,0.08)] mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-pink-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar produtos..."
                className="w-full pl-10 pr-4 py-2 bg-pink-50/70 border border-pink-200 rounded-full text-pink-950 placeholder:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all text-sm"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <label htmlFor="ordenar-preco" className="text-sm font-medium text-pink-700">
                Ordenar por:
              </label>
              <select
                id="ordenar-preco"
                value={ordenacaoPreco}
                onChange={(e) => setOrdenacaoPreco(e.target.value)}
                className="bg-pink-50/70 border border-pink-200 text-pink-950 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                <option value="relevante">Mais relevantes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>

              {(searchTerm !== "" || categoriaSelecionada !== "Todos" || ordenacaoPreco !== "relevante") && (
                <button
                  onClick={limparFiltros}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-pink-600 hover:text-pink-800 border border-pink-200 hover:bg-pink-100 rounded-full transition-all"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mt-6 pt-6 border-t border-pink-100">
            {listaCategorias.map((categoria) => {
              const isActive = categoriaSelecionada === categoria
              const totalItens = obterTotalCategoria(categoria)
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-pink-600 text-white shadow-sm"
                      : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                  }`}
                >
                  <span>{categoria}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full transition-all ${
                      isActive ? "bg-white/20 text-white" : "bg-pink-200 text-pink-500"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <div className="mb-6 flex justify-between items-center text-sm text-pink-500">
          <span>
            {produtosOrdenados.length === 1
              ? "1 produto encontrado"
              : `${produtosOrdenados.length} produtos encontrados`}
          </span>
        </div>

        <section className="w-full">
          {produtosOrdenados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {produtosOrdenados.map((produto) => (
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
          ) : (
            <div className="w-full bg-white/85 backdrop-blur border border-pink-100 rounded-2xl p-12 text-center shadow-[0_12px_40px_rgba(244,114,182,0.06)]">
              <h3 className="text-lg font-bold text-pink-800 mb-2">
                Nenhum produto foi encontrado
              </h3>
              <p className="text-pink-500 text-sm mb-6 max-w-sm mx-auto">
                Não localizamos produtos com o termo "{searchTerm}" na categoria "{categoriaSelecionada}".
              </p>
              <button
                onClick={limparFiltros}
                className="px-6 py-2 bg-pink-600 text-white rounded-full text-sm font-semibold hover:bg-pink-700 transition-all"
              >
                Ver todos os produtos
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}