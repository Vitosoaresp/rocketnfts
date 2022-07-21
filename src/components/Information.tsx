import banner from '../assets/banner.png';

export function Information() {
  return (
    <div className="md:pl-20 bg-bodyBackground border-b w-full flex border-subtitleColor flex-wrap">
      <div className="md:w-1/5 w-full text-center md:border-r md:border-b-0 border-b border-subtitleColor h-full py-32">
        <div className="flex flex-col justify-center gap-6 md:ml-16">
          <p className="flex flex-col font-semibold">
            <span className="text-5xl text-white ">10K+</span>
            <span className="text-subtitleColor text-xl">Artes</span>
          </p>
          <p className="flex flex-col font-semibold">
            <span className="text-5xl text-white">200+</span>
            <span className="text-subtitleColor text-xl">Vendas</span>
          </p>
          <p className="flex flex-col font-semibold">
            <span className="text-5xl text-white">20+</span>
            <span className="text-subtitleColor text-xl">Artitas</span>
          </p>
        </div>
      </div>

      <div className="md:w-4/5 w-full flex flex-col justify-between">
        <div className="flex md:gap-32 gap-10 w-full px-10 pt-16 flex-wrap md:flex-nowrap">
          <div className="flex flex-col font-normal text-lg text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="" className="mt-7">
              Lorem ipsum
            </a>
          </div>

          <div className="flex flex-col font-normal text-lg text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="" className="mt-7">
              Lorem ipsum
            </a>
          </div>
        </div>
        <div className="mt-16 w-full">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}
