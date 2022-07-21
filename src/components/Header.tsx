import { List } from 'phosphor-react';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import logoMetaMask from '../assets/logo_MetaMask.svg';
import { Menu } from './Menu';

export function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="flex w-screen md:w-full md:pt-14 py-6 md:px-20 px-10 justify-between items-center md:bg-transparent bg-cardColor">
        <div className="md:w-[265px] w-[150px]">
          <img src={logo} alt="Logo da Rocket NFTs" className="max-w-full" />
        </div>
        <nav className="md:flex justify-around w-1/4 hidden">
          <a href="" className="text-white font-normal text-lg">Comprar NTF</a>
          <a href="" className="text-white font-normal text-lg">Sobre</a>
          <a href="" className="text-white font-normal text-lg">FAQ</a>
        </nav>
        <button className="bg-white md:w-56 w-40 h-12 md:flex items-center justify-center gap-4 hidden">
          <img src={logoMetaMask} alt="logo da meta mask" width="30px" />
          <span className="text-base font-bold">Conectar carteira</span>
        </button>
        <button className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
          <List size={32} color="#f9f0f0" className="" />
        </button>
      </header>
      { toggleMenu && <Menu toggleMenu={setToggleMenu} />}
    </>
  );
}