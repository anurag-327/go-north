import { Fire } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
const Profile = () => {
  return (
    <section>
      <header className="flex items-center justify-between w-full my-4 text-3xl">
        <span>Ashish Khare</span>
        <span>Anurag Srivastav</span>
      </header>
      <div className="flex flex-col gap-4 md:flex-row">
        <Image
          className="rounded-xl"
          src="/ashish.png"
          width={493}
          height={520}
          alt="ashish"
        />
        <div className="rounded-xl flex justify-center items-center  w-full py-16 md:p-0 md:w-[236px] bg-[#1E1E1E]">
          <Fire size={40} weight="bold" color="#FFF9DE" />
        </div>
        <Image
          className="rounded-xl"
          src="/anurag-final.png"
          width={493}
          height={520}
          alt="ashish"
        />
      </div>
    </section>
  );
};

export default Profile;
