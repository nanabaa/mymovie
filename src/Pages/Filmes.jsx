import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

useEffect( () => {
    fetch(`${urlBase}popular?${apiKey}`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.log(erro))
},[])

    return ( 
        <>
        <main className="bg-black">


        <div className='flex flex-col items-center'>

            <h1 className='text-3xl mt-3 mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-bold tracking-widest'>
                FILMES
            </h1>

            <div className='w-full flex justify-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    filmes.map(filme => (
                        <div className="card-filme flex flex-col items-center" key={filme.id}>
                            <img className="self-center" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                            <h1 className="text-white text-center mt-2">{filme.title}</h1>
                            <Link to={`${filme.id}`} className="text-purple-800 mt-1">Saber Mais</Link>
                        </div>
                    ))
                }
                </div>
            </div>

        </div>



    </main>
</>

     );
}
export default Filmes;