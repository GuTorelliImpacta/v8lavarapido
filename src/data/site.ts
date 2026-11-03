// Única fonte de verdade para NAP, horários, serviços e links.
// Tudo marcado [CONFIRMAR] precisa ser validado pelo dono antes do lançamento.

export const site = {
  name: 'V8 Estética Automotiva',
  legalShort: 'V8 Lava Rápido', // nome na ficha do Google Maps
  tagline: 'Lava rápido e estética automotiva em Tremembé, zona norte de São Paulo',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://v8esteticaautomotiva.com.br',
  phoneDisplay: '(11) 2373-8455',
  phoneTel: '+551123738455',
  // [CONFIRMAR] número do WhatsApp; assumido igual ao fixo até o dono informar.
  whatsapp: (import.meta.env.PUBLIC_WHATSAPP as string | undefined) || '551123738455',
  instagram: 'https://www.instagram.com/v8lavarapido_',
  instagramHandle: '@v8lavarapido_',
  address: {
    street: 'R. Francisco José Lopes, 22',
    district: 'Tremembé',
    city: 'São Paulo',
    state: 'SP',
    zip: '02378-180',
  },
  rating: { value: '5,0', count: 8, source: 'Google' },
  timezone: 'America/Sao_Paulo',
} as const;

export const addressLine = `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}, ${site.address.zip}`;
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`V8 Lava Rápido ${site.address.street} ${site.address.district} ${site.address.city}`);
export const routeUrl =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(`${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`);

// dia: 0=domingo … 6=sábado. open/close em minutos desde 00:00.
export const hours = [
  { days: 'Terça a sábado', short: 'Ter–Sáb', open: '08:00', close: '17:00', dows: [2, 3, 4, 5, 6] },
  { days: 'Domingo', short: 'Dom', open: '08:00', close: '12:00', dows: [0] },
  { days: 'Segunda-feira', short: 'Seg', open: null, close: null, dows: [1] },
] as const;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
export const defaultWaText = 'Olá! Vi o site da V8 Estética Automotiva e quero um orçamento.';

export type Service = {
  slug: string;
  name: string;
  short: string; // frase curta para listas
  headline: string; // H1 da página (<= 2 linhas)
  lead: string;
  what: string[];
  forWho: string[];
  steps: string[];
  faq: { q: string; a: string }[];
  title: string;
  description: string;
  keywords: string;
  photo: 'roda-bmw' | 'roda-cayenne' | 'capo-azul' | 'lateral-bmw' | 'frente-cayenne';
};

