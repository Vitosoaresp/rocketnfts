import photo1 from '../assets/galeria-1.png';
import photo2 from '../assets/galeria-2.png';
import photo3 from '../assets/galeria-3.png';
import photo4 from '../assets/galeria-4.png';
import photo5 from '../assets/galeria-5.png';
import photo6 from '../assets/galeria-6.png';
import photo7 from '../assets/galeria-7.png';
import photo8 from '../assets/galeria-8.png';

export function Galery() {
  return (
    <div className="flex flex-col mt-24 w-full pb-10">
      <div className="flex gap-2 w-full justify-center flex-wrap md:flex-nowrap">
        <img src={photo1} alt="foto de uma astronauta" />
        <img src={photo2} alt="foto de uma astronauta" />
        <img src={photo3} alt="foto de uma astronauta" />
        <img src={photo4} alt="foto de uma astronauta" />
      </div>
      <div className="flex gap-2 w-full justify-center flex-wrap md:flex-nowrap">
        <img src={photo5} alt="foto de uma astronauta" />
        <img src={photo6} alt="foto de uma astronauta" />
        <img src={photo7} alt="foto de uma astronauta" />
        <img src={photo8} alt="foto de uma astronauta" />
      </div>
    </div>
  );
}