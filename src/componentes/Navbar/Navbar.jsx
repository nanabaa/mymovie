import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="">
            <div className="flex flex-col justify-between items-center">
                <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 font-black ">
                    MYMOVIE
                </h1>
                <ul className="flex gap-4 text-black font-bold mt-1">
                    <li><Link to="/" className="text-xl hover:text-pink-400">HOME</Link></li>
                    <li><Link to="/filmes" className="text-xl hover:text-pink-400 ">FILMES</Link></li>
                    <li><Link to="/news" className="text-xl hover:text-pink-400">NOTÍCIAS</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
