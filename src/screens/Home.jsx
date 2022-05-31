import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moron Capital</title>
        <meta name="description" content="Welcome to The Moronaissance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
