import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grand Hyatt Melbourne Map Index</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <div className="h-screen">
        <div className="w-screen bg-[#bd2238] p-4 text-white flex justify-center items-center">
          <Image src="/images/logo.svg" width={300} height={100} alt={''} />
        </div>
        <div className="w-screen h-full px-4 py-20 bg-slate-100">
          <Link href="/eat">
            <div className="w-full h-auto mb-12 bg-white hover:bg-[#bd2238] text-[#bd2238] hover:text-white border-2 border-[#bd2238] hover:border-white flex justify-center items-center px-6 py-4 rounded-md">
              <h1 className="uppercase text-2xl">Eat</h1>
            </div>
          </Link>
          <Link href="/drink">
            <div className="w-full h-auto mb-12 bg-white hover:bg-[#bd2238] text-[#bd2238] hover:text-white border-2 border-[#bd2238] hover:border-white flex justify-center items-center px-6 py-4 rounded-md">
              <h1 className="uppercase text-2xl">Drink</h1>
            </div>
          </Link>
          <Link href="/play">
            <div className="w-full h-auto mb-12 bg-white hover:bg-[#bd2238] text-[#bd2238] hover:text-white border-2 border-[#bd2238] hover:border-white flex justify-center items-center px-6 py-4 rounded-md">
              <h1 className="uppercase text-2xl">Play</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
