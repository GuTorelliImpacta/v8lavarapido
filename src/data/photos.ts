import bmwFachada from '../assets/photos/bmw-fachada.jpg';
import filaCarros from '../assets/photos/fila-carros.jpg';
import cayenne from '../assets/photos/cayenne.jpg';
import rodaBmw from '../assets/photos/detalhe-roda-bmw.jpg';
import farolBmw from '../assets/photos/detalhe-farol-bmw.jpg';
import capoAzul from '../assets/photos/detalhe-capo-azul.jpg';
import lateralBmw from '../assets/photos/detalhe-lateral-bmw.jpg';
import frenteCayenne from '../assets/photos/detalhe-frente-cayenne.jpg';
import rodaCayenne from '../assets/photos/detalhe-roda-cayenne.jpg';

export const photos = {
  'bmw-fachada': { src: bmwFachada, alt: 'BMW branca de portas abertas diante da fachada da V8 Lava Rápido' },
  'fila-carros': { src: filaCarros, alt: 'Carros alinhados em frente ao muro da V8 com os serviços pintados' },
  cayenne: { src: cayenne, alt: 'Porsche Cayenne cinza no pátio da V8, com a pintura brilhando' },
  'roda-bmw': { src: rodaBmw, alt: 'Detalhe da roda e da lateral de uma BMW branca' },
  'farol-bmw': { src: farolBmw, alt: 'Detalhe do farol e da pintura branca de uma BMW' },
  'roda-cayenne': { src: rodaCayenne, alt: 'Detalhe da roda e da pinça de freio de um Porsche Cayenne' },
  'capo-azul': { src: capoAzul, alt: 'Detalhe do capô de uma BMW azul com a pintura refletindo a luz' },
  'lateral-bmw': { src: lateralBmw, alt: 'Detalhe da lateral branca de uma BMW com a porta aberta' },
  'frente-cayenne': { src: frenteCayenne, alt: 'Detalhe da frente e do farol de um Porsche Cayenne cinza' },
} as const;
export type PhotoKey = keyof typeof photos;
