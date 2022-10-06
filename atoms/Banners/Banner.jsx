import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

export default function Banner({ item }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hiver:scale-105 hover:z-50">
      <img
        layout="responsive"
        alt={"banner profile"}
        src={
          `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
          `${BASE_URL}${item.poster_path}`
        }
        height={1000}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duartion-100 ease-in-out group-hover:fon-bold">
          {item.title || item.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type}`}
          {item.release_date && `${item.first_air_date}`}
          <HandThumbUpIcon className="h-5 mx-2" />
          {item.vote_count}
        </p>
      </div>
    </div>
  );
}
