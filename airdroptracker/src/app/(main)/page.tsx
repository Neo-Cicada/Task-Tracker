import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="md:flex h-[90vh]">
        <div className="border border-red-500 h-1/2 md:h-full md:w-1/2">
          left
        </div>
        <div className="border border-red-500 h-1/2 md:h-full md:w-1/2">
          right
        </div>
      </main>
    </>
  );
}
