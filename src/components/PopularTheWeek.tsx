import { CardPopularTheWeek } from './CardPopularTheWeek';
import astronauta1 from '../assets/astronauta-1.png';
import astronauta2 from '../assets/astronauta-2.png';
import astronauta3 from '../assets/astronauta-3.png';
import astronauta4 from '../assets/astronauta-4.png';

export function PopularTheWeek() {
  return (
    <section className="md:px-20 bg-bodyBackground w-full">
      <p className=" font-bold text-5xl pt-36 md:text-start text-center">
        <span className="text-red-500">Populares</span>
        <span className="text-white"> da semana</span>
      </p>
      <div className="mt-36 flex md:justify-between justify-center md:gap-20 gap-5 w-full flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-20">
          <CardPopularTheWeek
            title="Astronauta 1"
            name="Mayk Brito"
            value="1.50"
            image={astronauta1}
          />

          <CardPopularTheWeek
            title="Astronauta 3"
            name="João Inácio (Biro)"
            value="3.75"
            image={astronauta3}
          />
        </div>

        <span className="border h-[700px] border-subtitleColor md:block hidden" />

        <div className="flex flex-col gap-20">
          <CardPopularTheWeek
            title="Astronauta 2"
            name="Jakeliny Gracielly"
            value="2.0"
            image={astronauta2}
          />
          <CardPopularTheWeek
            title="Astronauta 4"
            name="Tamires Santos"
            value="4.30"
            image={astronauta4}
          />
        </div>
      </div>
    </section>
  );
}
