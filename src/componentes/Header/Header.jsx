import NavBar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className=" bg-white p-3 ">
          
            <div className="flex flex-row items-center justify-around">
                
                <NavBar/>
           
            </div>
        </header>
     );
}
export default Header;