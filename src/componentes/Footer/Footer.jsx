// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer() {
    return ( 
        <footer className="bg-black text-white p-6 ">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">
                    MYMOVIE
                </h1>
                <p className="text-sm mt-2">
                    Bem-vindo ao MYMOVIE, seu aplicativo favorito para descobrir e assistir filmes incríveis.
                </p>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
                <h1 className="cursor-pointer hover:underline">
                    TERMOS DE PRIVACIDADE
                </h1>
                <h1 className="cursor-pointer hover:underline">
                    TERMOS DE USO
                </h1>
            </div>
            <div className="text-center text-xs">
                <p>
                    &copy; 2024 Ana. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
