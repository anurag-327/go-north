import { MapTrifold, ArrowUpRight} from "@phosphor-icons/react/dist/ssr";
import Tag from "./Tag";

const Header = () => {
  return (
    <header className="relative flex flex-col justify-between w-full md:flex-row ">
      <Tag name="New!" className="absolute left-0 text-2xl font-semibold -rotate-45 font-tag -top-2 md:-left-12" />
      <div className="flex flex-col mt-10 md:mt-0">
          <span className="text-5xl font-extrabold md:text-7xl">
            India <span className="text-5xl font-normal md:text-6xl ">based <span className="text-3xl font-extralight md:text-8xl"><ArrowUpRight className="inline-flex font-extralight" /></span></span>
          </span>
          <span className="text-5xl font-extrabold md:text-7xl">design agency</span>
        </div>
        <div className="flex flex-col gap-1 mt-6 md:gap-0 md:mt-0">
          <span className="flex flex-row items-center gap-8">
            <MapTrifold className="inline-block" size={50} />{" "}
            <span className="text-5xl font-extrabold md:text-6xl">go</span>
          </span>
          <span className="text-5xl font-extrabold md:text-6xl">North</span>
        </div>
        <Tag name="*" className="absolute -rotate-45 font-extralight text-8xl font-tag top-4 right-4 md:-right-12" />
    </header>
  );
};

export default Header;


