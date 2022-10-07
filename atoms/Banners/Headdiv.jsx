export default function Headdiv({ item }) {
  return (
    <>
      <p className="truncate max-w-md">{item.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all duartion-100 ease-in-out group-hover:fon-bold">
        {item.title || item.original_name}
      </h2>
    </>
  );
}
