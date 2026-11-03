# V8 Estética Automotiva — site institucional

Site estático (Astro + Tailwind CSS v4) para a V8 Estética Automotiva / V8 Lava Rápido, Tremembé, São Paulo.
Fonte da verdade do produto: [`docs/spec/v8-estetica-automotiva.md`](docs/spec/v8-estetica-automotiva.md).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview  # serve dist/ em http://127.0.0.1:4321
```

Variáveis (veja `.env.example`): `PUBLIC_SITE_URL`, `PUBLIC_WHATSAPP` (DDI + número, só dígitos).

## Onde editar o conteúdo

Tudo que o dono precisa trocar está em **`src/data/site.ts`**: endereço, telefone, WhatsApp, horários, serviços (textos, FAQ, títulos de SEO). O JSON-LD, o rodapé, os botões e o indicador "Aberto agora" leem desse arquivo.
Fotos: `src/assets/photos/` (mapeadas em `src/data/photos.ts`). Placas de veículos já estão borradas; mantenha esse cuidado em fotos novas.

## Estrutura

| Rota | Arquivo |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/servicos/{lavagem,polimento,vitrificacao,martelinho,higienizacao}/` | `src/pages/servicos/[slug].astro` (dados em `site.ts`) |
| `/contato/`, `/privacidade/`, `404` | `src/pages/` |

## Decisões

- **Direção visual "Reflexo"**: grafite/preto com prata do logo; verde só no botão de WhatsApp. Sem gradientes, sombras, cantos arredondados ou ícones decorativos. Display Exo 2 itálico + texto Inter, ambos self-hosted (`@fontsource`).
- **Estático, sem backend e sem formulário**: o seletor de serviço só monta o link `wa.me` no navegador. Nenhum dado pessoal é coletado; analytics fica desligado até haver consentimento (hook em `src/scripts/main.ts`).
- **Segurança**: CSP, HSTS, nosniff, Referrer-Policy e Permissions-Policy em `public/_headers` (Netlify/Cloudflare) e `vercel.json` (Vercel). `npm audit`: 0 vulnerabilidades.
- **Barra fixa mobile** (WhatsApp/Ligar/Rota) aparece ao rolar para cima e some ao descer, para nunca cobrir texto.

## Pendências do cliente `[CONFIRMAR]`

Número real do WhatsApp (hoje igual ao fixo) · domínio definitivo (`PUBLIC_SITE_URL`, hoje provisório) · preços/prazos/formas de pagamento · agendamento ou ordem de chegada · se o martelinho é próprio · ano de fundação, CNPJ e equipe · textos das 8 avaliações do Google (seção de avaliações fica oculta até lá) · fotos em alta (≥1600 px): fachada, antes/depois de polimento, vitrificação, martelinho, interior, equipe · logo vetorial/PNG transparente · conferir o conteúdo do Instagram (bloqueou acesso automático).
