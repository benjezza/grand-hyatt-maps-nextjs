import Head from 'next/head';
import Image from 'next/image';
import Map from '../components/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Mapbox Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <div className="z-10 absolute top-0 left-0 w-screen bg-[#bd2238] p-4 text-white flex justify-center items-center">
          <Image src="/images/logo.svg" width={300} height={100} alt={''} />
        </div>
        <Map className="h-full" />
      </div>
    </>
  );
}
