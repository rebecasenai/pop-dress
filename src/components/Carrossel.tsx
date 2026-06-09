"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    {src:"/carrossel/banner00.png",alt:"coisas"},
    {src:"/carrossel/banner01.png",alt:"coisas"},
    {src:"/carrossel/banner02.png",alt:"coisas"},
    {src:"/carrossel/banner04.png",alt:"coisas"},
]

export default function Carrossel() {
  return (
    <section className="w-full px-4 py-6 md:px-6 lg:px-8">
        <Carousel className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_25px_80px_rgba(244,114,182,0.08)]">
            <CarouselContent>
                {carrosselImagens.map((imagem,index)=>(
                    <CarouselItem key={index}>
                        <div className="relative h-75 w-full overflow-hidden md:h-112.5">
                            <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            fill
                            className="object-cover"
                            priority={index===0}

                            />
                            <div/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-pink-100 bg-white/90 text-pink-700 shadow-md hover:bg-pink-50"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-pink-100 bg-white/90 text-pink-700 shadow-md hover:bg-pink-50"/>
        </Carousel>
    </section>
  )
}
