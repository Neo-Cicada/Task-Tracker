import Image from "next/image";
import MetaVerse from "../../../public/metaverse.svg";

export default function Home() {
  return (
    <>
      <main className="grid md:grid-cols-2 md:h-[90vh]">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="w-3/4 mx-auto rounded-md md:w-full md:max-w-md">
            <Image src={MetaVerse} alt="metaverse" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 p-12 overflow-hidden">
          <p className="text-3xl">Welcome to TaskChain!</p>
          <p className="text-base">Discover the latest crypto airdrops and manage your tasks effortlessly. Stay informed and organized with TaskChain, where crypto and productivity meet.</p>
          <p className="text-base">Where crypto airdrops meet seamless task management. Stay in the loop and on track effortlessly.
          </p>
        </div>
      </main>
    </>
  );
}
