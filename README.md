# 200 Receitas - Landing Page Next.js 14

Projeto migrado de HTML puro + Tailwind CSS para uma arquitetura moderna e escalável utilizando **Next.js 14 (App Router)** e **Framer Motion** para animações focadas em conversão.

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** @iconify/react
- **Imagens:** next/image com Unsplash (URLs remotas configuradas)

## 📦 Como Instalar e Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```
   *(Nota: Isso também instalará as dependências adicionais como `framer-motion` e `@iconify/react`.)*

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse a aplicação:**
   Abra o seu navegador em [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura de Diretórios Destaque

- `/app`: Configurações de layout globais (`layout.tsx`) com metadados de SEO, importação de fonte Inter e a página principal (`page.tsx`) que monta as seções.
- `/components/ui`: Componentes isolados e reutilizáveis altamente focados na interface (ex: `RecipeCard`, `TestimonialCard`, `Navbar`, `Footer`, `FAQItem`).
- `/components/sections`: Blocos e grandes seções da Landing Page, responsáveis pela lógica de animação de scroll.
- `/hooks`: Hooks utilitários como o `useInView` construído sobre as lógicas do Framer Motion.
- `/lib`: Gerenciamento do estado estático (`data.ts`) e variantes globais de animações (`animations.ts`).

## 🔄 Próximos Passos (Evolução Contínua)

Este projeto está focado inteiramente no front-end e melhorias visuais. Para um deploy em produção e geração de receita rápida, recomenda-se:

1. **Integração de Checkout (Pagamento):**
   - Substituir os links `href="#oferta"` no Call-to-Action pelo seu link real de checkout (Plataformas como Hotmart, Kiwify, Ticto, Stripe ou Yampi).
   - Adicionar UTM tracking buttons para facilitar o rastreamento via Facebook/Google Ads.

2. **Pixel e Analytics:**
   - Inserir via `<Script>` do Next.js o Meta Pixel e Google Analytics para monitorar tráfego e realizar campanhas de remarketing.

3. **Integração a CMS (Opcional):**
   - Caso deseje alterar depoimentos e a oferta sem necessitar alterar o código fonte, pode-se integrar `/lib/data.ts` ao Sanity.io ou Strapi, facilitando edições para copywriters ou equipe de marketing.

## 🛡️ Desempenho e SEO implementados
- `next/image`: Todas as imagens agora vêm acompanhadas da propriedade de sizing ou `fill`, eliminando o Layout Shift. A imagem do *Hero* contém `priority=true` (se aplicável), enquanto outras usam `lazy loading` implicitamente.
- O DOM HTML principal da `layout.tsx` gera meta-tags precisas de Open Graph visando excelente indexação social (WhatsApp, Facebook e Twitter pre-loads corretos).
