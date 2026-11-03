# Spec — Site institucional V8 Estética Automotiva (V8 Lava Rápido)

> Fonte da verdade. Skills de implementação trabalham DENTRO deste documento. Dados não confirmados ficam `[CONFIRMAR]` e não entram no site como afirmação.
> Premissa: o usuário pediu "implemente toda a solução"; decisões abaixo são tomadas sem espera de aprovação.

## 1. Missão e resultado
Site institucional (one-page forte + páginas de serviço) em pt-BR para lava rápido/estética automotiva em Tremembé, zona norte de São Paulo. Público chega pelo Google/Instagram no celular. **Conversão principal: WhatsApp** (mensagem pré-preenchida). Secundárias: ligar, abrir rota no Maps.

## 2. Fatos confirmados (origem)
- Nome no Maps: **V8 Lava Rápido**; logo/marca: **V8 Estética Automotiva** (logo enviado). Categoria: Lava-rápido (Maps).
- Endereço: R. Francisco José Lopes, 22 – Tremembé, São Paulo – SP, 02378-180 (Maps).
- Telefone: (11) 2373-8455 (Maps). WhatsApp existe na ficha (número `[CONFIRMAR]`, assumido igual ao fixo até o dono informar).
- Horários (Maps): Ter–Sáb 08:00–17:00; Dom 08:00–12:00; Seg fechado.
- Nota 5,0, 8 avaliações (Maps). Serviços listados no Maps: acabamento espelhado, aspiração, aspiração interna de veículos…
- Parede da fachada (fotos): Ducha, Lavagem, Polimento, Martelinho, Vitrificação, Higienização.
- Instagram: @v8lavarapido_ (link do dono). Conteúdo não lido: Instagram devolveu 429 (não contornado).
- Fotos reais enviadas: BMW M440i branca na fachada, fila de BMW/X4/Ranger, Porsche Cayenne.

## 3. Não sabemos — `[CONFIRMAR]`
Número do WhatsApp; preços/tabela; marcas de produtos; nome do dono/equipe; ano de fundação; CNPJ/razão social; se atende por agendamento ou ordem de chegada; formas de pagamento; leva-e-traz; serviço de martelinho próprio ou parceiro; garantia da vitrificação; texto do restante dos serviços do Maps; domínio; conta do Google Meu Negócio (dono) e URL de avaliações.

**Regras de integridade:** sem depoimentos, números, prêmios, preços, garantias, certificações ou "revendedor oficial" inventados. A nota 5,0/8 avaliações só aparece com texto "no Google" e link para a ficha; seção de avaliações fica oculta até haver textos reais. Sem logos de terceiros (BMW, Porsche): fotos mostram carros, não se usa "especialista em BMW" como promessa. Sem hotlink de Instagram. **Placas visíveis nas fotos devem ser borradas** (privacidade/LGPD).

## 4. Marca
- Nome/logo: "V" com asas em prata escovado + "8" cromado no vértice = alusão a motor V8 e potência; tipografia itálica, larga e técnica. Comunica performance, carro esportivo/premium, acabamento espelhado.
- Paleta (amostrada do logo/fotos): preto `#000000`; prata `#8a8a8a` (sombra) a `#d4d4d4` (brilho); grafite de fundo `#36373b`. Derivar neutros: `#0b0b0c`, `#16171a`, `#2a2b2f`. Único acento: **prata-azulado frio** `#9fb4c8` (reflexo de pintura) e **verde-brilho `#c6f432` só como micro-detalhe** (pinça do Cayenne na foto) — máx. 2 acentos.
- Personalidade: precisa, técnica, orgulhosa do detalhe; fala com dono de carro cuidado.
- Posicionamento: lava rápido de bairro com **acabamento de estúdio de detalhamento** (polimento, vitrificação, martelinho) — "do lava rápido ao brilho espelhado".
- Fraquezas atuais: presença web quase só Maps/Instagram; nome duplo (Lava Rápido x Estética) → site unifica: **"V8 Estética Automotiva — Lava Rápido"**.

## 5. Nicho e concorrência
- Estética automotiva em alta; matéria Band (jan/2026) cita alta de 280% em 5 anos no setor, puxada por Sul/Sudeste (fonte jornalística, não primária → usar só em material interno, não no site).
- Cristalização/vitrificação posicionadas como etapas seguintes ao polimento (Vrum, jul/2026) → página educativa útil para SEO.
- Concorrência zona norte: Studio Dan (Limão), 5,0 com 53 avaliações no Google (Bendito Guia). Talento Estética Automotiva (Tremembé). Mapeamento completo `[CONFIRMAR]` via Maps.
- Diferenciais provados: fachada com lista de serviços clara, clientela de carros premium (fotos), nota 5,0, aberto aos domingos de manhã.

