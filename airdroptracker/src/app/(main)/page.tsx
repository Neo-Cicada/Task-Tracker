import Image from "next/image";
import MetaVerse from "../../../public/metaverse.svg"
export default function Home() {
  return (
    <>
      <main className="md:flex h-[90vh]">
        <div className="flex items-center justify-center border h-1/2 md:h-full md:w-1/2">
          <div className="border border-gray-600 w-[80%] h-[80%] rounded-md">
            <Image src={MetaVerse} alt="metaverse"/>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 p-12 border h-1/2 md:h-full md:w-1/2">
          {/* btc, eth, sol, bnb price */}
          <div className="border border-gray-600 rounded-md h-36 ">
            <p>BTC</p>
            <p>ETH</p>
            <p>BNB</p>
            <p>XRP</p>
            <p>TON</p>
          </div>
          <div className="border border-gray-600 rounded-md h-36 ">
            newly added airdrop project
          </div>
          <div className="border border-gray-600 rounded-md h-36 ">
            crypto ads position
          </div>
        </div>
      </main>
    </>
  );
}
