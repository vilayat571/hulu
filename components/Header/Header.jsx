import Imglogo from "../../atoms/Header/Imglogo";
import HeadItems from "./HeadItems";
export default function Header() {
  return (
    <header className="flex lg:flex-row sm:flex-col md:flex-col m-3 justify-between items-center">
      <HeadItems />
      <Imglogo />
    </header>
  );
}
