// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import noticiasData from '../../noticias.json'

function Home() {
    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/popular';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    useEffect(() => {
        fetch(`${urlBase}?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <main className="bg-black">
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl mt-3 mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-bold tracking-widest'>
                    FILMES EM ALTA
                </h1>
                <div className='w-full flex justify-center'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {filmes.length > 0 ? (
                            filmes.slice(0, 4).map(filme => (
                                <div className="card-filme flex flex-col items-center" key={filme.id}>
                                    <img className="self-center" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                    <h1 className="text-white text-center mt-2">{filme.title}</h1>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">Carregando filmes...</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-black">

            <h1 className='text-3xl mt-3 mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-bold tracking-widest'>
                NOTÍCIAS
            </h1>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">

                {noticiasData.slice(0, 5).map(noticia => (
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
function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Home;