## 6. Público e metas
Donos de carro (esportivos/SUVs/premium e uso diário) em Tremembé, Santana, Jaçanã, Mandaqui. Dores: medo de riscar a pintura, não saber diferença polimento × vitrificação, falta de preço claro, horário. KPIs: cliques WhatsApp, ligações, rotas. Metas técnicas: Lighthouse ≥ 95 perf/≥ 95 a11y/100 SEO no mobile.

## 7. Direção de design
- **Conceito: "Reflexo".** Showroom noturno: fundo grafite/preto, superfícies que refletem (gradientes prateados finos, linhas de luz), a asa do V8 como motivo gráfico. Porquê: a marca é cromada e o serviço vende brilho.
- Tokens obrigatórios: cores da seção 4. Tipografia: display largo/itálico técnico (candidatas: Michroma, Orbitron-free alternatives como Saira Extra Condensed, Exo 2 italic) + texto limpo (Inter, Manrope). Self-host, `font-display: swap`.
- Hero: H1 em um único bloco legível ("Seu carro com brilho de espelho."), subtítulo curto, CTA primário "Chamar no WhatsApp" visível acima da dobra em 390×844, CTA secundário "Ver serviços". Fundo: gradiente + logo/asa; foto só se ≥1600 px (não temos → sem foto no hero).
- Contraste ≥ 4,5:1; botão WhatsApp em verde `#25D366` com texto preto (único uso de verde de marca de terceiros é o ícone descritivo).
- **Não fazer:** vermelho/laranja genérico de oficina, chamas/xadrez, stock photos, cards com sombra roxa, gradiente roxo-azul, emoji como ícone, carrossel automático, contador animado inventado, selo "melhor da região".

## 8. UX — páginas e fluxo
Páginas: `/` (hero, serviços, como funciona, galeria, avaliações [oculta se vazia], localização/horário, FAQ, CTA final); `/servicos/polimento`, `/servicos/vitrificacao`, `/servicos/martelinho`, `/servicos/higienizacao`, `/servicos/lavagem` (lavagem + ducha + aspiração + acabamento espelhado); `/contato` (mapa, horários, formulário opcional → WhatsApp); `/privacidade`; 404.
Navegação: logo, Serviços, Galeria, Como chegar, botão WhatsApp. Barra fixa inferior no mobile (WhatsApp + Ligar + Rota). Fluxo: busca → home → toque no WhatsApp com texto "Olá! Vi o site da V8 e quero orçamento de [serviço]". Indicador "Aberto agora / Fechado" calculado no fuso America/Sao_Paulo.

## 9. Conteúdo (copy base, sem preços)
- H1: "Seu carro com brilho de espelho." Sub: "Lavagem, polimento, vitrificação, martelinho e higienização em Tremembé, zona norte de SP."
- Serviços (frases curtas, sem prometer prazo/garantia): Ducha · Lavagem · Aspiração · Higienização interna · Polimento · Vitrificação · Martelinho (remoção de pequenos amassados sem pintura) · Acabamento espelhado.
- Como funciona: 1) Chame no WhatsApp 2) Avaliamos o carro 3) Orçamento e combinado de prazo 4) Retirada.
- FAQ: Diferença polimento × cristalização × vitrificação? Preciso agendar? Quanto tempo leva? Que formas de pagamento? (respostas sem número → "informamos no orçamento" onde `[CONFIRMAR]`).
- Tom: direto, próximo, orgulhoso; sem gíria forçada. Aviso: "Prazos e valores variam conforme o veículo."

## 10. SEO
Termos: lava rápido Tremembé, estética automotiva zona norte SP, vitrificação de pintura SP, polimento automotivo Tremembé, martelinho de ouro zona norte, higienização de carro SP. Title/description únicos por página. JSON-LD `AutoWash` (ou `LocalBusiness`) com NAP idêntico ao Maps, `openingHoursSpecification`, `sameAs` Instagram; `aggregateRating` **somente após** confirmação (não incluir agora). Sitemap, robots, canonical, OG image gerada com logo. Checklist Google Meu Negócio ao dono: categoria Estética automotiva, serviços, fotos novas ≥1600 px, link do site, perguntas, posts. Eventos (com consentimento): `click_whatsapp`, `click_call`, `click_route`.

