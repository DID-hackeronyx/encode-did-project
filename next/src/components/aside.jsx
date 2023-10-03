import Image from "next/image";
import img1 from "@/../../public/images/pet-icon.png";
import Link from "next/link";
import { Nav } from "./nav/nav";
const Aside = () => {
  return (
    <aside className="h-full m-auto sm:w-full">
      <div className="w-full flex justify-between">
        <Link href="/">
          <div className="inline-flex  items-center gap-3 pt-2">
            <Image src={img1} width={30} height={30} alt="home page img" />
            <h1 className="text-2xl font-semibold text-gray-800">Pets DID</h1>
          </div>
        </Link>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-600 cursor-pointer">
          Login
        </div>
      </div>

      <div className="mt-[80px] mb-[60px] ">
        <h2 className="font-semibold text-[44px] leading-[58px]">Hello!</h2>
        <div className="pt-5">
          <h2 className="text-gray-dark text-[20px]">
            Manage your pet's information through DID
          </h2>
          <h2 className="text-gray-dark text-[20px]">
            and find your pet through verified
          </h2>
          <h2 className="text-gray-dark text-[20px]">
            and transparent records.
          </h2>
        </div>
      </div>

      <Nav text="Lets start using Pets DID" />
    </aside>
  );
};

export default Aside;
