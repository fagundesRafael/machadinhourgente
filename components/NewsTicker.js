// components/NewsTicker.js
import Link from 'next/link';

// Dados de exemplo (mantidos)
const sampleNews = [
  { id: '1', title: 'Governo anuncia novo pacote econômico...' },
  // ... outros items
  { id: '8', title: 'Abertas inscrições para concurso público...' },
].slice(0, 8);

export default function NewsTicker() {
  const doubledNews = [...sampleNews, ...sampleNews];

  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden whitespace-nowrap relative group border-b border-gray-200"> {/* Adicionada borda */}
      <div className="inline-block animate-scroll-horizontal group-hover:pause-animation">
        {doubledNews.map((newsItem, index) => (
          <span key={`${newsItem.id}-${index}`} className="mx-4 inline-block text-sm">
            {/* Hover do link em azul (blue-500) */}
            <Link
              href={`/noticias/${newsItem.id}`}
              className="hover:underline transition duration-300"
            >
              {newsItem.title}
            </Link>
            {/* Bullet cinza */}
            {index < doubledNews.length - 1 && <span className="ml-4 text-gray-400">&bull;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}