## 11. Performance e acessibilidade
LCP < 2,0 s, CLS < 0,05, INP < 200 ms em mobile. Imagens AVIF/WebP responsivas com width/height, lazy exceto a primeira. Fontes self-host ≤ 2 famílias. WCAG 2.1 AA, alvos de toque ≥ 44 px, foco visível, `prefers-reduced-motion`, teste em 360 px, sem scroll horizontal.

## 12. Segurança e privacidade
Site estático; sem login. Formulário (se houver) só monta link wa.me — nenhum dado enviado a servidor. Sem coleta sem consentimento: analytics só após banner/aceite (LGPD); página de privacidade. Headers (via `vercel.json`/`_headers`): CSP restrita, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Zero segredos no cliente. `npm audit` limpo para produção.

## 13. Stack
**Astro (SSG) + Tailwind CSS**, TypeScript. Motivo: HTML estático rápido, SEO, zero JS por padrão. Dados editáveis em `src/data/site.ts` (NAP, horários, serviços, WhatsApp) — única fonte para JSON-LD, rodapé e botões. Env: `PUBLIC_SITE_URL`, `PUBLIC_GA_ID` (opcional). Deploy sugerido: Vercel/Hostinger estático.

## 14. Assets
Inventário (originais em `/root/.claude/uploads/da40ea26-…/`):
- `0bd56e19-image.jpg` logo 990×860 — header/OG/favicon (fundo preto circular).
- `d8ddd029-image.jpg` BMW na fachada 1206×953 — galeria/seção sobre (placa a borrar).
- `30d5025c-image.jpg` fila de carros 1206×712 — galeria/localização.
- `4446546e-image.jpg` Porsche Cayenne 1206×984 — serviços/vitrificação.
- `328f54fa-image.png` print Maps — **só referência**, nunca publicado.
Regras: nenhuma é ≥1600 px → sem foto em hero; uso em ≥800 px; nada repetido em seções; borrar placas. **Fotos necessárias:** fachada/oficina em alta (≥1600 px), antes/depois de polimento, vitrificação em andamento, martelinho, higienização interna, equipe, logo vetorial (SVG/PNG fundo transparente).

## 15. Processo e QA
1) Scaffold + tokens + `site.ts`. 2) Home → **checkpoint visual** (390/1440) antes das demais páginas. 3) Páginas de serviço, contato, privacidade. 4) SEO/JSON-LD/headers. 5) Auditorias (design, a11y, perf, segurança, SEO). 6) Revisão final em 390, 768, 1440 px com ≥1 ciclo de correção. 7) Relatório com pendências.

## 16. Critérios de aceite
- [ ] Todas as páginas da seção 8 existem e navegam.
- [ ] NAP/horários idênticos aos fatos; vêm de `site.ts`.
- [ ] Nenhum dado inventado (preço, depoimento, garantia, ano).
- [ ] CTA WhatsApp acima da dobra em 390×844; barra fixa mobile.
- [ ] Sem scroll horizontal 360–1440 px; contraste AA; teclado ok.
- [ ] Placas borradas; sem imagens de terceiros/Instagram.
- [ ] JSON-LD válido; sitemap/robots/canonical/OG.
- [ ] Lighthouse mobile metas da seção 6; build e lint limpos.
- [ ] Headers de segurança configurados; consentimento antes de analytics.

## 17. Fontes
- Band Motor, "Car detailing: o que é, quanto custa e se vale a pena", jan/2026 — band.com.br/bandmotor/noticias/car-detailing-o-que-e-quanto-custa-vale-a-pena-202601091847
- Vrum, "Polimento, cristalização ou vitrificação", jul/2026 — vrum.com.br/aceleradas/2026/07/7454057-…
- Bendito Guia, Studio Dan Estética Automotiva (Limão) — benditoguia.com.br/empresa/studio-dan-estetica-automotiva-limao-sao-paulo
- Bendito Guia, Talento Estética Automotiva (Tremembé) — benditoguia.com.br/empresa/talento-estetica-automotiva-tremembe-sao-paulo
- Print Google Maps e fotos enviadas pelo dono do projeto (nov/2026).
- Instagram @v8lavarapido_: acesso bloqueado (429), não lido.
