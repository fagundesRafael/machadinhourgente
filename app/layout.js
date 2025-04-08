// app/layout.js
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// Corrigido o caminho relativo para os componentes
import Navbar from "@/components/Navbar"; // Usando alias @/ é mais comum
import Footer from '@/components/Footer'; // Usando alias @/ é mais comum
// Ou use o caminho relativo se o alias não estiver configurado:
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
import './globals.css';

// Metadados atualizados para um site de notícias
export const metadata = {
  title: 'Seu Portal de Notícias - Últimas Notícias',
  description: 'Fique atualizado com as últimas notícias sobre política, esportes, tecnologia e mais.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`font-sans flex flex-col min-h-screen bg-gray-50`}
      >
        <Navbar />
        {/* Aplicar margem menor por padrão (ex: mx-4) e mx-32 apenas em telas grandes (lg:) */}
        <main className="mx-4 lg:mx-32 flex-grow"> {/* <-- LINHA MODIFICADA */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}