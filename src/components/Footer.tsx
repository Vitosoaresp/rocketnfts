import logo from '../assets/logo.svg';
import arrowBlack from '../assets/arrow-black.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitter.svg';
import email from '../assets/email.svg';

export function Footer() {
  return (
    <footer className="flex flex-col bg-cardColor md:px-20 px-5">
      <div className="flex w-full justify-between pt-20 pb-14 border-b border-subtitleColor">
        <img
          src={logo}
          alt="Logo da Rocket NFTs"
          className="md:max-w-full max-w-[250px]"
        />
        <button
          className="w-20 h-20 flex items-center justify-center bg-colorLogo"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={arrowBlack} alt="" />
        </button>
      </div>

      <div className="flex items-center border-y border-subtitleColor flex-wrap md:flex-nowrap">
        <div className="flex flex-col md:w-1/3 w-full py-16">
          <p className="font-medium text-3xl flex flex-col md:text-start text-center">
            <span className="text-white">Fique por dentro de</span>
            <span className="text-colorLogo">todas as novidades</span>
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <input
              type="email"
              name=""
              placeholder="nft@test.com.br"
              className="py-4 bg-bodyBackground text-subtitleColor placeholder:pl-4 placeholder:font-normal placeholder:text-xl"
            />
            <button className="py-3 px-5 font-bold text-xl bg-white">
              Enviar
            </button>
          </div>
        </div>

        <div className="flex md:py-16 md:px-28 md:border-l md:border-t-0 border-t p-5 border-subtitleColor md:gap-32 gap-5 w-full md:w-2/3 justify-center">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl text-white">Empresa</p>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Sobre
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Seviços
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Time
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Carreira
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl text-white">Mapa</p>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Galeria
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Populares
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Vendas
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Contato
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl text-white">Links</p>
            <a href="" className="font-normal text-xl text-subtitleColor">
              FAQs
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Termos
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Política
            </a>
            <a href="" className="font-normal text-xl text-subtitleColor">
              Ajuda
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:p-10 p-4">
        <p className="text-subtitleColor font-normal md:text-xl text-xs">
          feito por
          <a href="https://github.com/Vitosoaresp" target="_blank">
            {' '}
            Vitor Soares{' '}
          </a>
          com React, TypeScript, Tailwind CSS e ♥
        </p>
        <div className="flex justify-around md:gap-10 gap-2">
          <a href="">
            <img src={instagram} alt="" />
          </a>
          <a href="">
            <img src={youtube} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={email} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
