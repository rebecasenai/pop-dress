👗 Pop Dress - E-commerce de Moda Feminina
Bem-vindo ao repositório da Pop Dress! Este é um projeto de e-commerce desenvolvido com Next.js, Tailwind CSS e TypeScript, focado em oferecer uma experiência elegante, responsiva e intuitiva para amantes da moda feminina.

🚀 Tecnologias utilizadas
Next.js 15 – Framework React com renderização híbrida (SSR/CSR) e roteamento baseado em arquivos.

React 19 – Biblioteca para construção de interfaces.

TypeScript – Tipagem estática para maior segurança e manutenibilidade.

Tailwind CSS – Framework CSS utilitário para estilização rápida e responsiva.

Lucide React – Conjunto de ícones vetoriais modernos.

Shadcn/ui – Componentes acessíveis e personalizáveis (Card, Badge, Button, Carousel).

📁 Estrutura de pastas
text
pop-dress/
├── public/
│   ├── carrossel/          # Imagens dos banners do carrossel
│   ├── logo/               # Logotipo da marca
│   └── perfil/             # Foto da proprietária
├── src/
│   ├── app/                # Rotas e páginas (Next.js App Router)
│   │   ├── page.tsx        # Página inicial (Home)
│   │   ├── produtos/
│   │   │   └── page.tsx    # Página de listagem de produtos
│   │   ├── contato/
│   │   │   └── page.tsx    # Página de contato (a ser implementada)
│   │   └── sobre/
│   │       └── page.tsx    # Página Sobre
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.tsx      # Cabeçalho com menu responsivo
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── Carrossel.tsx   # Carrossel de banners (full-width)
│   │   └── CardProduto.tsx # Card individual de produto
│   └── styles/             # Estilos globais (se houver)
├── produtos.json           # Base de dados mockada dos produtos
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
🛠️ Como rodar o projeto localmente
Pré-requisitos
Node.js (versão 18 ou superior)

npm ou yarn

Passos
Clone o repositório

bash
git clone https://github.com/seu-usuario/pop-dress.git
cd pop-dress
Instale as dependências

bash
npm install
# ou
yarn install
Execute o servidor de desenvolvimento

bash
npm run dev
# ou
yarn dev
Acesse no navegador
Abra http://localhost:3000 para visualizar o projeto.

Build para produção

bash
npm run build
npm start
✨ Funcionalidades principais
Carrossel de banners – Exibição em tela cheia com navegação por setas.

Vitrine de produtos – Grid responsivo com cards exibindo título, descrição, preço e selo de "Destaque".

Menu responsivo – Navegação desktop com links estilizados e menu hambúrguer em dispositivos móveis.

Página Sobre – Seção com a história da marca e missão, com layout adaptável.

Design consistente – Paleta de cores em tons de rosa, bordas arredondadas e sombras suaves.

Dados mockados – Os produtos são carregados a partir de um arquivo JSON local (fácil de substituir por API futuramente).

📱 Responsividade
O projeto foi desenvolvido com foco em mobile-first, utilizando breakpoints do Tailwind:

Mobile (até 640px): Menu hambúrguer, texto centralizado, cards em coluna única.

Tablet (640px a 1024px): Menu horizontal, grid de produtos em 2 colunas.

Desktop (acima de 1024px): Layout completo com navegação à direita, grid em 3 ou 4 colunas.

Todos os componentes (Header, Footer, Carrossel, Cards) se adaptam fluidamente.

🎨 Personalização
Alterar cores
As cores principais estão configuradas no tailwind.config.js. Atualmente utilizamos tons de rosa:

pink-50 a pink-950

Destaque com rose-500 para pequenos acentos

Para mudar a paleta, edite o arquivo de configuração ou substitua as classes diretamente nos componentes.

Adicionar novos produtos
Edite o arquivo produtos.json seguindo a estrutura:

json
{
  "id": 1,
  "title": "Vestido Floral",
  "description": "Vestido leve com estampa de flores",
  "price": 89.90,
  "imageSrc": "/produtos/vestido-floral.jpg",
  "destaque": true
}
Substituir imagens
As imagens estão em public/. Substitua pelos seus próprios arquivos mantendo os mesmos nomes ou atualize os caminhos nos componentes.

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir.

👩‍💻 Autora
Rebeca – idealizadora da Pop Dress
💌 contato@popdress.com (fictício)
🔗 Instagram (camporesere)

🙌 Agradecimentos
Shadcn/ui pelos componentes acessíveis.

Lucide pelos ícones bonitos.

Tailwind CSS pela agilidade no desenvolvimento.

Feito com carinho para você que ama moda feminina! 🌸