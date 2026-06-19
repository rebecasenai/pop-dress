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
  destaque
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="group relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-pink-100 bg-white/92 pt-0 shadow-[0_12px_40px_rgba(244,114,182,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(244,114,182,0.12)]">
      
      {destaque && (
        <Badge className="absolute right-2 top-2 z-30 border border-pink-100 bg-pink-100 text-[10px] px-2 py-0.5 text-pink-700 shadow-sm">
          Destaque
        </Badge>
      )}

      {/* Imagem com proporção 4:3 (mais larga que alta) */}
      <div className="relative mt-1 w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-1"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      <CardHeader className="px-4 pt-3 pb-1">
        <CardTitle className="text-base font-bold text-pink-950 leading-tight line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-[11px] text-pink-700/80 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="px-4 pb-4 pt-0">
        <Button className="w-full h-9 text-sm bg-pink-400 hover:bg-pink-500 text-white shadow-sm transition">
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}