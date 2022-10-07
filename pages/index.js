import Head from "next/head";
import React from "react";
import Banners from "../components/Banners/Banners";
import Header from "../components/Header/Header";
import Nav from "../components/Navbar/Nav";
import requests from "../utils/requests";
export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <link
          rel="icon"
          href="https://findicons.com/files/icons/1253/flurry_extras/256/hulu.png"
        />
        <meta
          name="title"
          content="Stream TV and Movies Live and Online | Hulu"
        />
        <meta
          name="description"
          content="Watch TV shows and movies online. Stream TV episodes of Grey's Anatomy, This Is Us, Bob's Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. Cancel anytime."
        />
      </Head>
      <Header />
      <Nav />
      <Banners banners={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
