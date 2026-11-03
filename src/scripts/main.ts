// Entrada de elementos, estado "aberto agora" e seletor de serviço. Tudo degrada sem JS.
const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Entradas por seção (uma vez), escalonadas por --i
const targets = document.querySelectorAll<HTMLElement>('[data-r]');
// A faixa da hero abre assim que a página carrega (o observador não enxerga um alvo recortado a zero).
const slot = document.querySelector<HTMLElement>('.slot');
if (slot) requestAnimationFrame(() => requestAnimationFrame(() => slot.classList.add('in')));
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  targets.forEach((t) => io.observe(t));
  // segurança: nada fica escondido se algo falhar
  window.setTimeout(() => targets.forEach((t) => t.classList.add('in')), 4000);
} else {
  targets.forEach((t) => t.classList.add('in'));
}
root.classList.add('ready');

// Aberto agora, no fuso de São Paulo
type Slot = { open: number; close: number } | null;
const schedule: Record<number, Slot> = {
  0: { open: 480, close: 720 },
  1: null,
  2: { open: 480, close: 1020 },
  3: { open: 480, close: 1020 },
  4: { open: 480, close: 1020 },
  5: { open: 480, close: 1020 },
  6: { open: 480, close: 1020 },
};
const fmt = (m: number) => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return mm ? `${h}h${String(mm).padStart(2, '0')}` : `${h}h`;
};
const dows = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
function nowSP() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { dow: map[get('weekday')] ?? 0, min: (parseInt(get('hour')) % 24) * 60 + parseInt(get('minute')) };
}
function updateStatus() {
  const { dow, min } = nowSP();
  const today = schedule[dow];
  let open = false;
  let text = '';
  if (today && min >= today.open && min < today.close) {
    open = true;
    text = `Aberto agora · fecha às ${fmt(today.close)}`;
  } else if (today && min < today.open) {
    text = `Fechado · abre hoje às ${fmt(today.open)}`;
  } else {
    for (let i = 1; i <= 7; i++) {
      const d = (dow + i) % 7;
      const s = schedule[d];
      if (s) {
        text = `Fechado · abre ${i === 1 ? 'amanhã' : dows[d].toLowerCase()} às ${fmt(s.open)}`;
        break;
      }
    }
  }
  document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
    el.dataset.open = String(open);
    const label = el.querySelector('span');
    if (label) label.textContent = text;
  });
  document.querySelectorAll<HTMLElement>('[data-hours] tr[data-dows]').forEach((tr) => {
    tr.classList.toggle('today', (tr.dataset.dows ?? '').split(',').includes(String(dow)));
  });
}
updateStatus();
window.setInterval(updateStatus, 60_000);

// Seletor de serviço → mensagem pré-preenchida no WhatsApp
document.querySelectorAll<HTMLElement>('[data-picker]').forEach((box) => {
  const number = box.dataset.number ?? '';
  const target = document.querySelector<HTMLAnchorElement>(box.dataset.target ?? '');
  if (!target) return;
  const buttons = box.querySelectorAll<HTMLButtonElement>('button');
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const s = b.dataset.service ?? '';
      const text = `Olá! Vi o site da V8 Estética Automotiva e quero um orçamento de ${s}.`;
      target.href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      const label = target.querySelector('[data-label]');
      if (label) label.textContent = `Pedir orçamento de ${s.toLowerCase()}`;
    }),
  );
});

// Eventos de analytics: só disparam se existir consentimento (nenhum analytics é carregado por padrão).
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-ev]');
  if (!el) return;
  const w = window as unknown as { __v8consent?: boolean; dataLayer?: unknown[] };
  if (w.__v8consent && w.dataLayer) w.dataLayer.push({ event: el.dataset.ev });
});

// A barra de contato do celular aparece ao subir a página e some ao descer: nunca cobre o texto que se lê.
// No topo ela fica escondida (a hero já tem o botão) e, sem JavaScript, fica sempre visível.
const dock = document.querySelector<HTMLElement>('.dock');
if (dock) {
  dock.dataset.hidden = 'true';
  let last = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      const nearEnd = window.innerHeight + y >= document.documentElement.scrollHeight - 160;
      if (y < last - 6 && y > 400 && !nearEnd) dock.dataset.hidden = 'false';
      else if (y > last + 6 || y <= 400 || nearEnd) dock.dataset.hidden = 'true';
      last = y;
    },
    { passive: true },
  );
}
