import { Header } from './Header';
import { Galery } from './Galery';
import groupAvatars from '../assets/group-avarts.png';
import badge from '../assets/badge.svg';

export function About() {
  return (
    <div className="md:px-20 bg-bgImage w-full">
      <Header />
      <section className="flex flex-col md:px-20 mt-20">
        <div className="flex w-full items-center justify-around gap-10 flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-14 md:w-[30%] w-11/12">
            <p className="text-white text-lg font-normal">
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT).
              <br />
              Compre, venda e descubra ativos digitais exclusivos para você.
            </p>
            <div className="flex items-end">
              <img src={groupAvatars} alt="" />
              <div className="text-white flex flex-col justify-start font-bold text-lg">
                <span>+10</span>
                <span>Artistas selecionados</span>
              </div>
            </div>
          </div>

          <div className="md:w-[40%] w-[90%]">
            <p className="text-5xl text-white font-bold">
              Descubra a verdadeira arte digital e colecione diversas{' '}
              <span className="text-red-500 font-bold">NFTs</span>
            </p>
          </div>
          <div className="w-[200px]">
            <img src={badge} alt="" className="w-full" />
          </div>
        </div>

        <Galery />
      </section>
    </div>
  );
}