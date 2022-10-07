import Desc from "./Desc";
import Img from "./Img";

export default function Banner({ item }) {
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hiver:scale-105 hover:z-50">
      <Img item={item} />
      <Desc item={item} />
    </div>
  );
}
