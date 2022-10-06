import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="" />
      </Head>
      <h1>Lets build Hulu clone</h1>

      <Header />
    </div>
  );
}
