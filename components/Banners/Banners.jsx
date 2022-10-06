import Banner from "../../atoms/Banners/Banner";
export default function Banners({ banners }) {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 
    lg:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      {banners.map((item, index) => (
        <Banner item={item} key={index} />
      ))}
    </div>
  );
}
