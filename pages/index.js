import Head from "next/head";
import React from "react";
import Banners from "../components/Banners/Banners";
import Header from "../components/Header/Header";
import Nav from "../components/Navbar/Nav";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Nav />
      <Banners banners={results} />
    </div>
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
