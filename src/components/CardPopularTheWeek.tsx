import arrowWhite from '../assets/arrow-white.svg';

interface CardPopularTheWeekProps {
  title: string;
  name: string;
  value: string;
  image: string;
}


export function CardPopularTheWeek({ title, name, value, image}: CardPopularTheWeekProps) {
  return (
    <div className="flex flex-col gap-5 w-[376px] pr-2">
      <p className="flex justify-between w-full text-white">
        <span className="font-medium text-3xl">
          {title}
        </span>
        <span>
          <img src={arrowWhite} alt="" />
        </span>
      </p>
      <p className="flex justify-between w-full">
        <span className="text-subtitleColor font-semibold text-xl">
          {name}
        </span>
        <span className="text-red-500 font-semibold text-xl">
          {`${value} RKT`}
        </span>
      </p>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
