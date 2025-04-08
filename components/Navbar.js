// components/Navbar.js
"use client"; 

import Link from "next/link";
import Image from "next/image";
import NewsTicker from "./NewsTicker";
import { usePathname } from 'next/navigation'; // 2. Importar usePathname

export default function Navbar() {
  const pathname = usePathname(); // 3. Obter o caminho atual

  // Define as classes base e de transição uma vez
  const baseLinkClasses = "px-3 py-1.5 rounded-md transition-colors duration-300 font-medium text-sm"; // Ajustado padding e adicionado text-sm

  // Define as classes para o estado ativo
  const activeClasses = "bg-red-500 text-white";

  // Define as classes para o estado inativo + hover
  const inactiveHoverClasses = "text-gray-700 hover:bg-red-500 hover:text-white";

  return (
    <>
      <NewsTicker />
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" aria-label="Página Inicial MDO Urgente">
            <Image
              src="/logos/mdo-urgente-semi-transparente-logo.png"
              alt="Logo Machadinho Urgente"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Links de Navegação com estilo condicional */}
          <div className="hidden md:flex space-x-1 items-center"> {/* Diminuído space-x para acomodar padding */}

            <Link href="/" className={`${baseLinkClasses} ${pathname === '/' ? activeClasses : inactiveHoverClasses}`}>
              Início
            </Link>
            <Link href="/policial" className={`${baseLinkClasses} ${pathname === '/policial' ? activeClasses : inactiveHoverClasses}`}>
              Policial
            </Link>
            <Link href="/politica" className={`${baseLinkClasses} ${pathname === '/politica' ? activeClasses : inactiveHoverClasses}`}>
              Política
            </Link>
            <Link href="/eventos" className={`${baseLinkClasses} ${pathname === '/eventos' ? activeClasses : inactiveHoverClasses}`}>
              Eventos
            </Link>
            <Link href="/esportes" className={`${baseLinkClasses} ${pathname === '/esportes' ? activeClasses : inactiveHoverClasses}`}>
              Esportes
            </Link>
            <Link href="/tecnologia" className={`${baseLinkClasses} ${pathname === '/tecnologia' ? activeClasses : inactiveHoverClasses}`}>
              Tecnologia
            </Link>

          </div>

          {/* Botão Hamburger para mobile */}
          <div className="md:hidden">
                <button className="text-gray-600 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
      </nav>
    </>
  );
}