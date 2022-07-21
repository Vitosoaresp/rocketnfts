import { X } from 'phosphor-react';
import logo from '../assets/logo.svg';
import logoMetaMask from '../assets/logo_MetaMask.svg';

interface ToggleProps {
  toggleMenu: (bool: boolean) => void;
}

export function Menu({ toggleMenu }: ToggleProps ) {
  return (
    <div className="fixed top-0 bg-cardColor w-screen flex flex-col px-10 py-5">
      <div className="flex w-full justify-between">
        <img src={logo} alt="Logo da Rocket NFTs" className="w-[150px]" />
        <button onClick={ () => toggleMenu(false)}>
          <X size={40} color="white" />
        </button>
      </div>
      <div className="flex flex-col w-full items-center gap-5 py-5">
        <a href="" className="text-white font-normal text-lg">
          Comprar NTF
        </a>
        <a href="" className="text-white font-normal text-lg">
          Sobre
        </a>
        <a href="" className="text-white font-normal text-lg">
          FAQ
        </a>
        <button type="button" className="bg-white w-40 h-12 flex items-center justify-center gap-2 px-4">
          <img src={logoMetaMask} alt="logo da meta mask" width="30px" />
          <span className="text-base font-bold text-black">Conectar carteira</span>
        </button>
      </div>
    </div>
  );
}
