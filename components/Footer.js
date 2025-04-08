// components/Footer.js
import Image from "next/image";
import logo from "../public/logos/mdo-u-logo-transparente.png"
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12 py-8">
      <div className="container mx-auto px-6 text-center">
         <h1 className="mb-4 text-xl font-bold">MACHADINHO URGENTE</h1>
        <p className="text-sm text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Seu Portal de Notícias. Todos os direitos reservados.
        </p>

        {/* Links de Navegação (Texto) */}
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6"> {/* Adicionado mb-6 para espaço antes dos ícones */}
          <a href="/sobre" className="text-sm text-gray-400 hover:text-white transition duration-300">Sobre Nós</a>
          <a href="/contato" className="text-sm text-gray-400 hover:text-white transition duration-300">Contato</a>
          <a href="/privacidade" className="text-sm text-gray-400 hover:text-white transition duration-300">Política de Privacidade</a>
        </div>

        {/* Ícones de Redes Sociais (NOVO) */}
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <a
            href="#" // Substitua pelo link real do Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram" // Melhora acessibilidade
          >
            {/* Ícone SVG do Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.75.75h6.5a4 4 0 0 1 4 4v6.5a4 4 0 0 1-4 4h-6.5a4 4 0 0 1-4-4v-6.5a4 4 0 0 1 4-4ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3.25-7.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#" // Substitua pelo link real do Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            {/* Ícone SVG do Facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
              <path d="M8 0a8 8 0 0 0-8 8c0 3.042 1.826 5.67 4.375 6.938V9.375H4.375V7.5h2V6.055C6.375 4.09 7.66 3.125 9.4 3.125c.773 0 1.438.055 1.633.08V4.5H10.21c-.984 0-1.172.468-1.172 1.15v1.85h2.344l-.305 1.875H9.038v5.562A8.004 8.004 0 0 0 16 8a8 8 0 0 0-8-8Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#" // Substitua pelo link real do YouTube
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="YouTube"
          >
            {/* Ícone SVG do YouTube */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
               <path fillRule="evenodd" d="M13.75.75a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H2.25A2.25 2.25 0 0 1 0 12.75V3A2.25 2.25 0 0 1 2.25.75h11.5ZM6.25 5v6l4.5-3-4.5-3Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        {/* --- Fim Ícones --- */}

      </div>
    </footer>
  );
}