export const services: Service[] = [
  {
    slug: 'lavagem',
    name: 'Lavagem e ducha',
    short: 'Ducha, lavagem, aspiração e acabamento espelhado para o dia a dia do seu carro.',
    headline: 'Lavagem que respeita a pintura.',
    lead: 'Ducha, lavagem, aspiração interna e acabamento espelhado em Tremembé, para manter o carro limpo sem agredir a pintura.',
    what: [
      'A ducha tira a sujeira solta antes do contato, para que o carro não seja esfregado com areia e poeira.',
      'A lavagem completa cuida da carroceria, rodas e vidros. A aspiração limpa carpetes, bancos e porta-malas.',
      'O acabamento espelhado fecha o serviço com o brilho que você vê saindo do box.',
    ],
    forWho: ['Quem quer o carro limpo toda semana', 'Quem vai vender ou entregar o carro e quer boa aparência', 'Quem usa o carro no dia a dia na zona norte'],
    steps: ['Você chama no WhatsApp ou chega ao endereço', 'Avaliamos o estado do carro', 'Combinamos o serviço e o valor antes de começar', 'Você retira o carro limpo'],
    faq: [
      { q: 'Preciso agendar a lavagem?', a: 'Chame no WhatsApp antes de vir para confirmar a disponibilidade do dia.' },
      { q: 'Vocês fazem aspiração interna?', a: 'Sim. Aspiração interna de veículos consta entre os serviços da nossa ficha no Google.' },
      { q: 'Quanto custa?', a: 'O valor depende do tamanho e do estado do veículo. Informamos no orçamento, antes de começar.' },
    ],
    title: 'Lavagem e ducha em Tremembé, SP',
    description: 'Lavagem, ducha, aspiração e acabamento espelhado na V8 Estética Automotiva, em Tremembé, São Paulo. Chame no WhatsApp.',
    keywords: 'lava rápido Tremembé, lavagem automotiva zona norte SP',
    photo: 'capo-azul',
  },
  {
    slug: 'polimento',
    name: 'Polimento',
    short: 'Remove marcas leves e devolve profundidade ao brilho da pintura.',
    headline: 'Polimento que devolve o brilho.',
    lead: 'Polimento automotivo em Tremembé para tirar o aspecto opaco e as marcas leves da pintura.',
    what: [
      'Com o tempo, sol, poeira e lavagens inadequadas deixam a pintura opaca e com marcas leves.',
      'O polimento corrige essa camada superficial e devolve profundidade e reflexo ao acabamento.',
      'Depois do polimento, a pintura fica pronta para receber uma proteção de longo prazo, como a vitrificação.',
    ],
    forWho: ['Carros com a pintura opaca ou riscos leves', 'Quem vai vender o carro e quer valorizar a aparência', 'Quem quer preparar a pintura para a vitrificação'],
    steps: ['Você chama no WhatsApp', 'Avaliamos a pintura pessoalmente', 'Combinamos o nível de polimento e o valor', 'Você retira o carro com a pintura renovada'],
    faq: [
      { q: 'Polimento tira todos os riscos?', a: 'Remove marcas leves da camada superficial. Riscos profundos precisam de avaliação no carro.' },
      { q: 'Qual a diferença entre polimento e vitrificação?', a: 'O polimento corrige a pintura. A vitrificação protege a pintura depois de corrigida.' },
      { q: 'Quanto tempo leva?', a: 'Depende do veículo e do estado da pintura. Combinamos o prazo no orçamento.' },
    ],
    title: 'Polimento automotivo em Tremembé, SP',
    description: 'Polimento de pintura na V8 Estética Automotiva, em Tremembé, São Paulo. Avaliação do carro e orçamento pelo WhatsApp.',
    keywords: 'polimento automotivo Tremembé, polimento carro zona norte SP',
    photo: 'roda-bmw',
  },
  {
    slug: 'vitrificacao',
    name: 'Vitrificação',
    short: 'Proteção de longo prazo para a pintura, depois de corrigida.',
    headline: 'Vitrificação para proteger a pintura.',
    lead: 'Vitrificação de pintura em Tremembé: uma camada de proteção de longo prazo sobre a pintura já corrigida.',
    what: [
      'A vitrificação é a etapa de proteção que vem depois do polimento: forma uma camada sobre a pintura que ajuda a protegê-la do sol e da sujeira.',
      'A pintura fica mais fácil de limpar e mantém o brilho por mais tempo.',
      'Tempo de proteção e cuidados de manutenção variam conforme o produto e o uso do carro. Explicamos tudo no orçamento.',
    ],
    forWho: ['Carros novos ou recém-polidos', 'Quem quer a pintura protegida por mais tempo', 'Quem valoriza facilidade na lavagem do dia a dia'],
    steps: ['Você chama no WhatsApp', 'Avaliamos a pintura e definimos o preparo', 'Combinamos produto, prazo e valor', 'Você retira o carro protegido'],
    faq: [
      { q: 'Quanto dura a vitrificação?', a: 'Depende do produto e dos cuidados depois da aplicação. Informamos no orçamento.' },
      { q: 'Preciso polir antes?', a: 'Normalmente a pintura é preparada antes. Avaliamos o seu carro e indicamos o caminho.' },
      { q: 'Posso lavar o carro normalmente depois?', a: 'Sim, com os cuidados que explicamos na entrega do carro.' },
    ],
    title: 'Vitrificação de pintura em Tremembé, SP',
    description: 'Vitrificação automotiva na V8 Estética Automotiva, em Tremembé, São Paulo. Proteção de longo prazo para a pintura. Orçamento pelo WhatsApp.',
    keywords: 'vitrificação de pintura SP, vitrificação automotiva zona norte',
    photo: 'roda-cayenne',
  },
  {
    slug: 'martelinho',
    name: 'Martelinho',
    short: 'Remoção de pequenos amassados sem repintar a lataria.',
    headline: 'Martelinho para amassados.',
    lead: 'Remoção de pequenos amassados em Tremembé, sem repintar quando a pintura está preservada.',
    what: [
      'O martelinho trabalha a lataria por dentro para desamassar sem massa e sem repintura, quando a pintura não foi danificada.',
      'Serve para amassados pequenos e médios, como marcas de granizo, batidas de porta e amassados de estacionamento.',
      'Cada caso é avaliado pessoalmente: nem todo amassado pode ser feito sem pintura.',
    ],
    forWho: ['Quem tem um amassado pequeno com a pintura intacta', 'Quem quer evitar repintura e manter a originalidade', 'Quem vai vender o carro e quer corrigir detalhes'],
    steps: ['Você envia uma foto do amassado pelo WhatsApp', 'Avaliamos pessoalmente', 'Combinamos o valor antes de começar', 'Você retira o carro sem o amassado'],
    faq: [
      { q: 'Todo amassado pode ser feito com martelinho?', a: 'Não. Depende do local, da profundidade e do estado da pintura. Avaliamos o carro antes.' },
      { q: 'Precisa pintar depois?', a: 'Quando a pintura está preservada, normalmente não. Confirmamos na avaliação.' },
      { q: 'Posso mandar foto antes?', a: 'Pode. Mande pelo WhatsApp para uma primeira orientação.' },
    ],
    title: 'Martelinho em Tremembé, SP',
    description: 'Martelinho na V8 Estética Automotiva, em Tremembé, São Paulo: remoção de pequenos amassados. Mande uma foto pelo WhatsApp.',
    keywords: 'martelinho zona norte SP, remoção de amassados Tremembé',
    photo: 'lateral-bmw',
  },
  {
    slug: 'higienizacao',
    name: 'Higienização',
    short: 'Limpeza profunda do interior: bancos, carpetes e teto.',
    headline: 'Higienização do interior.',
    lead: 'Higienização interna em Tremembé: limpeza profunda de bancos, carpetes e acabamentos.',
    what: [
      'O interior acumula poeira, odores e manchas do uso diário. A higienização faz a limpeza profunda que a aspiração comum não alcança.',
      'O serviço cuida de bancos, carpetes, forros e plásticos, conforme o material de cada carro.',
      'Combina bem com a lavagem completa para entregar o carro limpo por dentro e por fora.',
    ],
    forWho: ['Quem tem crianças ou animais no carro', 'Quem comprou um carro usado', 'Quem quer o interior renovado antes de vender'],
    steps: ['Você chama no WhatsApp', 'Avaliamos o interior', 'Combinamos o que será feito e o valor', 'Você retira o carro limpo por dentro'],
    faq: [
      { q: 'Remove manchas antigas?', a: 'Depende do tipo de mancha e do material. Avaliamos o carro e informamos antes de começar.' },
      { q: 'Quanto tempo leva?', a: 'Varia conforme o veículo e o estado do interior. Combinamos no orçamento.' },
      { q: 'Posso fazer junto com a lavagem?', a: 'Pode. Peça os dois serviços no mesmo orçamento.' },
    ],
    title: 'Higienização de carro em Tremembé, SP',
    description: 'Higienização interna de veículos na V8 Estética Automotiva, em Tremembé, São Paulo. Peça orçamento pelo WhatsApp.',
    keywords: 'higienização de carro SP, higienização automotiva zona norte',
    photo: 'frente-cayenne',
  },
];

export const faqHome = [
  { q: 'Preciso agendar?', a: 'Chame no WhatsApp antes de vir para confirmar a disponibilidade do dia.' },
  { q: 'Qual a diferença entre polimento, cristalização e vitrificação?', a: 'O polimento corrige a pintura. A cristalização e a vitrificação protegem a pintura depois de corrigida; a vitrificação é a proteção de longo prazo.' },
  { q: 'Quanto custa?', a: 'Depende do serviço, do tamanho e do estado do veículo. Informamos o valor no orçamento, antes de começar.' },
  { q: 'Quanto tempo leva?', a: 'Varia por serviço e por veículo. Combinamos o prazo no orçamento.' },
  { q: 'Quais as formas de pagamento?', a: 'Informamos as formas de pagamento no atendimento.' },
  { q: 'Quando vocês abrem?', a: 'De terça a sábado, das 8h às 17h, e aos domingos, das 8h ao meio-dia. Segunda-feira fechado.' },
];
