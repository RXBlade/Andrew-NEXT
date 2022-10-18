import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import Image from "next/image";
import Notifications from "./components/notifications";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex w-screen h-screen justify-center items-center bg-[#FFFAEB] text-[#25282D]">
        <h1 className="text-4xl font-semibold">Andrei Pascuta</h1>
      </div>
    </div>
  );
};

export default Home;
