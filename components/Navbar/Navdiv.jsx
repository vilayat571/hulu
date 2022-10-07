import { useRouter } from "next/router";
import React from "react";
import requests from "../../utils/requests";

export default function Navdiv() {
    const router = useRouter();
  return (
    <div
      className="flex px-10 sm:px-20 text-2xl
  space-x-10 overflow-y-hidden no-scrollbar sm:space-x-20 overflow-x-scroll whitespace-nowrap"
    >
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
          className="last:pr-24 cursor-pointer transition duration-100 
      transform hover:scale-125 hover:text-white active:text-red-500"
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
