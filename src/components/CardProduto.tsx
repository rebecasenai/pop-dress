import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

// 1. Tipagem das propriedades do produto
interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  // 2. Formatação de moeda BRL nativa
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card size="sm" className="group relative mx-auto w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-pink-100 bg-white/92 pt-0 shadow-[0_12px_40px_rgba(244,114,182,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(244,114,182,0.12)]">
      {/* Selo de destaque absoluto sobreposto no canto superior direito do card */}
      {destaque && (
        <Badge variant="secondary" className="absolute right-2 top-2 z-30 border border-pink-100 bg-pink-100 text-[11px] px-2 py-0.5 text-pink-700 shadow-sm">
          Destaque
        </Badge>
      )}

      {/* Container de imagem do produto com Image do Next.js para otimização e SEO */}
      <div className="relative mt-2 w-full aspect-5/4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-bold text-pink-950">{title}</CardTitle>
        <CardDescription className="text-xs text-pink-700/80">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        {/* Exibição do botão com o preço formatado */}
        <Button className="w-full h-9 bg-linear-to-r from-pink-300 to-pink-400 text-sm font-semibold text-white shadow-md transition hover:from-pink-400 hover:to-pink-500">
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}