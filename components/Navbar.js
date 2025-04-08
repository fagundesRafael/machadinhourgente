// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import NewsTicker from "./NewsTicker";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Importar useState e useEffect

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  // Efeito para fechar o menu mobile se a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Classes reutilizáveis
  const baseLinkClasses = "px-3 py-1.5 rounded-md transition-colors duration-300 font-medium text-sm";
  const activeClasses = "bg-red-500 text-white";
  const inactiveHoverClasses = "text-gray-700 hover:bg-red-500 hover:text-white";

  // Classes para links no menu mobile
  const mobileLinkBaseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"; // Tamanho de fonte maior para mobile
  const mobileLinkActiveClasses = "bg-red-500 text-white"; // Fundo mais suave para ativo no mobile
  const mobileLinkInactiveHoverClasses = "text-gray-900 hover:bg-gray-100";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NewsTicker />
      {/* Adicionado position: relative para o posicionamento absoluto do menu mobile */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 relative">
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

          {/* Links de Navegação Desktop (md e acima) */}
          <div className="hidden md:flex space-x-1 items-center">
            <Link href="/" className={`${baseLinkClasses} ${pathname === '/' ? activeClasses : inactiveHoverClasses}`}>
              Início
            </Link>
            <Link href="/policial" className={`${baseLinkClasses} ${pathname.startsWith('/policial') ? activeClasses : inactiveHoverClasses}`}> {/* Usando startsWith */}
              Policial
            </Link>
            <Link href="/politica" className={`${baseLinkClasses} ${pathname.startsWith('/politica') ? activeClasses : inactiveHoverClasses}`}> {/* Usando startsWith */}
              Política
            </Link>
            <Link href="/eventos" className={`${baseLinkClasses} ${pathname.startsWith('/eventos') ? activeClasses : inactiveHoverClasses}`}> {/* Usando startsWith */}
              Eventos
            </Link>
            <Link href="/esportes" className={`${baseLinkClasses} ${pathname.startsWith('/esportes') ? activeClasses : inactiveHoverClasses}`}> {/* Usando startsWith */}
              Esportes
            </Link>
            <Link href="/tecnologia" className={`${baseLinkClasses} ${pathname.startsWith('/tecnologia') ? activeClasses : inactiveHoverClasses}`}> {/* Usando startsWith */}
              Tecnologia
            </Link>
          </div>

          {/* Botão Hamburger para mobile (abaixo de md) */}
          <div className="md:hidden">
                {/* Botão com onClick para alternar o estado e tamanho aumentado */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none p-1" // Adicionado padding para área de clique maior
                  aria-expanded={isMobileMenuOpen} // Para acessibilidade
                  aria-controls="mobile-menu" // Para acessibilidade
                >
                    {/* Ícone maior */}
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {/* Controlado por max-height para transição suave */}
        <div
          id="mobile-menu" // ID para aria-controls
          className={`
            absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden
            transition-max-height duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}
          `}
          style={{ maxHeight: isMobileMenuOpen ? '500px' : '0' }} // Alternativa mais explícita para max-h
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> {/* Padding e espaçamento interno */}
             <Link href="/" className={`${mobileLinkBaseClasses} ${pathname === '/' ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Início
            </Link>
            <Link href="/policial" className={`${mobileLinkBaseClasses} ${pathname.startsWith('/policial') ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Policial
            </Link>
            <Link href="/politica" className={`${mobileLinkBaseClasses} ${pathname.startsWith('/politica') ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Política
            </Link>
            <Link href="/eventos" className={`${mobileLinkBaseClasses} ${pathname.startsWith('/eventos') ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Eventos
            </Link>
            <Link href="/esportes" className={`${mobileLinkBaseClasses} ${pathname.startsWith('/esportes') ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Esportes
            </Link>
            <Link href="/tecnologia" className={`${mobileLinkBaseClasses} ${pathname.startsWith('/tecnologia') ? mobileLinkActiveClasses : mobileLinkInactiveHoverClasses}`}>
              Tecnologia
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}