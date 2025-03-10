import { useState } from "react";
import logo from "../../assets/nike.png";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full h-full z-0">
        <header className="px-10 flex justify-between items-center text-black  md: bg-white drop-shadow-md">
          <a href="#">
            <img src={logo} alt="Logo Nike" className="w-20 hover:scale-105 transition-all"/>
          </a>

          <ul className="hidden 2xl:flex items-center gap-12 font-semibold text-base">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Seleção Brasileira</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Editorial De Moda</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Lançamentos</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Feminino</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Masculino</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Infantil</li>
          </ul>

          <div className="relative flex items-center justify-center gap-3">
            <i class='bx bx-search absolute left-3 text-2xl text-gray-500 hidden  sm:block'></i>
            <input type="text" placeholder="Buscar..." className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 hidden sm:block"/>
            <a href="#"><i class='bx bx-shopping-bag text-3xl'></i></a>

            
            <i class='bx bx-menu 2xl:hidden block text-4xl cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute 2xl:hidden top-14 w-auto bg-white flex flex-col items-center text-center gap-4 p-4  font-semibold text-base rounded-lg shadow-lg transform transition-transform sm:w-auto sm:text-xs sm:left-2/4 ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>



              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Seleção Brasileira</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Editorial De Moda</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Lançamentos</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Feminino</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Masculino</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Infantil</li>
            </div>

          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
