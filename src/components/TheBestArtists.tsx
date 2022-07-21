import { Artists } from "../data/Artists";
import arrowOrange from '../assets/arrow-orange.svg';

export function TheBestArtists() {
  return (
    <div className="bg-bodyBackground md:px-16 py-36">
      <p className="font-bold text-5xl text-center">
        <span className="text-white">Melhores</span>
        <span className="text-red-500"> artistas</span>
      </p>
      <div className="flex flex-wrap justify-center gap-20 pt-36 pb-12">
        { Artists.map((artist) => (
          <div key={artist.id} className={`flex ${artist.id === 2 ? 'bg-colorLogo' : 'bg-cardColor'} justify-around items-center w-[350px] p-4 py-6 gap-5`}>
            <div className="w-1/4">
              <img src={artist.image} alt="" />
            </div>
            <div className="w-2/4">
              <p className="font-medium text-xl text-white">{artist.name}</p>
              <p className={`font-medium text-xl ${artist.id === 2 ? 'text-white' : 'text-colorLogo'}`}>{`${artist.photographs} fotografias`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-ful items-center gap-5">
        <p className="text-xl font-normal text-white">Veja todos os artistas</p>
        <img src={arrowOrange} alt="" />
      </div>
    </div>
  );
}