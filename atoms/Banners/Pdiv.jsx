import { HandThumbUpIcon } from "@heroicons/react/24/solid";
export default function Pdiv({ item }) {
  return (
    <p className="flex items-center opacity-0 group-hover:opacity-100">
      {item.media_type && `${item.media_type}`}
      {item.release_date || `${item.first_air_date}`}
      <HandThumbUpIcon className="h-5 mx-2" />
      {item.vote_count}
    </p>
  );
}
