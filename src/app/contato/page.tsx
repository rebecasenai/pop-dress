"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Globe, Mail, MapPin, MessageCircle, Phone, Video } from "lucide-react"

const MapaContato = dynamic(() => import("@/components/MapaContato"), {
    ssr: false,
    loading: () => (
        <div className="flex h-full min-h-[320px] items-center justify-center rounded-[1.5rem] border border-pink-100 bg-pink-50/80 text-sm font-medium text-pink-600">
            Carregando mapa...
        </div>
    ),
})

const socialLinks = [
    {
        label: "Site",
        href: "https://example.com",
        icon: Globe,
    },
    {
        label: "Chat",
        href: "https://example.com/contato",
        icon: MessageCircle,
    },
    {
        label: "Vídeos",
        href: "https://example.com/videos",
        icon: Video,
    },
]

export default function Contato() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    }

    return (
        <main className="relative min-h-screen overflow-hidden px-4 py-10 lg:px-8">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.72),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(252,231,243,0.92),transparent_34%)]" />

            <section className="mx-auto max-w-7xl rounded-[2rem] border border-pink-100 bg-white/85 px-5 py-6 shadow-[0_20px_70px_rgba(244,114,182,0.08)] backdrop-blur md:px-8 md:py-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex w-fit items-center rounded-full border border-pink-100 bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-700">
                        Fale conosco
                    </span>
                    <h1 className="mt-5 text-4xl font-black tracking-tight text-pink-950 md:text-6xl">
                        Estamos prontos para atender você
                    </h1>
                    <p className="mt-4 text-base leading-8 text-pink-700 md:text-lg">
                        Tem alguma dúvida, sugestão ou quer apenas um oi? Use os canais abaixo, veja onde estamos e envie sua mensagem pelo formulário.
                    </p>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="grid gap-8">
                        <Card className="rounded-[1.75rem] border-pink-100 bg-white/90 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-pink-950">Canais de atendimento</CardTitle>
                                <CardDescription>
                                    Entre em contato diretamente por telefone, e-mail ou redes sociais.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
                                        <Mail className="h-5 w-5 text-pink-600" />
                                        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-pink-500">E-mail</p>
                                        <p className="mt-2 text-sm font-medium text-pink-950">popdess@gmail.com</p>
                                    </div>
                                    <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
                                        <Phone className="h-5 w-5 text-pink-600" />
                                        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-pink-500">Telefones</p>
                                        <p className="mt-2 text-sm font-medium text-pink-950">(11) 4002-8922</p>
                                        <p className="text-sm font-medium text-pink-950">(11) 99999-8888</p>
                                    </div>
                                    <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
                                        <MapPin className="h-5 w-5 text-pink-600" />
                                        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-pink-500">Endereço</p>
                                        <p className="mt-2 text-sm font-medium text-pink-950">Av. Paulista, 1000</p>
                                        <p className="text-sm font-medium text-pink-950">São Paulo - SP</p>
                                    </div>
                                </div>

                                <div className="rounded-[1.5rem] border border-pink-100 bg-white p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.22em] text-pink-500">Redes sociais</p>
                                            <p className="mt-1 text-sm text-pink-700">Acompanhe novidades e lançamentos.</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {socialLinks.map((social) => {
                                            const Icon = social.icon

                                            return (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-100"
                                                >
                                                    <Icon className="h-4 w-4" />
                                                    {social.label}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden rounded-[1.75rem] border-pink-100 bg-white/90 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-pink-950">Nossa localização</CardTitle>
                                <CardDescription>
                                    Veja onde estamos no mapa e encontre a loja com mais facilidade.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-hidden rounded-[1.5rem] border border-pink-100 bg-pink-50/50 p-3">
                                    <MapaContato />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="h-fit rounded-[1.75rem] border-pink-100 bg-white/90 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl text-pink-950">Envie uma mensagem</CardTitle>
                            <CardDescription>
                                Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-5" onSubmit={handleSubmit}>
                                <div className="grid gap-2">
                                    <Label htmlFor="nome">Nome completo</Label>
                                    <Input id="nome" name="nome" placeholder="Seu nome" required />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input id="email" name="email" type="email" placeholder="voce@exemplo.com" required />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="assunto">Assunto</Label>
                                    <Input id="assunto" name="assunto" placeholder="Como podemos ajudar?" required />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="mensagem">Mensagem</Label>
                                    <Textarea
                                        id="mensagem"
                                        name="mensagem"
                                        placeholder="Escreva sua mensagem aqui..."
                                        className="min-h-40"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500">
                                    Enviar mensagem
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}