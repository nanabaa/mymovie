/* eslint-disable no-unused-vars */
import React from 'react';
import noticiasData from '../../noticias.json'

function Noticias() {
    return (

        <main className='bg-black'>

        <div className="flex flex-col items-center bg-black">

            <h1 className='text-3xl mt-3 mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-bold tracking-widest'>
                NOTÍCIAS
            </h1>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">

                {noticiasData.slice(0, 20).map(noticia => (
                    <div key={noticia.id} className="p-4 bg-pink-800 shadow-md">
                        <h2 className="text-white text-lg font-bold mb-2">{noticia.titulo}</h2>
                        <p className="text-gray-400">{noticia.descricao}</p>
                        <p className="text-gray-400 text-sm mt-2">Publicado em: {formatarData(noticia.dataPublicacao)}</p>
                    </div>
                ))}

            </div>
        </div>
        </main>
    );
}

// Função auxiliar para formatar a data (opcional)
function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Noticias;
