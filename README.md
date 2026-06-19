# 👗 Pop Dress - E-commerce de Moda Feminina

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)

> **Pop Dress** é uma loja virtual de moda feminina desenvolvida com Next.js, TypeScript e Tailwind CSS. O projeto oferece uma experiência de compra moderna, responsiva e intuitiva, com foco em usabilidade e design elegante.

---

## 📋 Índice

- [📸 Demonstração](#-demonstração)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [📦 Scripts Disponíveis](#-scripts-disponíveis)
- [🧩 Componentes Principais](#-componentes-principais)
- [🎨 Paleta de Cores](#-paleta-de-cores)
- [📱 Responsividade](#-responsividade)
- [🤝 Como Contribuir](#-como-contribuir)
- [📄 Licença](#-licença)

---

## 📸 Demonstração

```Link Na Vercel 
https://pop-dress-oquw.vercel.app/?authuser=0

✨ Funcionalidades
🏠 Página Inicial
Carrossel de banners em tela cheia com navegação lateral

Vitrine de produtos em destaque com filtro automático

Chamadas para ação (CTA) intuitivas

👗 Página de Produtos
Busca textual com filtro por nome e descrição

Filtro por categoria com contador dinâmico de itens

Ordenação por relevância, menor preço e maior preço

Indicador do número de resultados encontrados

Mensagem amigável quando nenhum produto é encontrado

Botão "Limpar filtros" com exibição condicional

👤 Página Sobre
Seção com história da marca e da proprietária

Cards com missão, estilo e valores

Imagem de perfil com proporção responsiva

🧭 Navegação
Header fixo com menu responsivo (hambúrguer no mobile)

Logo + nome da marca com destaque visual

Navegação para Home, Produtos, Contato e Sobre

📱 Responsividade
Layout adaptado para mobile, tablet e desktop

Grid fluido de produtos (1 coluna no mobile, 2 em tablet, 3 em desktop)

Paddings fluidos com breakpoints do Tailwind

🛠️ Tecnologias Utilizadas
Tecnologia	Descrição
Next.js 14	Framework React com renderização híbrida (SSR/CSR)
React 18	Biblioteca para construção de interfaces
TypeScript	Superset tipado do JavaScript
Tailwind CSS	Framework CSS utilitário para estilização rápida
Lucide React	Ícones vetoriais de alta qualidade
Shadcn/ui	Componentes acessíveis e personalizáveis
📁 Estrutura do Projeto
text
pop-dress/
├── public/
│   ├── carrossel/          # Imagens do banner principal
│   ├── logo/               # Logotipo da marca
│   └── produtos/           # Imagens dos produtos (PL1.png ... PL50.png)
│
├── src/
│   ├── app/
│   │   ├── page.tsx        # Página inicial (Home)
│   │   ├── produtos/
│   │   │   └── page.tsx    # Vitrine com filtros e busca
│   │   ├── sobre/
│   │   │   └── page.tsx    # Página institucional
│   │   └── contato/
│   │       └── page.tsx    # Página de contato
│   │
│   ├── components/
│   │   ├── Header.tsx      # Cabeçalho com menu responsivo
│   │   ├── Footer.tsx      # Rodapé com informações da marca
│   │   ├── Carrossel.tsx   # Componente de banners com navegação
│   │   └── CardProduto.tsx # Card individual de produto
│   │
│   └── components/ui/      # Componentes Shadcn/ui (Button, Card, Badge, etc.)
│
├── produtos.json           # Base de dados dos produtos (50 itens)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
🚀 Como Executar
Pré-requisitos
Node.js 18+ e npm/yarn/pnpm instalados

Passo a passo
bash
# 1. Clone o repositório
git clone https://github.com/rebecasenai/pop-dress.git
cd pop-dress

# 2. Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# 3. Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

# 4. Acesse no navegador
# http://localhost:3000
Build para produção
bash
npm run build
npm start
📦 Scripts Disponíveis
Script	Descrição
npm run dev	Inicia o servidor de desenvolvimento com hot-reload
npm run build	Gera a versão de produção otimizada
npm start	Executa a versão de produção
npm run lint	Executa o linter para verificar padrões de código
🧩 Componentes Principais
Header.tsx
Cabeçalho fixo com logo, título da marca e navegação

Menu hambúrguer para dispositivos móveis (com ícones Lucide)

Estado de isOpen para controlar abertura/fechamento

Footer.tsx
Rodapé com copyright e mensagem institucional

Design com gradiente rosa suave

Carrossel.tsx
Carrossel de banners em tela cheia com navegação lateral

Imagens com object-cover para preencher o espaço

Setas de navegação com fundo semitransparente

CardProduto.tsx
Card individual de produto com imagem, título, descrição e preço

Badge de destaque para produtos em promoção

Botão com preço formatado em moeda BRL

Efeitos de hover com transição suave

Página de Produtos (/produtos)
Client Component com useState para gerenciar filtros

Busca por nome e descrição

Filtro por categoria com extração dinâmica das categorias do JSON

Ordenação por relevância, menor/major preço

Contagem dinâmica de itens por categoria

Mensagem personalizada para lista vazia

🎨 Paleta de Cores
Cor	Uso
pink-50 / pink-100	Fundos suaves e bordas
pink-200 / pink-300	Elementos interativos (hover, focus)
pink-400 / pink-500	Botões primários e destaques
pink-600 / pink-700	Textos e elementos em destaque
pink-950	Títulos e textos principais
white/85	Fundos translúcidos com efeito blur
slate-600 / slate-700	Textos secundários
📱 Responsividade
Breakpoint	Largura	Comportamento
Mobile	< 640px	1 coluna de produtos, menu hambúrguer, paddings reduzidos
Tablet	640px - 1024px	2 colunas de produtos, menu horizontal
Desktop	> 1024px	3 colunas de produtos, espaçamentos amplos
Classes Tailwind utilizadas:

hidden / md:flex – controle de visibilidade

flex-col / md:flex-row – orientação de layout

px-4 sm:px-6 lg:px-16 – paddings fluidos

grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 – grid responsivo

🤝 Como Contribuir
Fork o projeto

Clone o seu fork:

bash
git clone https://github.com/seu-usuario/pop-dress.git
Crie uma branch para sua feature:

bash
git checkout -b minha-feature
Commit suas alterações:

bash
git commit -m "feat: minha nova feature"
Push para a branch:

bash
git push origin minha-feature
Abra um Pull Request no repositório original

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙏 Agradecimentos
Next.js – Framework incrível para React

Tailwind CSS – Estilização rápida e eficiente

Lucide – Ícones belos e consistentes

Shadcn/ui – Componentes acessíveis

Desenvolvido com 💖 por Rebeca