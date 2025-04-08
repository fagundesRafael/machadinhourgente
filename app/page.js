// app/page.js
import Image from 'next/image';

// --- Ícones SVG (mantidos) ---
const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 inline-block mr-1 relative" style={{ top: '-1px' }}> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.151a6.002 6.002 0 0 0-11.215 0c-.22.59.254 1.151.872 1.151h9.47Z" /> </svg> );
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 inline-block mr-1 relative" style={{ top: '-1px' }}> <path fillRule="evenodd" d="M4 1.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V3h1.75A1.75 1.75 0 0 1 15.5 4.75v8.5A1.75 1.75 0 0 1 13.75 15H2.25A1.75 1.75 0 0 1 .5 13.25v-8.5A1.75 1.75 0 0 1 2.25 3H4V1.75ZM4.75 4H11V2.5H4.75V4Zm-2 3.75v6.5h10.5v-6.5H2.75Z" clipRule="evenodd" /> </svg> );
// --- Fim Ícones SVG ---

export default function Home() {
  return (
    // Container geral com fundo branco herdado do body
    <div className="container mx-auto px-4 py-8">

      {/* --- Seção de Destaque Principal --- */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center border border-gray-100"> {/* Borda sutil no card */}
          <div className="md:w-1/2 w-full relative h-64 md:h-auto md:aspect-video rounded overflow-hidden">
            <Image src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Notícia principal" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 50vw"/>
             {/* Tag Destaque Azul (blue-500) */}
            <span className="absolute top-0 left-0 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-br-lg z-10">Destaque</span>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold text-red-700 mb-3">Título da Notícia Principal Que Chama Atenção</h2>
            <p className="text-gray-700 mb-4">Um resumo envolvente...</p>
            <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center"><UserIcon />Por <strong className="ml-1 font-medium text-gray-700">Admin Principal</strong></span>
              <span className="flex items-center"><CalendarIcon /><span className="ml-1">07/04/2025</span></span>
            </div>
             {/* Link Leia mais Azul (blue-500) */}
            <a href="/noticia/slug-da-noticia" className="text-blue-500 hover:text-blue-700 font-medium transition duration-300">Leia mais &rarr;</a>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 mb-12 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 min-h-[250px] p-4 text-center">
          <span>
            Espaço Publicitário Principal<br/>
            (Ex: Banner 728x90, 970x90, 970x250, etc.)
          </span>
        </div>

        <section className="mb-12">
         <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">
           Últimas Notícias
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
             <div className="relative w-full h-48">
               <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tela de computador com código" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Tecnologia</span>
             </div>
             <div className="p-4 flex flex-col flex-grow">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Título Curto da Notícia 1</h3>
               <p className="text-sm text-gray-700 mb-3 flex-grow">Pequeno resumo...</p>
               <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                 <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Redação Tech</span></span>
                 <span className="flex items-center"><CalendarIcon />07/04/2025</span>
               </div>
               <a href="/noticia/slug-noticia-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
             </div>
           </div>
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
             <div className="relative w-full h-48">
               <Image src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bola de futebol" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Esportes</span>
             </div>
             <div className="p-4 flex flex-col flex-grow">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Título Interessante da Notícia 2</h3>
               <p className="text-sm text-gray-700 mb-3 flex-grow">Outro breve resumo...</p>
               <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                  <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">João Silva</span></span>
                  <span className="flex items-center"><CalendarIcon />06/04/2025</span>
               </div>
                <a href="/noticia/slug-noticia-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
              </div>
            </div>
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
              <div className="relative w-full h-48">
                <Image src="https://images.pexels.com/photos/8368447/pexels-photo-8368447.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Prédio governamental" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Política</span>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Notícia 3: Um Título Chamativo</h3>
                <p className="text-sm text-gray-700 mb-3 flex-grow">Descrição sucinta...</p>
                <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                  <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Ana Souza</span></span>
                  <span className="flex items-center"><CalendarIcon />05/04/2025</span>
                </div>
                <a href="/noticia/slug-noticia-3" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
              </div>
            </div>
         </div>
       </section>

       <section className="mb-12">
         <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">
           Policial
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
           <div className="lg:col-span-2 flex flex-col gap-8">
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row overflow-hidden border border-gray-100">
               <div className="sm:w-1/3 w-full relative h-48 sm:h-auto flex-shrink-0">
                 <Image
                   src="https://images.pexels.com/photos/7167106/pexels-photo-7167106.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="Cena policial noturna"
                   fill
                   style={{ objectFit: 'cover' }}
                   sizes="(max-width: 640px) 100vw, 33vw"
                   className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                 />
                 <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Policial</span>
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Operação Desmantela Quadrilha na Zona Leste</h3>
                 <p className="text-sm text-gray-700 mb-3 flex-grow">Detalhes da ação policial que resultou em prisões e apreensões significativas na madrugada desta segunda-feira...</p>
                 <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                   <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Plantão Policial</span></span>
                   <span className="flex items-center"><CalendarIcon />07/04/2025</span>
                 </div>
                 <a href="/noticia/slug-policial-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300 self-start">
                   Leia mais &rarr;
                 </a>
               </div>
             </div>
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row overflow-hidden border border-gray-100">
               <div className="sm:w-1/3 w-full relative h-48 sm:h-auto flex-shrink-0">
                 <Image
                   src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="Investigação em andamento"
                   fill
                   style={{ objectFit: 'cover' }}
                   sizes="(max-width: 640px) 100vw, 33vw"
                    className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                 />
                 <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Policial</span>
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Investigação Aponta Novas Pistas em Caso Antigo</h3>
                 <p className="text-sm text-gray-700 mb-3 flex-grow">Polícia reabre caso arquivado há anos com base em novas evidências encontradas recentemente...</p>
                 <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                   <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Reportagem</span></span>
                   <span className="flex items-center"><CalendarIcon />06/04/2025</span>
                 </div>
                 <a href="/noticia/slug-policial-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300 self-start">
                   Leia mais &rarr;
                 </a>
               </div>
             </div>
           </div>
           <div className="lg:col-span-1 bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 min-h-[200px] lg:min-h-full p-4">
             <span>Espaço Publicitário</span>
           </div>
         </div>
       </section>

       <section className="mb-12">
         <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">
           Política
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
           <div className="lg:col-span-2 flex flex-col gap-8">
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row overflow-hidden border border-gray-100">
               <div className="sm:w-1/3 w-full relative h-48 sm:h-auto flex-shrink-0">
                 <Image
                   src="https://images.pexels.com/photos/8368447/pexels-photo-8368447.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="Cena Política noturna"
                   fill
                   style={{ objectFit: 'cover' }}
                   sizes="(max-width: 640px) 100vw, 33vw"
                   className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                 />
                 <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Política</span>
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Novas coligações surgem</h3>
                 <p className="text-sm text-gray-700 mb-3 flex-grow">Reforça ainda mais a possibilidade do Senado aprovar...</p>
                 <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                   <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Plantão Política</span></span>
                   <span className="flex items-center"><CalendarIcon />07/04/2025</span>
                 </div>
                 <a href="/noticia/slug-Política-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300 self-start">
                   Leia mais &rarr;
                 </a>
               </div>
             </div>
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row overflow-hidden border border-gray-100">
               <div className="sm:w-1/3 w-full relative h-48 sm:h-auto flex-shrink-0">
                 <Image
                   src="https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=600"
                   alt="Investigação em andamento"
                   fill
                   style={{ objectFit: 'cover' }}
                   sizes="(max-width: 640px) 100vw, 33vw"
                    className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                 />
                 <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Política</span>
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Câmara municipal intinerante</h3>
                 <p className="text-sm text-gray-700 mb-3 flex-grow">PCom o objetivo de taxar mais a população, esses fi de puta querem...</p>
                 <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                   <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Reportagem</span></span>
                   <span className="flex items-center"><CalendarIcon />06/04/2025</span>
                 </div>
                 <a href="/noticia/slug-política-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300 self-start">
                   Leia mais &rarr;
                 </a>
               </div>
             </div>
           </div>
           <div className="lg:col-span-1 bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 min-h-[200px] lg:min-h-full p-4">
             <span>Espaço Publicitário</span>
           </div>
         </div>
       </section>

       <section className="mb-12">
         <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">
           Eventos
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
             <div className="relative w-full h-48">
                <Image src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Show com luzes coloridas" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Eventos</span>
             </div>
             <div className="p-4 flex flex-col flex-grow">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Festival de Música Agita o Fim de Semana</h3>
               <p className="text-sm text-gray-700 mb-3 flex-grow">Confira a programação completa e os destaques...</p>
               <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                 <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Agenda Cultural</span></span>
                 <span className="flex items-center"><CalendarIcon />07/04/2025</span>
               </div>
               <a href="/noticia/slug-eventos-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
             </div>
           </div>
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
             <div className="relative w-full h-48">
                <Image src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Feira de artesanato local" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Eventos</span>
             </div>
             <div className="p-4 flex flex-col flex-grow">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Feira de Artesanato Valoriza Produção Local</h3>
               <p className="text-sm text-gray-700 mb-3 flex-grow">Evento reúne artesãos da região no centro da cidade...</p>
               <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                 <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Prefeitura Local</span></span>
                 <span className="flex items-center"><CalendarIcon />06/04/2025</span>
               </div>
               <a href="/noticia/slug-eventos-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
             </div>
           </div>
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
             <div className="relative w-full h-48">
                <Image src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Palestra em auditório" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Eventos</span>
             </div>
             <div className="p-4 flex flex-col flex-grow">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Ciclo de Palestras sobre Empreendedorismo</h3>
               <p className="text-sm text-gray-700 mb-3 flex-grow">Inscrições abertas para evento gratuito...</p>
               <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                 <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Organização</span></span>
                 <span className="flex items-center"><CalendarIcon />05/04/2025</span>
               </div>
               <a href="/noticia/slug-eventos-3" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
             </div>
           </div>
         </div>
       </section>

       <div className="bg-gray-100 mb-12 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 min-h-[250px] p-4 text-center">
         <span>
           Espaço Publicitário Secundário<br/>
           (Ex: Banner 728x90, 970x90, etc.)
         </span>
       </div>

       <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6"> Esportes </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                <div className="relative w-full h-48">
                  <Image src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bola de futebol" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Esportes</span>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Time da Capital Vence Clássico Regional</h3>
                    <p className="text-sm text-gray-700 mb-3 flex-grow">Com vitória emocionante, equipe assume a liderança...</p>
                  <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Redação Esportiva</span></span>
                     <span className="flex items-center"><CalendarIcon />07/04/2025</span>
                   </div>
                  <a href="/noticia/slug-esportes-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                <div className="relative w-full h-48">
                   <Image src="https://images.pexels.com/photos/163444/sport-competition-studio-ball-163444.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jogador de basquete" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                   <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Esportes</span>
                 </div>
                 <div className="p-4 flex flex-col flex-grow">
                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipe de Basquete Garante Vaga na Final</h3>
                   <p className="text-sm text-gray-700 mb-3 flex-grow">Após jogo disputado, time local avança na competição...</p>
                   <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Reportagem Esportiva</span></span>
                     <span className="flex items-center"><CalendarIcon />06/04/2025</span>
                   </div>
                   <a href="/noticia/slug-esportes-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                 </div>
               </div>
               <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                 <div className="relative w-full h-48">
                   <Image src="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Treino de futebol" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                   <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Esportes</span>
                 </div>
                 <div className="p-4 flex flex-col flex-grow">
                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparação Intensa para Campeonato Estadual</h3>
                   <p className="text-sm text-gray-700 mb-3 flex-grow">Foco total nos treinos para buscar o título...</p>
                   <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Assessoria Clube</span></span>
                     <span className="flex items-center"><CalendarIcon />05/04/2025</span>
                   </div>
                   <a href="/noticia/slug-esportes-3" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                 </div>
               </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6"> Tecnologia </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                <div className="relative w-full h-48">
                  <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Código" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Tecnologia</span>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">IA Generativa Transforma Criação de Conteúdo</h3>
                    <p className="text-sm text-gray-700 mb-3 flex-grow">Novas ferramentas prometem agilizar processos...</p>
                  <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Blog de Tech</span></span>
                     <span className="flex items-center"><CalendarIcon />07/04/2025</span>
                   </div>
                  <a href="/noticia/slug-tecnologia-1" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                 <div className="relative w-full h-48">
                   <Image src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pessoa usando laptop" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                   <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Tecnologia</span>
                 </div>
                 <div className="p-4 flex flex-col flex-grow">
                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Update de Segurança Crítico Lançado</h3>
                   <p className="text-sm text-gray-700 mb-3 flex-grow">Recomendada a instalação imediata para evitar riscos...</p>
                   <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Analista Sec</span></span>
                     <span className="flex items-center"><CalendarIcon />06/04/2025</span>
                   </div>
                   <a href="/noticia/slug-tecnologia-2" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                 </div>
               </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden border border-gray-100">
                 <div className="relative w-full h-48">
                   <Image src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Reunião de equipe" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                   <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-br-lg z-10">Tecnologia</span>
                 </div>
                 <div className="p-4 flex flex-col flex-grow">
                   <h3 className="text-lg font-semibold text-gray-900 mb-2">5 Dicas para Otimizar seu Home Office</h3>
                   <p className="text-sm text-gray-700 mb-3 flex-grow">Melhore sua produtividade trabalhando de casa...</p>
                   <div className="text-xs text-gray-500 mt-2 mb-3 flex flex-wrap gap-x-3 gap-y-1">
                     <span className="flex items-center"><UserIcon /><span className="font-medium text-gray-700">Especialista Prod.</span></span>
                     <span className="flex items-center"><CalendarIcon />05/04/2025</span>
                   </div>
                   <a href="/noticia/slug-tecnologia-3" className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto transition duration-300">Leia mais &rarr;</a>
                 </div>
               </div>
            </div>
        </section>

    </div>
  );
}